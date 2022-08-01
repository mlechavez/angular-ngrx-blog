import { createAction, props } from '@ngrx/store';
import { ApiResponse } from '../../models';

export const getFeaturedPostsRequest = createAction(
  '[Home Featured Posts Page] Get Posts Request',
  props<{ pageNumber: number; pageSize: number }>()
);

export const getFeaturedPostsSuccess = createAction(
  '[Posts API] Get Posts Success]',
  props<{ response: ApiResponse }>()
);

export const getFeaturedPostsFail = createAction(
  '[Posts API] Get Posts Fail]',
  props<{ message: string }>()
);

export const getPostsRequest = createAction(
  '[Blog Page] Get Posts Request',
  props<{
    category?: string;
    search?: string;
    pageNumber: number;
    pageSize: number;
  }>()
);

export const getPostsSuccess = createAction(
  '[Posts API] Get Posts Success',
  props<{ response: ApiResponse }>()
);

export const getPostsFail = createAction(
  '[Posts API] Get Posts Fail',
  props<{ message: string }>()
);

export const getSinglePostRequest = createAction(
  '[Single Post Page] Get Single Post Request',
  props<{ id: string }>()
);

export const getSinglePostSuccess = createAction(
  '[Post API] Get Single Post Success',
  props<{ response: ApiResponse }>()
);

export const getSinglePostFail = createAction(
  '[Posts API] Get Posts Fail',
  props<{ message: string }>()
);

export const getRelatedPostsRequest = createAction(
  '[Single Post Page] Get Related Posts Request',
  props<{ category: string }>()
);
export const getRelatedPostsSuccess = createAction(
  '[Posts API] Get Related Posts Success',
  props<{ response: ApiResponse }>()
);
export const getRelatedPostsFail = createAction(
  '[Posts API] Get Related Posts Fail',
  props<{ message: string }>()
);
