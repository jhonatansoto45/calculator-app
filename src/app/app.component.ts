import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calculator-app';

  test(id: number): void {
    const claseActual = document.body.classList[0];
    document.body.classList.remove(claseActual);

    switch (id) {
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
