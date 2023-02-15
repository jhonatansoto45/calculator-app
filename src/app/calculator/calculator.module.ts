import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { KeysComponent } from './pages/keys/keys.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { CommaPipe } from './pipe/comma.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    KeysComponent,
    NumbersComponent,
    ThemeComponent,
    CommaPipe,
  ],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class CalculatorModule {}
