import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emptyBeer, Beer } from '@beer/api-interfaces';
import { BeerFacade } from '@beer/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'beer-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {
  allBeers$: Observable<Beer[]> = this.beerFacade.allBeers$;
  selectedBeer$: Observable<Beer> = this.beerFacade.selectedBeers$;

  form: FormGroup;

  constructor(
    private beerFacade: BeerFacade,
    private formBuilder: FormBuilder
  ) {
    this.beerFacade.mutations$.subscribe((_) => this.resetBeer());
  }

  ngOnInit() {
    this.initForm();
    this.beerFacade.loadBeers();
    this.resetBeer()
  }

  selectBeer(beer: Beer) {
    this.beerFacade.selectBeer(beer.id)
    this.form.patchValue(beer);
  }

  saveBeer(beer: Beer) {
    this.beerFacade.saveBeer(beer);
  }

  deleteBeer(beer: Beer) {
    this.beerFacade.deleteBeer(beer);
  }

  resetBeer() {
    this.form.reset();
    this.selectBeer(emptyBeer)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      style: [''],
      description: [''],
      rating: ['']
    })
  }
}
