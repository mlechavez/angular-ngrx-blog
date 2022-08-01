import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostCategoriesState } from './post-category.reducer';

export const POSTCATEGORY_STATE_NAME = 'postCategory';

const selectPostCategoryState = createFeatureSelector<PostCategoriesState>(
  POSTCATEGORY_STATE_NAME
);

export const selectPostCategories = createSelector(
  selectPostCategoryState,
  (state) => state.list
);
