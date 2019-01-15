import { TestBed } from '@angular/core/testing';

import { ObjexLibService } from './objex-lib.service';

describe('ObjexLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjexLibService = TestBed.get(ObjexLibService);
    expect(service).toBeTruthy();
  });
});
