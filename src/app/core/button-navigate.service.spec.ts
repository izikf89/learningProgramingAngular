import { TestBed, inject } from '@angular/core/testing';

import { ButtonNavigateService } from './button-navigate.service';

describe('ButtonNavigateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ButtonNavigateService]
    });
  });

  it('should be created', inject([ButtonNavigateService], (service: ButtonNavigateService) => {
    expect(service).toBeTruthy();
  }));
});
