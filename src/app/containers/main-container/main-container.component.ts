import { Component, OnInit } from '@angular/core';
import { SearchServise } from 'src/app/servises/search.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor(public searchServise: SearchServise) { }

  ngOnInit() {
  }

}
