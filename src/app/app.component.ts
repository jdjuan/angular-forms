import { Hero } from './hero.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model: Hero;

  constructor() {
    this.model = new Hero(18, 'Dr IQ', 'xRay', 'Chuck Overstreet');
  }

  onSubmit() {
    console.log(this.model);
  }
}
