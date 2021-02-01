import { createReducer, on } from '@ngrx/store';
import { IComment } from 'src/app/shared/interface/IComment';
import { IPost } from 'src/app/shared/interface/IPost';
import { IUser } from 'src/app/shared/interface/IUser';
import { PostActions } from './actions';

// feature state.
export interface PostState {
  users: IUser[];
  posts: IPost[];
  error: string;
  currentUser: IUser;
  isLoading: boolean;
}

const initialState: PostState = {
  users: null,
  posts: null,
  error: null,
  currentUser: null,
  isLoading: false,
};

export const postReducer = createReducer<PostState>(
  initialState,

  // users
  on(
    PostActions.setUser,
    (state, action): PostState => {
      return {
        ...state,
        currentUser: { ...action.user },
        isLoading: true,
      };
    }
  ),
  on(
    PostActions.getUsers,
    (state, action): PostState => {
      return {
        ...state,
        isLoading: true,
      };
    }
  ),
  on(
    PostActions.getUsersSuccess,
    (state, action): PostState => {
      return {
        ...state,
        users: [...action.users],
        isLoading: false
      };
    }
  ),
  on(
    PostActions.getUsersError,
    (state, action): PostState => {
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    }
  ),

  //posts

  on(
    PostActions.getPosts,
    (state, action): PostState => {
      return {
        ...state,
        isLoading: true,
      };
    }
  ),
  on(
    PostActions.getPostsSuccess,
    (state, action): PostState => {
      return {
        ...state,
        posts: [...action.posts],
        isLoading: false
      };
    }
  ),
  on(
    PostActions.getPostsError,
    (state, action): PostState => {
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    }
  ),
  on(
    PostActions.resetPosts,
    (state, action): PostState => {
      return {
        ...state,
        posts: null,
      };
    }
  ),
  //comments
  on(
    PostActions.getComments,
    (state, action): PostState => {
      return {
        ...state,
        isLoading: true,
      };
    }
  ),
  on(
    PostActions.getCommentsSuccess,
    (state, action): PostState => {
      let newPosts: IPost[] = [];
      if (action.comments && action.comments.length) {// if post has comments, merge comments into post
        const currentPostId = action.comments[0].postId;
        newPosts = state.posts.map(post => {
          if (post.id == currentPostId) {
            // merge comments into its post
            let newPost = { ...post, comments: [...action.comments] };
            return newPost;
          }
          return post;//if no comment, return original post
        })
      } else {
        newPosts = [...state.posts];
      }
      return {
        ...state,
        posts: newPosts,
        isLoading: false
      };
    }
  ),
  on(
    PostActions.getPostsError,
    (state, action): PostState => {
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    }
  ),


);
