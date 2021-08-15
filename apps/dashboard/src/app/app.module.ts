import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeerComponent } from './beer/beer.component';
import { BeerListComponent } from './beer/beer-list/beer-list.component';
import { BeerDetailsComponent } from './beer/beer-details/beer-details.component';
import { MaterialModule } from '@beer/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@beer/core-data';
import { CoreStateModule } from '@beer/core-state';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, BeerComponent, BeerListComponent, BeerDetailsComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
