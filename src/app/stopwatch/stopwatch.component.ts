import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent implements OnInit, OnDestroy {
  running: boolean;
  counter: number;
  timerRef: any;
  lapTimes: number[];
  lapDelta: number;

  constructor() {
    this.running = false;
    this.counter = 0;
    this.lapTimes = [];
    this.lapDelta = 0;
  }

  ngOnInit(): void {}

  startResumeTimer() {
    this.running = !this.running;
    //IF the counter is running startTime will be the number that the timer
    //starts with when you pause and resume, this.counter is the current time
    //that is displayed on the web browser
    if (this.running) {
      const startTime = Date.now() - (this.counter || 0);
      clearInterval(this.timerRef);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
      });
    } else {
      clearInterval(this.timerRef);
    }
  }

  lapTime() {
    this.lapTimes.unshift(this.counter);
    if (this.lapTimes.length < 2) {
      this.lapDelta = 0;
      return;
    }

    this.lapDelta = this.lapTimes[0] - this.lapTimes[1];
  }

  clearTime() {
    this.running = false;
    this.counter = 0;
    this.lapTimes = [];
    this.lapDelta = 0;
    clearInterval(this.timerRef);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }
}
