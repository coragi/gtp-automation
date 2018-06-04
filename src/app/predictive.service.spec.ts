import { TestBed, inject } from '@angular/core/testing';

import { PredicitveService } from './predicitve.service';

describe('PredicitveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PredicitveService]
    });
  });

  it('should be created', inject([PredicitveService], (service: PredicitveService) => {
    expect(service).toBeTruthy();
  }));
});
