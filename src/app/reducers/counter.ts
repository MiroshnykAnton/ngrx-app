import { state } from "@angular/animations";
import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const clear = createAction('[COUNTER] clear');

export interface CounterState {
  count: number;
}

// we staying on Vienaicce, 
// swim in Inglicce
// if therer are some dark, we gone - liht them!(фонари, лазер, ночное видение)

export const initialState: CounterState = {
  count: 10
};

export const counterReducer = createReducer(
  initialState,
  on(increase, (state) => ({
    ...state,
    count: state.count + 1
  })),
  on(decrease, (state) => ({
    ...state,
    count: state.count - 1
  })),
  on(clear, (state) => ({
    ...state,
    count: 0
  }))
);

export const featureSelector = createFeatureSelector<CounterState>('counter');

export const countSelector = createSelector(
  featureSelector, state => state.count
)