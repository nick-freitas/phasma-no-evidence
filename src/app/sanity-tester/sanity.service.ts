import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, timer } from 'rxjs';
import { DIFFICULTIES, Difficulty } from '../data/difficulties.data';
import { Map, MAPS } from '../data/maps.data';

export interface SanityRange {
  low: number;
  high: number;
}

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  /**
   * Goals:
   *
   * Need to know:
   * - What type of map
   * - Single vs Multiplayer
   *
   * * Be as accurate as it can be with sanity so you dont need to go back to the truck
   * * Only to see what type of ghost it'll be
   *
   *
   * * For example: Sanity is @ 90%, you go into the dark room and we calc the sanity
   *  --- Normal Sanity
   *  --- Mare Sanity
   *  --- Yurei Sanity
   *  --- Demon Sanity
   * * We track what it normally would be vs what it is on a specifc type of ghost
   *
   * * Special Sanity Drops
   * --- Fail Ouija -40
   * --- Success Ouija
   * --- --- Demon: stays as is
   * --- ---- Rest:
   *
   * * You log the time with timer, when you're done with the "timer" you hit the lap button and ...
   *
   * * Go back to Truck and check what sanity is
   *
   * Gaining Sanity
   * -- Took pill button
   *
   * Add in "Low Sanity", user can input
   *
   * TWO TYPES of SANITY DRAIN
   *
   * * Passive Sanity Drain
   * -- Check state of "IN DARKNESS" toggle; if on passive; if off no passive
   *
   * * Active Ghost Evidence
   *  --- Start timer ; LAP
   *
   * * Need to take in what map
   * * Need to take in what the difficulty is
   */
  sanity$: BehaviorSubject<SanityRange>;
  inDarkness$: BehaviorSubject<boolean>;
  lowSanityDelta: number = -2;
  highSanityDelta: number = 3;
  map: Map;
  difficulty: Difficulty;
  subscriptions: Subscription[];
  timing: Subscription | undefined;

  constructor() {
    this.sanity$ = new BehaviorSubject<SanityRange>({ low: 0, high: 0 });
    this.nextSanity(100);

    this.inDarkness$ = new BehaviorSubject<boolean>(false);
    this.map = MAPS[0];
    this.difficulty = DIFFICULTIES[0];

    this.subscriptions = [];
    this.subscriptions.push(
      this.inDarkness$.subscribe((inDarkness) => {
        if (!inDarkness) {
          return this.stopTimer();
        }

        this.timing = timer(0, 1000).subscribe((_) =>
          this.nextSanity(
            this.sanity$.value.low -
              this.lowSanityDelta -
              (this.map.normalDropRate || 0)
          )
        );
      })
    );
  }

  private stopTimer() {
    this.timing?.unsubscribe();
  }

  setMap(map: Map) {
    this.map = map;
  }

  setDifficulty(difficulty: Difficulty) {
    this.difficulty = difficulty;
  }

  resetSanity(sanity: number): void {
    sanity = sanity - this.lowSanityDelta;
    this.nextSanity(sanity);
  }

  setDarkness(value: boolean): void {
    this.inDarkness$.next(value);
  }

  private nextSanity(sanity: number): void {
    this.sanity$ = new BehaviorSubject<SanityRange>({
      low: this.getLowSanity(sanity),
      high: this.getHighSanity(sanity),
    });
  }

  getLowSanity(sanity: number): number {
    const lowSanity = sanity + this.lowSanityDelta;
    if (lowSanity < 0) return 0;
    return lowSanity;
  }

  getHighSanity(sanity: number): number {
    const highSanity = sanity + this.highSanityDelta;
    if (highSanity > 100) return 100;
    return highSanity;
  }
}
