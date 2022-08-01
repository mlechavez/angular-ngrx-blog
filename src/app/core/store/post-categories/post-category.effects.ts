import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, filter, map, of, withLatestFrom } from 'rxjs';
import { PostCategoryService } from '../../services';
import { AppState } from '../app.state';
import {
  getPostCategoriesFromSinglePostRequest,
  getPostCategoriesRequest,
  getPostCategoriesSuccess,
} from './post-category.actions';
import { selectPostCategories } from './post-category.selectors';

@Injectable()
export class PostCategoryEffects {
  constructor(
    private actions$: Actions,
    private postCategoryService: PostCategoryService,
    private store: Store<AppState>
  ) {}

  $loadPostCategories = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        ...[getPostCategoriesRequest, getPostCategoriesFromSinglePostRequest]
      ),
      withLatestFrom(this.store.select(selectPostCategories)),
      filter(([action, categories]) => categories.length === 0),
      exhaustMap(() => {
        return this.postCategoryService.getPostCategories().pipe(
          map((response) => {
            return getPostCategoriesSuccess({ response });
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
