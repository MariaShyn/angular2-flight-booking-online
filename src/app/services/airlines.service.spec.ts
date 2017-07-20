/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AirlinesService } from './airlines.service';

describe('AirlinesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirlinesService]
    });
  });

  it('should ...', inject([AirlinesService], (service: AirlinesService) => {
    expect(service).toBeTruthy();
  }));
});
