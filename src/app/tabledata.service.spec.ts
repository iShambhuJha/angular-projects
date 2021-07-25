import { TestBed } from '@angular/core/testing';

import { TabledataService } from './tabledata.service';

describe('TabledataService', () => {
  let service: TabledataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabledataService);
  });

});
