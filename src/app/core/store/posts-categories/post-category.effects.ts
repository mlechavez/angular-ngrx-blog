import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { PostCategoryService } from '../../services';
import {
  getPostCategoriesRequest,
  getPostCategoriesSuccess,
} from './post-category.actions';

@Injectable()
export class PostCategoryEffects {
  constructor(
    private actions$: Actions,
    private postCategoryService: PostCategoryService
  ) {}

  $loadPostCategories = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPostCategoriesRequest),
      exhaustMap((action) => {
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
