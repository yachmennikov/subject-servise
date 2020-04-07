import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { SearchServise } from '../../servises/search.service';
import { SettingsService } from 'src/app/servises/settings.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

describe('SearchComponent test', () => {
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule, ReactiveFormsModule ],
      declarations: [ SearchComponent ],
      providers: [ SearchServise, SettingsService ]
    }).compileComponents();
  });

  it('should create the SearchComponent', () => {
    fixture = TestBed.createComponent(SearchComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

});
