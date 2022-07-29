import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './post.reducer';

export const POST_STATE_NAME = 'posts';

export const selectPostState =
  createFeatureSelector<PostsState>(POST_STATE_NAME);

export const selectPosts = createSelector(
  selectPostState,
  (state) => state.list
);
