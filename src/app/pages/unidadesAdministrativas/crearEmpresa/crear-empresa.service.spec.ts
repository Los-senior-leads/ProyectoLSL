import { TestBed } from '@angular/core/testing';

import { CrearEmpresaService } from './crear-empresa.service';

describe('CrearEmpresaService', () => {
  let service: CrearEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
