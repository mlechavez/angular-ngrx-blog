import { Action, createReducer, on } from '@ngrx/store';
import { Post } from '../../models/post.model';
import {
  getFeaturedPostsFail,
  getFeaturedPostsSuccess,
  getPostsFail,
  getPostsSuccess,
  getRelatedPostsFail,
  getRelatedPostsSuccess,
  getSinglePostFail,
  getSinglePostSuccess,
} from './post.actions';

export interface PostsState {
  list: Post[];
  relatedPosts: Post[];
  errorMessage: string;
}

const initialState: PostsState = {
  list: [],
  relatedPosts: [],
  errorMessage: '',
};

const _postReducer = createReducer(
  initialState,
  on(getFeaturedPostsSuccess, (state, action) => {
    return {
      ...state,
      list: action.response.data.posts,
      errorMessage: '',
    };
  }),
  on(getFeaturedPostsFail, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  }),
  on(getPostsSuccess, (state, action) => {
    return {
      ...state,
      list: action.response.data.posts,
      errorMessage: '',
    };
  }),
  on(getPostsFail, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  }),
  on(getSinglePostSuccess, (state, action) => {
    return {
      ...state,
      list: [{ ...action.response.data }],
      errorMessage: '',
    };
  }),
  on(getSinglePostFail, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  }),
  on(getRelatedPostsSuccess, (state, action) => {
    return {
      ...state,
      relatedPosts: action.response.data.posts,
      errorMessage: '',
    };
  }),
  on(getRelatedPostsFail, (state, action) => {
    return {
      ...state,
      errorMessage: action.message,
    };
  })
);

export function postReducer(state: PostsState | undefined, action: Action) {
  return _postReducer(state, action);
}
