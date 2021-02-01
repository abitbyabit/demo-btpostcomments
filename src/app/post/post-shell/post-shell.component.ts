import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { postConfig } from 'src/app/config/post-config';
import { IPost } from 'src/app/shared/interface/IPost';
import { IUser } from 'src/app/shared/interface/IUser';
import { getCurrentUserSelector, getPostsSelector, getUsersSelector, isLoadingSelector, State } from '../state';
import { PostActions } from '../state/actions';
import { getComments, getPosts, getUsers, resetPosts, setUser } from '../state/actions/post.actions';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
@AutoUnsubscribe()
@Component({
  selector: 'app-post-shell',
  templateUrl: './post-shell.component.html',
  styleUrls: ['./post-shell.component.scss']
})
export class PostShellComponent implements OnInit, OnDestroy {
  users$: Observable<IUser[]>;
  posts$: Observable<IPost[]>;
  currentUser$: Observable<IUser>;
  isLoading$: Observable<boolean>;
  currentUser: IUser;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(PostActions.getUsers({}));

    this.users$ = this.store.select(getUsersSelector);
    this.posts$ = this.store.select(getPostsSelector);
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.currentUser$ = this.store.select(getCurrentUserSelector);

    this.currentUser$.subscribe((currentUser: IUser) => {
      this.currentUser = currentUser;
    })


  }
  ngOnDestroy(): void { }


  onUserSelected(user: IUser) {
    this.store.dispatch(setUser({ user }));

    // depending on the requirements, it may initially fetch all posts and store in state, then later
    // to load all post from state;
    // here assume to fetch first 3 from server initially;
    this.store.dispatch(getPosts({ queries: `userId=${user.id}&limit=${postConfig.fetchLimit}` }));
  }
  onPostSelected(post: IPost) {
    this.store.dispatch(getComments({ queries: `postId=${post.id}` }));
  }

  // load all posts, depend on the requirements, it can be from ngrx state, or refetch from server.
  // for now, assume to refetch all posts from the server 
  onClickLoadAll(user: IUser) {
    this.store.dispatch(resetPosts());
    this.store.dispatch(getPosts({ queries: `userId=${this.currentUser.id}` }));
  }
}
