import {
  PostCategoriesState,
  postCategoryReducer,
  POSTCATEGORY_STATE_NAME,
} from './post-categories';
import { postReducer, PostsState, POST_STATE_NAME } from './posts';
import { ROUTER_STATE_NAME } from './router';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer, State } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export interface AppState {
  [POST_STATE_NAME]: PostsState;
  [POSTCATEGORY_STATE_NAME]: PostCategoriesState;
  [ROUTER_STATE_NAME]: RouterReducerState<any>;
}

export const appReducer: ActionReducerMap<AppState> = {
  [POST_STATE_NAME]: postReducer,
  [POSTCATEGORY_STATE_NAME]: postCategoryReducer,
  [ROUTER_STATE_NAME]: routerReducer,
};

// Similar to middleware used in Redux
export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
