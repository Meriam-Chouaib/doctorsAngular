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
  @Input()  user: User = new User() ;
  @Input() date: string = '';
  @Input() _id: number = 0;
  @Input() likes: number = 0;

  //likes = 0;
  dislikes = 0;
  dateComment = this.date;
  constructor() { }

  ngOnInit(): void {
    console.log("from Comment","subject",this.subject,"user :",this.user,"id :", this._id,"date :",this.date)
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
