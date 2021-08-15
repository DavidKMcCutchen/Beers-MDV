import { Injectable } from "@angular/core";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { Beer } from "@beer/api-interfaces";
import { map, filter } from "rxjs/operators";
import * as BeerActions from './beer.actions';
import * as BeersSelectors from './beer.selectors';
import * as fromBeers from './beer.reducer';


@Injectable({
  providedIn: 'root',
})

export class BeerFacade {
  allBeers$ = this.store.pipe(
    map((state) => BeersSelectors.getAllBeers(state)),
  )
  selectedBeers$ = this.store.pipe(select(BeersSelectors.getSelectedBeer));
  loaded$ = this.store.pipe(select(BeersSelectors.getBeersLoaded));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
    action.type === BeerActions.createBeer({} as any) .type  ||
    action.type === BeerActions.deleteBeer({} as any) .type  ||
    action.type === BeerActions.updateBeer({} as any) .type  
  ),
  )
  selectBeer(beerId: string) {
    this.dispatch(BeerActions.selectBeer({ beerId }))
  }

  loadBeers() {
    this.dispatch(BeerActions.loadBeers());
  }
  
  loadBeer(beerId: string) {
    this.dispatch(BeerActions.loadBeer({ beerId }));
  }

  saveBeer(beer: Beer) {
    beer.id ? this.updateBeer(beer) : this.createBeer(beer);
  }

  createBeer(beer: Beer) {
    this.dispatch(BeerActions.createBeer({ beer }));
  }

  updateBeer(beer: Beer) {
    this.dispatch(BeerActions.updateBeer({ beer }));
  }

  deleteBeer(beer: Beer) {
    this.dispatch(BeerActions.deleteBeer({ beer }))
  }

  dispatch(action: Action) {
    this.store.dispatch(action)
  } 

  constructor(
    private store: Store<fromBeers.BeerPartialState>,
    private actions$: ActionsSubject
  ) {}

}