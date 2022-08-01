import { Action, createReducer, on } from '@ngrx/store';
import { PostCategory } from '../../models/post-category.model';
import {
  getPostCategoriesFail,
  getPostCategoriesSuccess,
} from './post-category.actions';

export interface PostCategoriesState {
  list: PostCategory[];
  errorMessage: string;
}

const initialState: PostCategoriesState = {
  list: [],
  errorMessage: '',
};

export const _postCategoryReducer = createReducer(
  initialState,
  on(getPostCategoriesSuccess, (state, action) => {
    return {
      ...state,
      list: action.response.data,
    };
  }),
  on(getPostCategoriesFail, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  })
);

export function postCategoryReducer(
  state: PostCategoriesState | undefined,
  action: Action
) {
  return _postCategoryReducer(state, action);
}
