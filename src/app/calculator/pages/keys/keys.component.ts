import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalculatorService } from '../../../service/calculator.service';
import { Theme } from '../../interface/calculator.interface';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss'],
})
export class KeysComponent implements OnInit, OnDestroy {
  hasTotal: boolean = false;

  changeTheme: Subscription = new Subscription();

  num1: string = '';
  num2: string = '';
  operatorSelected: '+' | '-' | 'x' | '/' | 'del' | '' | string = '';

  constructor(private calcService: CalculatorService) {}

  ngOnInit(): void {
    this.changeTheme = this.calcService.theme$.subscribe((theme) =>
      this.changePropertys(theme)
    );
  }

  ngOnDestroy(): void {
    this.changeTheme.unsubscribe();
  }

  onKeyPress(key: string, operator = ''): void {
    if (this.hasTotal) {
      this.reset();
      this.hasTotal = false;
    }

    switch (operator) {
      case 'reset':
        this.reset();
        return;
      case '=':
        this.total();
        return;
      case 'del':
        this.deleteDigit();
        return;
      default:
        if (operator !== '') this.operatorSelected = operator;
        break;
    }

    this.createOperation(key);
  }

  private createOperation(key: string): void {
    if (this.operatorSelected !== '') {
      this.num2 = this.num2.concat(key);
    } else {
      this.num1 = this.num1.concat(key);
    }

    this.calcService.text$.next(
      `${this.num1} ${this.operatorSelected} ${this.num2}`
    );
  }

  private total(): void {
    const num1 = Number(this.num1);
    const num2 = Number(this.num2);
    const result = String(
      this.calcService.operation(num1, num2, this.operatorSelected)
    );
    this.calcService.text$.next(result);

    this.num1 = result;

    this.hasTotal = true;
  }

  private deleteDigit(): void {
    if (this.operatorSelected !== '') {
      this.num2 = this.num2.slice(0, -1);
    } else {
      this.num1 = this.num1.slice(0, -1);
    }

    this.calcService.text$.next(
      `${this.num1} ${this.operatorSelected} ${this.num2}`
    );

    if (this.num1 === '') {
      this.calcService.text$.next('0');
    }
  }

  private reset(): void {
    this.num1 = '';
    this.num2 = '';
    this.operatorSelected = '';
    this.calcService.text$.next('0');
  }

  private changePropertys(theme: string): void {
    if (theme === Theme.future) {
      Array.from(document.getElementsByClassName('custom')).forEach(
        (element) => {
          (element as HTMLElement).style.color = 'var(--text-white)';
        }
      );
      document.getElementById('igual')!.style.color = 'var(--very-dark-blue)';
    } else {
      Array.from(document.getElementsByClassName('custom')).forEach(
        (element) => {
          (element as HTMLElement).style.color = 'var(--text-secondary)';
        }
      );
      document.getElementById('igual')!.style.color = 'var(--text-secondary)';
    }
  }
}
