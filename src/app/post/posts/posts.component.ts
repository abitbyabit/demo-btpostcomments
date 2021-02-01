import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IComment } from 'src/app/shared/interface/IComment';
import { IPost } from 'src/app/shared/interface/IPost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() posts: IPost[];
  @Output() postSelected = new EventEmitter<IPost>();
  // @Output() postExpan = new EventEmitter<IPost>();
  isPostCommentExpanded: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(post: IPost) {
    this.postSelected.emit(post);
  }


  handleChange(event: any, post: IPost) {
    this.isPostCommentExpanded = event.checked;
    if (event.checked) {
      this.postSelected.emit(post);
    }
  }
  trackByPostId(index: number, post: IPost): number {
    return post.id;
  }
  
}
