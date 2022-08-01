import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from './custom-route.serializer';

export const ROUTER_STATE_NAME = 'router';

const selectRouterState =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>(ROUTER_STATE_NAME);

export const selectCurrentRoute = createSelector(
  selectRouterState,
  (router) => router?.state
);
export const { selectRouteParams, selectQueryParams } = getSelectors();
