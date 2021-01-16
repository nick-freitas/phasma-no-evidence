import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'msToSec' })
export class TimeChangePipe implements PipeTransform {
  transform(value: number): number {
    return Math.floor(value / 1000);
  }
}
