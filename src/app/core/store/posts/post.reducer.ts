import { Action, createReducer, on } from '@ngrx/store';
import { Post } from '../../models/post.model';
import { getPostsSuccess } from './post.actions';

export interface PostsState {
  list: Post[];
}

const initialState: PostsState = {
  list: [],
};

const _postReducer = createReducer(
  initialState,
  on(getPostsSuccess, (state, action) => {
    return {
      ...state,
      list: action.response.data.posts,
    };
  })
);

export function postReducer(state: PostsState | undefined, action: Action) {
  return _postReducer(state, action);
}
