import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByGroupComponent } from './filter-by-group.component';

describe('FilterByGroupComponent', () => {
  let component: FilterByGroupComponent;
  let fixture: ComponentFixture<FilterByGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterByGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
