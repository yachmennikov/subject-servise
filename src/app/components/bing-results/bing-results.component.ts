import { Component, OnInit } from '@angular/core';
import { SearchServise } from 'src/app/servises/search.service';

@Component({
  selector: 'app-bing-results',
  templateUrl: './bing-results.component.html',
  styleUrls: ['./bing-results.component.scss']
})
export class BingResultsComponent implements OnInit {

  constructor(public searchServise: SearchServise) { }

  ngOnInit() {
    console.log(this.searchServise.searchValue$);
  }

}
