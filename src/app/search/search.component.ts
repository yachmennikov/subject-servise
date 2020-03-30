import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchServise } from '../search.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  isGoogleSelected = false;
  isBingSelected = false;

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
    }
  }

  searchRequest(event: any) {
    this.searchServise.changeSearchValue(event.target.value);
  }
}
