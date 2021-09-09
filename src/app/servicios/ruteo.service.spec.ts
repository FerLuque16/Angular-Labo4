import { TestBed } from '@angular/core/testing';

import { RuteoService } from './ruteo.service';

describe('RuteoService', () => {
  let service: RuteoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuteoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
