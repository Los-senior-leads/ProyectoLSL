import { TestBed } from '@angular/core/testing';

import { ModificarEmpresaService } from './modificar-empresa.service';

describe('ModificarEmpresaService', () => {
  let service: ModificarEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
