import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Theme } from '../calculator/interface/calculator.interface';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  theme$: BehaviorSubject<string> = new BehaviorSubject<string>(Theme.dark);
  text$: Subject<string> = new Subject<string>();

  constructor() {}

  operation(num1: number, num2: number, operator: string): number {
    console.log(num1, num2, operator);

    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case 'x':
        return num1 * num2;
      case '/':
        return num1 / num2;
    }

    return 0;
  }
}
