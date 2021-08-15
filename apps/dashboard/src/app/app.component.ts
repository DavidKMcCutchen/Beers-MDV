import { Component } from '@angular/core';

@Component({
  selector: 'beer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Beer';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'beers', icon: 'view_list', title: 'Beers'}
  ]
}
