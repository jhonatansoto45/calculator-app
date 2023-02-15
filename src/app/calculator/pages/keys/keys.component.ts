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
  changeTheme: Subscription = new Subscription();

  constructor(private calcService: CalculatorService) {}

  ngOnInit(): void {
    this.changeTheme = this.calcService.theme$.subscribe((theme) =>
      this.changePropertys(theme)
    );
  }

  ngOnDestroy(): void {
    this.changeTheme.unsubscribe();
  }

  changePropertys(theme: string): void {
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
