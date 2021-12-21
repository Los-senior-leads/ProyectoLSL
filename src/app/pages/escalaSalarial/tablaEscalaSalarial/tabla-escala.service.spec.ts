import { TestBed } from '@angular/core/testing';

import { TablaEscalaService } from './tabla-escala.service';

describe('TablaEscalaService', () => {
  let service: TablaEscalaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaEscalaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
