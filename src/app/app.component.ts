import { Component } from '@angular/core';
import { GHOSTS } from './ghosts.data';
import { TESTS } from './tests.data';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar></app-nav-bar>
    <div class="container">
      <div class="card freezing-temps">
        <div class="card-body">
          <h5 class="card-title">Freezing Temps</h5>
          <p class="card-text">
            There are 6 ghosts that show Freezing Temps and 6 ghosts that do not
            show Freezing Temps. On a No Evidence run, this can be accomplished
            by seeing or not seeing your breath in the ghost's room.
          </p>
          <button
            class="btn"
            [ngClass]="{
              'btn-primary': this.freezingTemps === true,
              'btn-secondary': this.freezingTemps !== true
            }"
            (click)="this.confirmFreezingTemp(true)"
          >
            Yes
          </button>

          <button
            class="btn"
            [ngClass]="{
              'btn-primary': this.freezingTemps === false,
              'btn-secondary': this.freezingTemps !== false
            }"
            (click)="this.confirmFreezingTemp(false)"
          >
            No
          </button>

          <button
            class="btn"
            [ngClass]="{
              'btn-primary': this.freezingTemps === undefined,
              'btn-secondary': this.freezingTemps !== undefined
            }"
            (click)="this.confirmFreezingTemp()"
          >
            Unknown
          </button>
          <span class="reset-warning" *ngIf="this.freezingTemps !== undefined"
            >Warning: Changing the selection here will reset the Test selections
            below</span
          >
        </div>
      </div>

      <div
        class="card"
        *ngIf="this.freezingTemps === undefined; else testBlock"
      >
        <div class="card-body">
          In order to display tests you must first determine if there are
          freezing temps in the ghost rooms.
        </div>
      </div>

      <ng-template #testBlock>
        <div class="card test" *ngFor="let test of tests">
          <div class="card-body" *ngIf="test">
            <h5 class="card-title">{{ test.name }}</h5>
            <p class="card-text">
              {{ test.description }}
            </p>
            <button
              class="btn"
              [ngClass]="{
                'btn-primary': test.passed === true,
                'btn-secondary': test.passed !== true
              }"
              (click)="this.confirmPass(test.name, true)"
            >
              Pass
            </button>

            <button
              class="btn"
              [ngClass]="{
                'btn-primary': test.passed === false,
                'btn-secondary': test.passed !== false
              }"
              (click)="this.confirmPass(test.name, false)"
            >
              Fail
            </button>

            <button
              class="btn"
              [ngClass]="{
                'btn-primary': test.passed === undefined,
                'btn-secondary': test.passed !== undefined
              }"
              (click)="this.confirmPass(test.name)"
            >
              Untested
            </button>
          </div>
        </div>
      </ng-template>

      <div class="card possible-ghosts" *ngIf="!duplicateTestResults">
        <div class="card-body">
          <h5 class="card-title">Possible Ghosts</h5>
          <span class="card-text">
            <ul class="list-group list-group-flush" *ngIf="this.ghosts?.length">
              <li class="list-group-item" *ngFor="let ghost of this.ghosts">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{{ ghost.name }}</h5>
                  <small *ngIf="ghost.positiveTests?.length">Testable</small>
                </div>
                <p class="mb-1">
                  {{ ghost.description }}
                </p>
                <small *ngIf="ghost.requiresFreezingTemp">Freezing Temps</small>
                <small *ngIf="!ghost.requiresFreezingTemp"
                  >No Freezing Temps</small
                >
              </li>
            </ul>
          </span>
        </div>
      </div>

      <div
        class="alert alert-danger d-flex flex-column"
        role="alert"
        *ngIf="duplicateTestResults"
      >
        <span>You have more then 1 passed test, that is not possible!</span>
        <button class="btn btn-danger" (click)="this.resetEverything()">
          Click here to reset everything and try again.
        </button>
      </div>

      <!-- <app-footer></app-footer> -->
    </div>
  `,
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

  constructor() {
    this.ghosts = [...GHOSTS];
    this.tests = [...TESTS];
    this.duplicateTestResults = false;
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
}
