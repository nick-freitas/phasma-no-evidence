import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'msToSec' })
export class TimeChangePipe implements PipeTransform {
  transform(value: number): string {
    return (Math.floor(value / 100) / 10).toFixed(1);
  }
}
