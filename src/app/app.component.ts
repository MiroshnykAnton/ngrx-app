import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter = 0;
  updateAt?: number;

  get cannotDecrease(): boolean {
    return this.counter <= 0;
  }

  increase() {
    this.counter++;
    this.updateAt = Date.now();
  }

  decrease() {
    this.counter--;
    this.updateAt = Date.now();
  }

  clear() {
    this.counter = 0;
    this.updateAt = Date.now();
  }
}
