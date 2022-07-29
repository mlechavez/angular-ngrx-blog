import { createAction, props } from '@ngrx/store';
import { ApiResponse } from '../../models/post.payload';

export const getPostsRequest = createAction(
  '[Posts API] Get Posts Request]',
  props<{ pageSize: number; pageIndex: number }>()
);
export const getPostsSuccess = createAction(
  '[Posts API] Get Posts Success]',
  props<{ response: ApiResponse }>()
);
