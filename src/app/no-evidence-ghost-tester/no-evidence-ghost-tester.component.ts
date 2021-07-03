import { Component, OnInit } from '@angular/core';
import { TESTS } from '../data/tests.data';
import { GHOSTS } from '../data/ghosts.data';

@Component({
  selector: 'app-no-evidence-ghost-tester',
  templateUrl: './no-evidence-ghost-tester.component.html',
  styleUrls: ['./no-evidence-ghost-tester.component.scss'],
})
export class NoEvidenceGhostTesterComponent implements OnInit {
  freezingTemps?: boolean;
  ghosts: any[];
  tests: any[];
  duplicateTestResults: boolean;

  constructor() {
    this.ghosts = GHOSTS.map((g) => ({ ...g }));
    this.tests = TESTS.map((t) => ({ ...t }));
    this.duplicateTestResults = false;
  }

  ngOnInit(): void {}

  confirmFreezingTemp(confirm?: boolean): void {
    this.freezingTemps = confirm;

    if (confirm === undefined) {
      this.ghosts = GHOSTS.map((g) => ({ ...g }));
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

    this.freezingTemps = freezingTemps;
    this.ghosts = this.applyFreezeFilterToGhosts(GHOSTS.map((g) => ({ ...g })));
    this.tests = this.applyFreezeFilterToTests(TESTS.map((t) => ({ ...t })));

    console.log('reset');
  }
}
