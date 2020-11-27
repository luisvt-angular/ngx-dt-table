import { TestBed } from '@angular/core/testing';

import { NgxDtTableService } from './ngx-dt-table.service';

describe('NgxDtTableService', () => {
  let service: NgxDtTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDtTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
