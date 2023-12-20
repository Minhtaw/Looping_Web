import { TestBed } from '@angular/core/testing';

import { LoopService } from './loop.service';

describe('LoopService', () => {
  let service: LoopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
