import { TestBed } from '@angular/core/testing';

import { InfoEdificioService } from './info-edificio.service';

describe('InfoEdificioService', () => {
  let service: InfoEdificioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoEdificioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
