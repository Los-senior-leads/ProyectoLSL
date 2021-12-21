import { TestBed } from '@angular/core/testing';

import { CrearEscalaService } from './crear-escala.service';

describe('CrearEscalaService', () => {
  let service: CrearEscalaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearEscalaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
