import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { SearchServise } from '../../servises/search.service';
import { SettingsService } from 'src/app/servises/settings.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchComponent test', () => {
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [RouterTestingModule],
      providers: [SearchServise, SettingsService]
    }).compileComponents();
  });

  it('should create the SearchComponent', () => {
    fixture = TestBed.createComponent(SearchComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

});
