import { TestBed } from '@angular/core/testing';

import { EscalaSalarialService } from './escala-salarial.service';

describe('EscalaSalarialService', () => {
  let service: EscalaSalarialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscalaSalarialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
