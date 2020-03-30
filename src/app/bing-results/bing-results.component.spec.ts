import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingResultsComponent } from './bing-results.component';

describe('BingResultsComponent', () => {
  let component: BingResultsComponent;
  let fixture: ComponentFixture<BingResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
