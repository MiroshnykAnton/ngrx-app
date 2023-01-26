import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { clear, countSelector, decrease, increase, updatedAtSelector } from './reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // updateAt?: number; 

  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map((count) => count <= 0));
  updatedAt$ = this.store.select(updatedAtSelector);

  constructor(private store: Store) {}

  increase() {
    this.store.dispatch(increase());
  }

  decrease() {
    this.store.dispatch(decrease());
  }

  clear() {
    this.store.dispatch(clear());
  }
}
