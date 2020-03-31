import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  searchInputBackground$ = new BehaviorSubject<string>('#fff');

  constructor() { }

  changeSearchInputBackground(value: string) {
    this.searchInputBackground$.next(value);
  }

}
