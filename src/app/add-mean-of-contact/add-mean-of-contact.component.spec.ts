import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeanOfContactComponent } from './add-mean-of-contact.component';

describe('AddMeanOfContactComponent', () => {
  let component: AddMeanOfContactComponent;
  let fixture: ComponentFixture<AddMeanOfContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMeanOfContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeanOfContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
