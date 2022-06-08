import { TestBed, inject } from '@angular/core/testing';

import { MoveServiceService } from './move-service.service';

describe('MoveServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoveServiceService]
    });
  });

  it('should be created', inject([MoveServiceService], (service: MoveServiceService) => {
    expect(service).toBeTruthy();
  }));
});
