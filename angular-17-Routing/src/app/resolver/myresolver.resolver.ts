import { ResolveFn } from '@angular/router';
import { map, timer } from 'rxjs';

export const myresolverResolver: 
ResolveFn<boolean> = (route, state) => {
  return timer(5000).pipe(
    map((): boolean => true));
};
