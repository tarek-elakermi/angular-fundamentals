import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { myresolverResolver } from './myresolver.resolver';

describe('myresolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => myresolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
