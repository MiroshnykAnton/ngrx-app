import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";
import { changeUpdatedAt, clear, decrease, increase } from "./reducers/counter";

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions) { }
  
  updatedAt$ = createEffect(() => this.actions$.pipe(
    ofType(increase, decrease, clear),
    map(()=> changeUpdatedAt({updatedAt: Date.now()}))
  )
    // ,{ dispatch: false }
  );
}

// { dispatch: false } указываеться обязательно перед тем как начать писать все остальное, предохраняет от бесконечного цикла.
// После чего удаляеться из кода