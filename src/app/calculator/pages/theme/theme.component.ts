import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent {
  changeTheme(id: string): void {
    const theme = Number(id);

    const claseActual = document.body.classList[0];
    document.body.classList.remove(claseActual);

    switch (theme) {
      case 1:
        document.body.classList.add('theme-dark');
        break;
      case 2:
        document.body.classList.add('theme-white');
        break;
      case 3:
        document.body.classList.add('theme-future');
        break;

      default:
        document.body.classList.add('theme-dark');
        break;
    }
  }
}
