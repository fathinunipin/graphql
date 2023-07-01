import { TestBed } from '@angular/core/testing';

import { GraphqlapolloService } from './graphqlapollo.service';

describe('GraphqlapolloService', () => {
  let service: GraphqlapolloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphqlapolloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
