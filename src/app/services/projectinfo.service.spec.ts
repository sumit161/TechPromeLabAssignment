import { TestBed } from '@angular/core/testing';

import { ProjectinfoService } from './projectinfo.service';

describe('ProjectinfoService', () => {
  let service: ProjectinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
