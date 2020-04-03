import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MainContainerComponent } from './main-container.component';
import { SearchServise } from 'src/app/servises/search.service';
import { SearchComponent } from 'src/app/components/search/search.component';
import { GoogleResultsComponent } from 'src/app/components/google-results/google-results.component';
import { BingResultsComponent } from 'src/app/components/bing-results/bing-results.component';
import { Router } from '@angular/router';

class MockRouter {
  navigateByUrl(url: string) { return url; }
}

describe('MainContainerComponent', () => {
  let fixture: ComponentFixture<MainContainerComponent>;
  let searchServise: any;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContainerComponent, SearchComponent, GoogleResultsComponent, BingResultsComponent ],
      providers: [ SearchServise, { provide: Router, useClass: MockRouter } ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MainContainerComponent);
    searchServise = fixture.debugElement.injector.get(SearchServise);
    compiled = fixture.debugElement.nativeElement;
  }));

  it('should render text with or without google data', () => {
    searchServise.googleParam$.next(true);
    fixture.detectChanges();
    expect(compiled.querySelector('app-google-results')).toBeTruthy();

    searchServise.googleParam$.next(false);
    fixture.detectChanges();
    expect(compiled.querySelector('app-google-results')).toBeFalsy();
  });

  it('should render text with or without bing data', () => {
    searchServise.bingParam$.next(true);
    fixture.detectChanges();
    expect(compiled.querySelector('app-bing-results')).toBeTruthy();

    searchServise.bingParam$.next(false);
    fixture.detectChanges();
    expect(compiled.querySelector('app-bing-results')).toBeFalsy();
  });

});
