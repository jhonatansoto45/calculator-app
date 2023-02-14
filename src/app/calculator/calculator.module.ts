import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { KeysComponent } from './pages/keys/keys.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { ThemeComponent } from './pages/theme/theme.component';

@NgModule({
  declarations: [
    HomeComponent,
    KeysComponent,
    NumbersComponent,
    ThemeComponent,
  ],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class CalculatorModule {}
