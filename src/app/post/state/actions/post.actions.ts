import { createAction, props } from '@ngrx/store';
import { IComment } from 'src/app/shared/interface/IComment';
import { IPost } from 'src/app/shared/interface/IPost';
import { IUser } from 'src/app/shared/interface/IUser';

export const getPosts = createAction(
  '[post] Get posts',
  props<{ queries?: any }>()
);
export const resetPosts = createAction(
  '[post] reset posts',
);

export const getPostsSuccess = createAction(
  '[post] Get posts success',
  props<{ posts: IPost[] }>()
);

export const getPostsError = createAction(
  '[post] Get posts error',
  props<{ error: string }>()
);

export const getComments = createAction(
  '[post] Get comments',
  props<{ queries?: any }>()
);

export const getCommentsSuccess = createAction(
  '[post] Get comments success',
  props<{ comments: IComment[] }>()
);

export const getCommentsError = createAction(
  '[post] Get comments error',
  props<{ error: string }>()
);

export const setUser = createAction(
  '[post] Set current user',
  props<{ user: IUser }>()
);
export const getUsers = createAction(
  '[post] Get users',
  props<{ queries?: any }>()
);

export const getUsersSuccess = createAction(
  '[post] Get users success',
  props<{ users: IUser[] }>()
);

export const getUsersError = createAction(
  '[post] Get users error',
  props<{ error: string }>()
);


