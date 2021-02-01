import { Injectable } from '@angular/core';
import { map, catchError, concatMap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostActions } from './actions';
import { PostService } from 'src/app/services/post.service';

@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService
  ) { }

  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.getUsers),
      mergeMap((action) =>
        this.postService.getUsers().pipe(
          map((users) =>
            PostActions.getUsersSuccess({ users })
          ),
          catchError((error) => of(PostActions.getUsersError({ error })))
        )
      )
    );
  });

  getPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.getPosts),
      mergeMap((action) =>
        this.postService.getPosts(action.queries).pipe(
          map((posts) =>
            PostActions.getPostsSuccess({ posts })
          ),
          catchError((error) => of(PostActions.getPostsError({ error })))
        )
      )
    );
  });
  getComments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostActions.getComments),
      mergeMap((action) =>
        this.postService.getComments(action.queries).pipe(
          map((comments) =>
            PostActions.getCommentsSuccess({ comments })
          ),
          catchError((error) => of(PostActions.getPostsError({ error })))
        )
      )
    );
  });
}
