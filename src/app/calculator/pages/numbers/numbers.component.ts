import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalculatorService } from '../../../service/calculator.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent implements OnInit, OnDestroy {
  result: string = '0';

  values: Subscription = new Subscription();

  constructor(private calcService: CalculatorService) {}

  ngOnInit(): void {
    this.values = this.calcService.text$.subscribe(
      (value) => (this.result = value)
    );
  }

  ngOnDestroy(): void {
    this.values.unsubscribe();
  }
}
