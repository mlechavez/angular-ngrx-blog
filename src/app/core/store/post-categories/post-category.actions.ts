import { createAction, props } from '@ngrx/store';
import { ApiResponse } from '../../models';

export const getPostCategoriesRequest = createAction(
  '[Blog Page] Get Categories Request'
);

export const getPostCategoriesSuccess = createAction(
  '[Post Categories API] Get Categories Success',
  props<{ response: ApiResponse }>()
);
export const getPostCategoriesFail = createAction(
  '[Post Categories API] Get Categories Success',
  props<{ message: string }>()
);
export const getPostCategoriesFromSinglePostRequest = createAction(
  '[Single Post Page] Get Categories Request'
);
