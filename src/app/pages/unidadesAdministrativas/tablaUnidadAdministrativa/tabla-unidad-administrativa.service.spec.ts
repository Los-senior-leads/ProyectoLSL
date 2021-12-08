import { TestBed } from '@angular/core/testing';

import { TablaUnidadAdministrativaService } from './tabla-unidad-administrativa.service';

describe('TablaUnidadAdministrativaService', () => {
  let service: TablaUnidadAdministrativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaUnidadAdministrativaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
