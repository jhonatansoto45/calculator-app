import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from '../calculator/interface/calculator.interface';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  theme$: BehaviorSubject<string> = new BehaviorSubject<string>(Theme.dark);

  constructor() {}
}
