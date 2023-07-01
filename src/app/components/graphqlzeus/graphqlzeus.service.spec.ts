import { TestBed } from '@angular/core/testing';

import { GraphqlzeusService } from './graphqlzeus.service';

describe('GraphqlzeusService', () => {
  let service: GraphqlzeusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphqlzeusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
