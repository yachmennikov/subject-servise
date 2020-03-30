import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServise {

  searchValue$ = new BehaviorSubject<string>('');
  googleParam$ = new BehaviorSubject<boolean>(false);
  bingParam$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  changeSearchValue(value: BehaviorSubject<string>) {
    this.searchValue$ = value;
    console.log(this.searchValue$);
  }

  toggleGoogleParam(value: boolean) {
    console.log(value);
    if (value === true) {
      this.googleParam$.next(true);
    }
    console.log(this.googleParam$);
  }

  toggleBingParam(value: boolean) {
    console.log(this.googleParam$);
  }

}
