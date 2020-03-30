import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleResultsComponent } from './google-results.component';

describe('GoogleResultsComponent', () => {
  let component: GoogleResultsComponent;
  let fixture: ComponentFixture<GoogleResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
