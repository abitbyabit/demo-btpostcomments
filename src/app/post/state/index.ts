import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import { PostState } from './post.reducer';

// Extends the global app state to include the feature state.
export interface State extends AppState.State {
  postState: PostState;
}

// selectors
const getPostFeatureState = createFeatureSelector<PostState>('post');

export const getPostsSelector = createSelector(
  getPostFeatureState,
  (state) => state.posts
);
export const getUsersSelector = createSelector(
  getPostFeatureState,
  (state) => state.users
);
export const getCurrentUserSelector = createSelector(
  getPostFeatureState,
  (state) => state.currentUser
);

export const getErrorSelector = createSelector(
  getPostFeatureState,
  (state) => state.error
);

export const isLoadingSelector = createSelector(
  getPostFeatureState,
  (state) => state.isLoading
);
