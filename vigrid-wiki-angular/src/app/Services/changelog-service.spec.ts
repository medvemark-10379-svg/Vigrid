import { TestBed } from '@angular/core/testing';

import { Changelog } from './changelog';

describe('Changelog', () => {
  let service: Changelog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Changelog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
