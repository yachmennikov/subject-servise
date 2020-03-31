import { Component, OnInit } from '@angular/core';
import { SearchServise } from 'src/app/servises/search.service';

@Component({
  selector: 'app-google-results',
  templateUrl: './google-results.component.html',
  styleUrls: ['./google-results.component.scss']
})
export class GoogleResultsComponent implements OnInit {

  constructor(public searchServise: SearchServise) { }

  ngOnInit() {
  }

}
