import { Component } from '@angular/core';
import { SearchServise } from './servises/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public searchServise: SearchServise) {}

}
