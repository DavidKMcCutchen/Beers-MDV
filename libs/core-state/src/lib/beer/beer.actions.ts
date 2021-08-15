import { createAction, props } from "@ngrx/store";
import { Beer } from "@beer/api-interfaces";

// Select Entity

export const selectBeer = createAction(
  '[BEERS] Select Beer',
  props<{ beerId: string}>()
)

// Load all Entities

export const loadBeers = createAction(
  '[BEERS] Load Beers'
);

export const loadBeersSuccess = createAction(
  '[BEERS] Load Beers Succeeded',
  props<{ beers: Beer[] }>()
);

export const loadBeersFailure = createAction(
  '[BEERS] Load Beers Failed',
  props<{ error: any }>()
);

// Load Single Entity

export const loadBeer = createAction(
  '[BEERS] Load Beer',
  props<{ beerId: string}>()
)

export const loadBeerSuccess = createAction(
  '[BEERS] Load Beer Succeeded',
  props<{ beer: Beer}>()
)

export const loadBeerFailure = createAction(
  '[BEERS] Load Beer Failure',
  props<{ error: any}>()
)

// Load Entity Update

export const updateBeer = createAction(
  '[BEERS] Update Beer',
  props<{ beer: Beer}>()
)

export const updateBeerSuccess = createAction(
  '[BEERS] Update Beer Succeeded',
  props<{ beer: Beer}>()
)

export const updateBeerFailure = createAction(
  '[BEERS] Update Beer Failed',
  props<{ error: any}>()
)

// Load Entity Delete

export const deleteBeer = createAction(
  '[BEER] Beer Deleted',
  props<{beer: Beer}>()
);

export const deleteBeerSuccess = createAction(
  '[BEER] Beer Deleted Success',
  props<{beer: Beer}>()
);

export const deleteBeerFailure = createAction(
  '[BEER] Beer Deleted Failure',
  props<{error: any}>()
);

// Load Create Entity

export const createBeer = createAction(
  '[BEER] Create Beer',
  props<{ beer: Beer}>()
);

export const createBeerSuccess = createAction(
  '[BEER] Create Beer Success',
  props<{ beer: Beer}>()
);

export const createBeerFailure = createAction(
  '[BEER] Create Beer Failure',
  props<{ error: any }>()
);