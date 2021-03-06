import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchServise } from '../../servises/search.service';
import { SettingsService } from 'src/app/servises/settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  isGoogleSelected = false;
  isBingSelected = false;

  constructor(
    public searchServise: SearchServise,
    private settingsServise: SettingsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
     search: new FormControl('', [Validators.required])
    });
  }

  toggleSearchValue(event: any) {
    if (event.target.value === 'google') {
      this.isGoogleSelected = !this.isGoogleSelected;
      this.searchServise.toggleGoogleParam(this.isGoogleSelected);
      this.router.navigate([''], { queryParams: { engine: 'google', query: this.form.value.search }});
    } else {
      this.isBingSelected = !this.isBingSelected;
      this.searchServise.toggleBingParam(this.isBingSelected);
      this.router.navigate([''], { queryParams: { engine: 'bing', query: this.form.value.search }});
    }
  }

  searchRequest(event: any) {
    this.searchServise.changeSearchValue(event.target.value);
  }
}
