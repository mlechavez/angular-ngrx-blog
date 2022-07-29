import {
  PostCategoriesState,
  postCategoryReducer,
  POSTCATEGORY_STATE_NAME,
} from './posts-categories';
import { postReducer, PostsState } from './posts/post.reducer';
import { POST_STATE_NAME } from './posts/post.selectors';

export interface AppState {
  [POST_STATE_NAME]: PostsState;
  [POSTCATEGORY_STATE_NAME]: PostCategoriesState;
}

export const appReducer = {
  [POST_STATE_NAME]: postReducer,
  [POSTCATEGORY_STATE_NAME]: postCategoryReducer,
};
