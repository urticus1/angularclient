import { TestBed, inject } from '@angular/core/testing';

import { AuthorizationService} from './authorization-service.service';

describe('AuthorizationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizationServiceService]
    });
  });

  it('should be created', inject([AuthorizationServiceService], (service: AuthorizationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
