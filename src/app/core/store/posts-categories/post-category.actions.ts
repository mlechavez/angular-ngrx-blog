import { createAction, props } from '@ngrx/store';
import { ApiResponse } from '../../models';

export const getPostCategoriesRequest = createAction(
  '[Post Categories API] Get Categories Request'
);

export const getPostCategoriesSuccess = createAction(
  '[Post Categories API] Get Categories Success',
  props<{ response: ApiResponse }>()
);
