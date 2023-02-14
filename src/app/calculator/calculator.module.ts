import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ThemeComponent } from './pages/theme/theme.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { KeysComponent } from './pages/keys/keys.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    ThemeComponent,
    NumbersComponent,
    KeysComponent,
    HomeComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [HomeComponent],
})
export class CalculatorModule {}
