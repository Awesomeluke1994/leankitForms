import { TestBed, inject } from '@angular/core/testing';

import { LeankitServiceService } from './leankit-service.service';

describe('LeankitServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeankitServiceService]
    });
  });

  it('should be created', inject([LeankitServiceService], (service: LeankitServiceService) => {
    expect(service).toBeTruthy();
  }));
});
