import { TestBed } from '@angular/core/testing';

import { AnyService } from './any.service';

describe('AnyService', () => {
  let service: AnyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
