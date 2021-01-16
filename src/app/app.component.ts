import { Component, OnDestroy } from '@angular/core';
import { timer } from 'rxjs';
import { __spread } from 'tslib';
import { GHOSTS } from './ghosts.data';
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
  startText = 'Start';

  constructor() {
    this.ghosts = [...GHOSTS];
    this.tests = [...TESTS];
    this.duplicateTestResults = false;
    this.counter = 0;
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
      this.startText = 'Stop';
      const startTime = Date.now() - (this.counter || 0);
      clearInterval(this.timerRef);
      this.timerRef = setInterval(() => {
        // this.counter = Math.floor((Date.now() - startTime) / 1000);
        this.counter = Date.now() - startTime;
      });
    } else {
      this.startText = 'Resume';
      clearInterval(this.timerRef);
    }
  }

  clearTimer() {
    this.running = false;
    this.startText = 'Start';
    this.counter = 0;
    clearInterval(this.timerRef);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }
}
