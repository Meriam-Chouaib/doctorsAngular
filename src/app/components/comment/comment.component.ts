import {Component, Input, OnInit} from '@angular/core';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import {User} from '../../models/User'
import { formatDistance } from 'date-fns';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() subject: string = '';
  @Input()  user: string = '';
  @Input() date: string = '';
  @Input() id: number = 0;

  likes = 0;
  dislikes = 0;
  constructor() { }

  ngOnInit(): void {
  }

  // time = formatDistance(new Date(), new Date());

  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }
}
