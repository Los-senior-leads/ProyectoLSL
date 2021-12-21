import { TestBed } from '@angular/core/testing';

import { UnidadesAdministrativasService } from './unidades-administrativas.service';

describe('UnidadesAdministrativasService', () => {
  let service: UnidadesAdministrativasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadesAdministrativasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
