import { Injectable } from '@angular/core';
import { Beer } from '@beer/api-interfaces';
import { BeerService } from '@beer/core-data';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as BeerActions from './beer.actions';
import { filter, map, tap } from 'rxjs/operators';
import { fetch, pessimisticUpdate } from '@nrwl/angular';

@Injectable()
export class BeerEffects {
  loadBeer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeerActions.loadBeer),
      fetch({
        run: (action) =>
          this.beersService
            .find(action.beerId)
            .pipe(map((beer: Beer) => BeerActions.loadBeerSuccess({ beer }))),
        onError: (action, error) => BeerActions.loadBeerFailure({ error }),
      })
    )
  );

  loadBeers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeerActions.loadBeers), // filter((action) => action.type === BeerActions.loadBeers.type)
      fetch({
        run: () =>
          this.beersService
            .all()
            .pipe(
              map((beers: Beer[]) => BeerActions.loadBeersSuccess({ beers }))
            ),
        onError: (action, error) => BeerActions.loadBeersFailure({ error }),
      })
    )
  );

  updateBeer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeerActions.updateBeer),
      pessimisticUpdate({
        run: (action) =>
          this.beersService
            .update(action.beer)
            .pipe(map((beer: Beer) => BeerActions.updateBeerSuccess({ beer }))),
        onError: (action, error) => BeerActions.updateBeerFailure({ error }),
      })
    )
  );

  deleteBeer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeerActions.deleteBeer),
      pessimisticUpdate({
        run: (action) =>
          this.beersService
            .delete(action.beer)
            .pipe(
              map(() => BeerActions.deleteBeerSuccess({ beer: action.beer }))
            ),
        onError: (action, error) => BeerActions.deleteBeerFailure({ error }),
      })
    )
  );

  createBeer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BeerActions.createBeer),
      pessimisticUpdate({
        run: (action) =>
          this.beersService
            .create(action.beer)
            .pipe(map((beer: Beer) => BeerActions.createBeerSuccess({ beer }))),
        onError: (action, error) => BeerActions.createBeerFailure({ error }),
      })
    )
  );

  constructor(private actions$: Actions, private beersService: BeerService) {}
}
