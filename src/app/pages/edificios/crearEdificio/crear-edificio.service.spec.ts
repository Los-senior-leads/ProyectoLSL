import { TestBed } from '@angular/core/testing';

import { CrearEdificioService } from './crear-edificio.service';

describe('CrearEdificioService', () => {
  let service: CrearEdificioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearEdificioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
