import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostShellComponent } from './post-shell/post-shell.component';
import { postReducer } from './state/post.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './state/post.effects';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PrimengModulesModule } from '../primeng--modules/primeng--modules.module';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [PostShellComponent, UsersComponent, PostsComponent, CommentsComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    StoreModule.forFeature('post', postReducer),
    EffectsModule.forFeature([PostEffects]),
    PrimengModulesModule
  ]
})
export class PostModule { }
