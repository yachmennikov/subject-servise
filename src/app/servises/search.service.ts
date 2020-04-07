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

  changeSearchValue(value: string) {
    this.searchValue$.next(value);
  }

  toggleGoogleParam(value: boolean) {
   this.googleParam$.next(value);
  }

  toggleBingParam(value: boolean) {
    this.bingParam$.next(value);
  }

}
