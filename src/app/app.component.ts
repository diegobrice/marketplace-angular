import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-app';
  categories = [
    { name: 'Deporte' },
    { name: 'Tecnologia' },
    { name: 'Aventura' },
  ];
}
