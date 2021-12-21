import { TestBed } from '@angular/core/testing';

import { EdificioUserService } from './edificio-user.service';

describe('EdificioUserService', () => {
  let service: EdificioUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdificioUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
