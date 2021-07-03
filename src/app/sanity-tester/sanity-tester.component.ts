import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SanityService } from './sanity.service';
import { Map, MAPS } from '../data/maps.data';
import { DIFFICULTIES, Difficulty } from '../data/difficulties.data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sanity-tester',
  templateUrl: './sanity-tester.component.html',
  styleUrls: ['./sanity-tester.component.scss'],
})
export class SanityTesterComponent implements OnInit {
  resetValue: FormControl;
  maps: Map[];
  map: Map;
  difficulties: Difficulty[];
  difficulty: Difficulty;
  inDarkness: FormControl;
  subscriptions: Subscription[];

  constructor(public sanityService: SanityService) {
    this.resetValue = new FormControl();

    this.maps = MAPS;
    this.map = this.maps[0];

    this.difficulties = DIFFICULTIES;
    this.difficulty = this.difficulties[0];

    this.inDarkness = new FormControl();

    this.subscriptions = [];
    this.subscriptions.push(
      this.inDarkness.valueChanges.subscribe((value) => {
        this.sanityService.setDarkness(value);
      })
    );
  }

  selectMap(map: Map): void {
    this.map = map;
    this.sanityService.setMap(this.map);
  }

  selectDifficulty(difficulty: Difficulty): void {
    this.difficulty = difficulty;
    this.sanityService.setDifficulty(this.difficulty);
  }

  ngOnInit(): void {}

  resetSanity() {
    this.sanityService.resetSanity(this.resetValue.value);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
