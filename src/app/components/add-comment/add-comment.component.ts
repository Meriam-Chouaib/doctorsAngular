import {Component, Input, OnInit} from '@angular/core';
import { formatDistance } from 'date-fns';
import {User} from "../../models/User";
import {AuthService} from "../../services/auth-service/auth.service";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
 // @Input()  user: User = new User() ;
  constructor(public AuthService:AuthService) { }

  ngOnInit(): void {
  }
  data: any[] = [];
  submitting = false;
user = this.AuthService.getUSerFromStorage();
  info = {
    author: this.user.name,
    avatar: this.user.picture
  };
  inputValue = '';

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    setTimeout(() => {
        this.submitting = false;
        this.data = [
          ...this.data,
          {
            ...this.info,
            content,
             datetime: "02/12/2022",
            // displayTime: formatDistance(new Date(), new Date())
          }
        ].map(e => ({
          ...e,
          // displayTime: formatDistance(new Date(), e.datetime)
        }));
      },
      800);
  }

}
