import { Component } from '@angular/core';
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
    `,
  ],
})
export class AppComponent {
  freezingTemps?: boolean;
  ghosts: any[];
  tests: any[];
  duplicateTestResults: boolean;
  timerOn?: boolean;
  counter: any;


  constructor() {
    this.ghosts = [...GHOSTS];
    this.tests = [...TESTS];
    this.duplicateTestResults = false;
    this.stopwatch();
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

  stopwatch(): void {
    // creates a second timer
    let seconds$ = timer(0, 1000);
    if (this.timerOn === true) {
      seconds$.subscribe(x => { this.counter = x });
    } else {
      //PAUSE
    }
    this.timerOn = !this.timerOn;

  }


}
