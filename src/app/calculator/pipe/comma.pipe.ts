import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comma',
})
export class CommaPipe implements PipeTransform {
  readonly numberSeparator: number = 3;
  transform(value: string): string {
    let count: number = 0;
    let msg: string = '';

    value.split('').forEach((number) => {
      if (count === this.numberSeparator) {
        msg = msg.concat(',');
        count = 0;
      }

      msg = msg.concat(number);
      count = count + 1;
    });

    return value;
  }
}
