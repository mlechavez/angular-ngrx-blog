import { Action, createReducer, on } from '@ngrx/store';
import { PostCategory } from '../../models/post-category.model';
import { getPostCategoriesSuccess } from './post-category.actions';

export interface PostCategoriesState {
  list: PostCategory[];
}

const initialState: PostCategoriesState = {
  list: [],
};

export const _postCategoryReducer = createReducer(
  initialState,
  on(getPostCategoriesSuccess, (state, action) => {
    return {
      ...state,
      list: action.response.data,
    };
  })
);

export function postCategoryReducer(
  state: PostCategoriesState | undefined,
  action: Action
) {
  return _postCategoryReducer(state, action);
}
