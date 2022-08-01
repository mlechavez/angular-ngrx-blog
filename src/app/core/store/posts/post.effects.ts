import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PostService } from '../../services';
import {
  getFeaturedPostsFail,
  getFeaturedPostsRequest,
  getFeaturedPostsSuccess,
  getPostsFail,
  getPostsRequest,
  getPostsSuccess,
  getRelatedPostsFail,
  getRelatedPostsRequest,
  getRelatedPostsSuccess,
  getSinglePostFail,
  getSinglePostRequest,
  getSinglePostSuccess,
} from './post.actions';

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  loadFeaturedPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getFeaturedPostsRequest),
      mergeMap((action) => {
        const { pageNumber, pageSize } = action;
        return this.postService.getPosts({
          pageNumber,
          pageSize,
        });
      }),
      map((response) => {
        return getFeaturedPostsSuccess({ response });
      }),
      catchError((err) => {
        return of(getPostsFail({ message: err.message }));
      })
    );
  });

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPostsRequest),
      mergeMap((action) => {
        const { category, search, pageNumber, pageSize } = action;
        return this.postService.getPosts({
          category,
          search,
          pageNumber,
          pageSize,
        });
      }),
      map((response) => {
        return getPostsSuccess({ response });
      }),
      catchError((err) => {
        return of(getPostsFail({ message: err.message }));
      })
    );
  });

  loadPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getSinglePostRequest),
      mergeMap((action) => {
        return this.postService.getPost(action.id);
      }),
      map((response) => {
        return getSinglePostSuccess({ response });
      }),
      catchError((err) => {
        return of(getSinglePostFail({ message: err.message }));
      })
    );
  });

  loadRelatedPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getRelatedPostsRequest),
      mergeMap((action) => {
        return this.postService.getPosts({
          category: action.category,
          pageNumber: 1,
          pageSize: 3,
        });
      }),
      map((response) => {
        return getRelatedPostsSuccess({ response });
      }),
      catchError((err) => {
        return of(getRelatedPostsFail({ message: err.message }));
      })
    );
  });
}
