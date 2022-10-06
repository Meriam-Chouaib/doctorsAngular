import {User} from "./User";
import {Comment} from "./Comment"

export class Post {
  _id: number = 0;
  title: string = '';
  message: string = '';
  user?: User;
  date?: string  ;
  picture?: string;
  comments?: Comment[];
  liked: boolean = false;
  likes: number = 0;
  dislikes: number = 0;
  disliked: boolean = false;

}

export interface PostInterface {
  id:       number;
  title:    string;
  message:  string;
  date:     string;
  picture:  string;
  liked:    boolean;
  disliked: boolean;
  likes:    number;
  dislikes: number;
  comments: any;
  user:     User;

}
