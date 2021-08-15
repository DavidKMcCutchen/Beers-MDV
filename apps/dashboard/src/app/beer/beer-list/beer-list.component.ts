import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Beer } from "@beer/api-interfaces";

@Component({
  selector: 'beer-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent {
  @Input() beers: Beer[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
