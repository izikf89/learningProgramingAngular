import { TestBed, inject } from '@angular/core/testing';

import { PageListService } from './page-list.service';

describe('PageListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageListService]
    });
  });

  it('should be created', inject([PageListService], (service: PageListService) => {
    expect(service).toBeTruthy();
  }));
});
