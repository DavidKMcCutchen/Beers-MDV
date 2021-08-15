import {  createFeatureSelector, createSelector } from "@ngrx/store";
import { emptyBeer } from "@beer/api-interfaces";
import { beerAdapter, BeerState, BEER_FEATURE_KEY } from "./beer.reducer";

export const getBeerState = createFeatureSelector<BeerState>(BEER_FEATURE_KEY);

const { selectAll, selectEntities } = beerAdapter.getSelectors();

export const getBeersLoaded = createSelector(
  getBeerState,
  (state: BeerState) => state.loaded
);

export const getBeerError = createSelector(
  getBeerState,
  (state: BeerState) => state.error
);

export const getAllBeers = createSelector(
  getBeerState,
  (state: BeerState) => selectAll(state)
);

export const getBeerEntities = createSelector(
  getBeerState,
  (state: BeerState) => selectEntities(state)
);

export const getSelectedBeerId = createSelector(
  getBeerState,
  (state: BeerState) => state.selectedId
);

export const getSelectedBeer = createSelector(
  getBeerEntities,
  getSelectedBeerId,
  (entities, selectedId) => (selectedId && entities[selectedId]) || emptyBeer
)

