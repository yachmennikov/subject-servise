import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BingResultsComponent } from './bing-results.component';
import { SearchServise } from '../../servises/search.service';
import { SettingsService } from 'src/app/servises/settings.service';

describe('SearchComponent test', () => {
  let fixture: ComponentFixture<BingResultsComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ BingResultsComponent ],
      providers: [ SearchServise, SettingsService ]
    }).compileComponents();
    fixture = TestBed.createComponent(BingResultsComponent);
  });

  it('should create the SearchComponent', () => {
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render text in a h4 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Bing Block');
  });

  it('should render test of search value in Bing page', () => {
    const searchServise = fixture.debugElement.injector.get(SearchServise);
    searchServise.searchValue$.next('value');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain('value');
  });

});
