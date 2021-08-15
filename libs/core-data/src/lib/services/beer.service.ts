import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Beer } from "@beer/api-interfaces";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  model = 'beers';

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Beer[]>(this.getUrl());
  };

  find(beerId: string) {
    return this.httpClient.get<Beer>(this.getUrlById(beerId))
  };

  create(beers: Beer) {
    return this.httpClient.post<Beer>(this.getUrl(), beers)
  };

  update(beers: Beer) {
    return this.httpClient.patch<Beer>(this.getUrlById(beers.id), beers)
  };

  delete({ id }: Beer) {
    return this.httpClient.delete<Beer>(this.getUrlById(id))
  };


  private getUrl() {
    return `${BASE_URL}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
