import { TestBed } from '@angular/core/testing';

import { DatosSharedService } from './datos-shared.service';

describe('DatosSharedService', () => {
  let service: DatosSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
