import { Beer } from "@beer/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as BeerActions from './beer.actions';

export const BEER_FEATURE_KEY = 'beers';

export interface BeerState extends EntityState<Beer> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
};

export interface BeerPartialState {
  readonly [BEER_FEATURE_KEY]: BeerState
};

export const beerAdapter: EntityAdapter<Beer> = createEntityAdapter<Beer>();

export const initialBeerState: BeerState = beerAdapter.getInitialState(
  {
    loaded: false
  }
);

const onFailure = (state, {error}): BeerState => ({ ...state, error});

const onDispatch = (state, action): BeerState => ({
  ...state,
  loaded: false,
  error: null
})

const _beerReducer = createReducer(
  initialBeerState,
  on(
    BeerActions.loadBeerFailure,
    BeerActions.loadBeersFailure,
    BeerActions.deleteBeerFailure,
    BeerActions.updateBeerFailure,
    BeerActions.createBeerFailure,
    onFailure
  ),
  on(
    BeerActions.loadBeer,
    BeerActions.loadBeers,
    BeerActions.deleteBeer,
    BeerActions.updateBeer,
    BeerActions.createBeer,
    onDispatch
  ),
  on(
    BeerActions.loadBeerSuccess, (state, { beer}) =>
    beerAdapter.upsertOne(beer, { ...state, loaded: true})
  ),
  on(
    BeerActions.selectBeer, (state, { beerId}) =>({
      ...state,
      selectedId: beerId
    }) 
  ),
  on(
    BeerActions.loadBeersSuccess, (state, { beers }) =>
    beerAdapter.setAll(beers, {...state, loaded: true})
  ),
on(
    BeerActions.deleteBeerSuccess, (state, { beer }) =>
    beerAdapter.removeOne(beer.id, {...state, loaded: true})
  ),
  on(
    BeerActions.updateBeerSuccess, (state, { beer}) =>
    beerAdapter.updateOne(
      {id: beer.id, changes: beer},
      {...state, loaded: true}
    )
  ),
  on(
    BeerActions.createBeerSuccess, (state, { beer }) =>
    beerAdapter.addOne(beer, {...state, loaded: true}) 
  ),
)

  export function beerReducer(
    state: BeerState | undefined,
    action: Action
  ) {
    return _beerReducer(state, action)
  } 