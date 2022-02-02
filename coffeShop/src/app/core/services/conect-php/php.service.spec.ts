/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhpService } from './php.service';

describe('Service: Php', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhpService]
    });
  });

  it('should ...', inject([PhpService], (service: PhpService) => {
    expect(service).toBeTruthy();
  }));
});
