import { TestBed } from '@angular/core/testing';

import { AtenticacionService } from './atenticacion.service';

describe('AtenticacionService', () => {
  let service: AtenticacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtenticacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});