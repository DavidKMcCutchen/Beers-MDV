import { ActionReducerMap } from "@ngrx/store";
import * as fromBeers from './beer/beer.reducer';

export interface AppState {
  [fromBeers.BEER_FEATURE_KEY]: fromBeers.BeerState
}

export const reducers: ActionReducerMap<AppState> = {
  [fromBeers.BEER_FEATURE_KEY]: fromBeers.beerReducer
}