import { TestBed } from '@angular/core/testing';

import { RangePickerService } from './range-picker.service';

describe('RangePickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RangePickerService = TestBed.get(RangePickerService);
    expect(service).toBeTruthy();
  });
});
