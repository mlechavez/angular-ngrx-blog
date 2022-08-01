import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectCurrentRoute } from '../router';
import { PostsState } from './post.reducer';

export const POST_STATE_NAME = 'posts';

export const selectPostState =
  createFeatureSelector<PostsState>(POST_STATE_NAME);

export const selectPosts = createSelector(
  selectPostState,
  (state) => state.list
);

export const selectSinglePost = createSelector(
  selectPostState,
  selectCurrentRoute,
  (state, router) => state.list.find((post) => post._id === router.params['id'])
);

export const selectRelatedPosts = createSelector(
  selectPostState,
  (state) => state.relatedPosts
);
