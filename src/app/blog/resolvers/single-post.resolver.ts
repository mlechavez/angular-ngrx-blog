import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, first, Observable, of, tap } from 'rxjs';
import {
  AppState,
  getSinglePostRequest,
  Post,
  selectSinglePost,
} from 'src/app/core';

@Injectable({
  providedIn: 'root',
})
export class SinglePostResolver implements Resolve<Post | undefined> {
  constructor(private store: Store<AppState>) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post | undefined> {
    const id = route.params['id'];

    return this.store.pipe(
      select(selectSinglePost),
      tap((post) => {
        if (!post) this.store.dispatch(getSinglePostRequest({ id }));
      }),
      filter((post) => !!post),
      first()
    );
  }
}
