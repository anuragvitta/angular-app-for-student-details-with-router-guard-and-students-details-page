import { TestBed, async, inject } from '@angular/core/testing';

import { RoutGuard } from './rout.guard';

describe('RoutGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutGuard]
    });
  });

  it('should ...', inject([RoutGuard], (guard: RoutGuard) => {
    expect(guard).toBeTruthy();
  }));
});
