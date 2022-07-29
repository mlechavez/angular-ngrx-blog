import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { PostService } from '../../services/post.service';
import { getPostsRequest, getPostsSuccess } from './post.actions';

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPostsRequest),
      exhaustMap((action) => {
        const { pageIndex, pageSize } = action;
        return this.postService.getPosts({ pageIndex, pageSize }).pipe(
          map((response) => {
            return getPostsSuccess({ response });
          }),
          catchError((err) => {
            console.error(err);
            return of();
          })
        );
      })
    );
  });
}
