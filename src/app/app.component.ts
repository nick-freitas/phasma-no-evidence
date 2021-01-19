import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription, timer } from 'rxjs';
import { __spread } from 'tslib';
import { DIFFICULTIES, Difficulty } from './difficulties.data';
import { GHOSTS } from './ghosts.data';
import { Map, MAPS } from './maps.data';
import { SanityService } from './sanity.service';
import { TESTS } from './tests.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .card,
      .alert {
        margin-top: 12px;
      }

      .card button:not(:first-of-type) {
        margin-left: 4px;
      }

      .reset-warning {
        padding-left: 8px;
        font-size: 0.8rem;
        font-style: italic;
        color: red;
      }

      #counterSize {
        font-size: 3.2rem;
      }
    `,
  ],
})
export class AppComponent {
  freezingTemps?: boolean;
  ghosts: any[];
  tests: any[];
  duplicateTestResults: boolean;
  counter: number;
  timerRef: any;
  running: boolean = false;
  startStopText = 'Start';
  clearLapText = 'Clear';
  maps: Map[];
  map: Map;
  difficulties: Difficulty[];
  difficulty: Difficulty;
  resetValue: FormControl;
  inDarkness: FormControl;
  subscriptions: Subscription[];
  lapTime: number[];
  lapDelta: number;

  constructor(public sanityService: SanityService) {
    this.ghosts = [...GHOSTS];
    this.tests = [...TESTS];
    this.duplicateTestResults = false;
    this.counter = 0;
    this.maps = MAPS;
    this.map = this.maps[0];
    this.difficulties = DIFFICULTIES;
    this.difficulty = this.difficulties[0];
    this.resetValue = new FormControl();
    this.inDarkness = new FormControl();
    this.lapTime = [];
    this.lapDelta = 0;

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

  resetSanity() {
    this.sanityService.resetSanity(this.resetValue.value);
  }

  confirmFreezingTemp(confirm?: boolean): void {
    this.freezingTemps = confirm;

    if (confirm === undefined) {
      this.ghosts = [...GHOSTS];
      return;
    }

    this.resetEverything(this.freezingTemps);
  }

  confirmPass(testName: string, passed?: boolean): void {
    console.log('testing');
    this.tests = this.tests.map((test) => {
      if (test.name === testName) {
        test.passed = passed;
      }

      return test;
    });

    // if this was a pass, then the one we did is the right one
    if (passed) {
      this.ghosts = [
        GHOSTS.find(
          (ghost) =>
            ghost.name ===
            this.tests.find((test) => test.name === testName).positiveTestFor
        ),
      ];
    } else {
      this.ghosts = this.applyTestResults(
        this.applyFreezeFilterToGhosts(GHOSTS)
      );
    }

    // See if we have multiple
    const numberOfPasses = this.tests.filter((test) => test.passed).length;
    if (numberOfPasses > 1) {
      this.duplicateTestResults = true;
    } else {
      this.duplicateTestResults = false;
    }
  }

  applyFreezeFilterToGhosts(ghosts: any[]): any[] {
    return ghosts.filter(
      (ghost: any) => !!this.freezingTemps === !!ghost.requiresFreezingTemp
    );
  }

  applyFreezeFilterToTests(tests: any[]): any[] {
    return tests.filter(
      (test: any) => !!this.freezingTemps === !!test.freezingTempTest
    );
  }

  applyTestResults(ghosts: any[]): any[] {
    return ghosts.filter((ghost: any) => {
      // if there is no test we can perform, then return the ghost because we can't eliminate it
      if (!ghost.positiveTests || !ghost.positiveTests.length) {
        return ghost;
      }

      // if there are tests, make sure every test hasn't been failed (false)
      // (should be true for passed or undefined for unknown)
      return ghost.positiveTests.every(
        (testName: string) =>
          this.tests.find((test) => test.name === testName).passed !== false
      );
    });
  }

  resetEverything(freezingTemps?: boolean): void {
    this.duplicateTestResults = false;

    // for some reason i can't figure out, TEST is getting modded, probably memory location shenenigans, so manually clean it up
    const resetTest = TESTS.map((test: any) => {
      delete test.passed;
      return test;
    });

    this.freezingTemps = freezingTemps;
    this.ghosts = this.applyFreezeFilterToGhosts([...GHOSTS]);
    this.tests = this.applyFreezeFilterToTests([...resetTest]);

    console.log('reset');
  }

  //Stopwatch

  startResumeTimer() {
    this.running = !this.running;
    //IF the counter is running startTime will be the number that the timer
    //starts with when you pause and resume, this.counter is the current time
    //that is displayed on the web browser
    if (this.running) {
      this.startStopText = 'Stop';
      this.clearLapText = 'Lap';
      const startTime = Date.now() - (this.counter || 0);
      clearInterval(this.timerRef);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
      });
    } else {
      this.startStopText = 'Resume';
      this.clearLapText = 'Clear';
      clearInterval(this.timerRef);
    }
  }

  clearLapTimer() {
    if (this.running) {
      this.lapTime.push(this.counter);
      if (this.lapTime.length < 2) {
        this.lapDelta = 0;
      } else {
        this.lapDelta = this.lapTime[1] - this.lapTime[0];
      }
      if (this.lapTime.length > 2) {
        this.lapTime.shift();
        this.lapDelta = this.lapTime[1] - this.lapTime[0];
      }
    } else {
      this.running = false;
      this.startStopText = 'Start';
      this.counter = 0;
      this.lapTime = [];
      this.lapDelta = 0;
      clearInterval(this.timerRef);
    }
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
