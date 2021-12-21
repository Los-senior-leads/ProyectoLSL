import { TestBed } from '@angular/core/testing';

import { EliminarUsuarioService } from './eliminar-usuario.service';

describe('EliminarUsuarioService', () => {
  let service: EliminarUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminarUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
