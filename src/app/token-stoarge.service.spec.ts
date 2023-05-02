import { TestBed } from '@angular/core/testing';

import { TokenStoargeService } from './token-storage.service';

describe('TokenStoargeService', () => {
  let service: TokenStoargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenStoargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
