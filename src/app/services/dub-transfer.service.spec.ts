import { TestBed } from '@angular/core/testing';

import { DubTransferService } from './dub-transfer.service';

describe('DubTransferService', () => {
  let service: DubTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DubTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
