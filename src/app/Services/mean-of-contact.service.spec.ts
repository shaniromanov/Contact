import { TestBed } from '@angular/core/testing';

import { MeanOfContactService } from './mean-of-contact.service';

describe('MeanOfContactService', () => {
  let service: MeanOfContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeanOfContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
