import { TestBed } from '@angular/core/testing';

import { TablaEdificiosService } from './tabla-edificios.service';

describe('TablaEdificiosService', () => {
  let service: TablaEdificiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaEdificiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
