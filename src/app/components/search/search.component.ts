import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchServise } from '../../servises/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  isGoogleSelected: boolean;
  isBingSelected: boolean;

  constructor(public searchServise: SearchServise) { }

  ngOnInit() {
    this.form = new FormGroup({
     search: new FormControl('')
    });
  }

  toggleSearchValue(event: any) {
    if (event.target.value === 'google') {
      this.isGoogleSelected = !this.isGoogleSelected;
      this.searchServise.toggleGoogleParam(this.isGoogleSelected);
    } else {
      this.isBingSelected = !this.isBingSelected;
      this.searchServise.toggleBingParam(this.isBingSelected);
    }
  }

  searchRequest(event: any) {
    this.searchServise.changeSearchValue(event.target.value);
  }
}
