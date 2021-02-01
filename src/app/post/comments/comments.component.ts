import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/shared/interface/IComment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() comments: IComment[];
  constructor() { }

  ngOnInit(): void {
  }
  trackByCommentId(index: number, comment: IComment): number {
    return comment.id;
  }

}
