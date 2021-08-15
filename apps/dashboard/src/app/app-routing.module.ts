import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from "@angular/router";
import { BeerComponent } from './beer/beer.component';
import { BeerService } from "@beer/core-data";
import { LoginComponent } from "@beer/ui-login";

const routes: Route[] = [
  {path: '', component: LoginComponent},
  {path: 'beers', component: BeerComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}

