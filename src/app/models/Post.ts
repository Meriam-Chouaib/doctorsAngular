import {User} from "./User";
import{Comment} from "./Comment"

// export interface Post {
//   _id?: string;
//   title: string;
//   user?: User;
//   message : string;
//   date?:Date;
//   picture?: string;
//   comments?:Comment[];
//   likes?:number;
//
// }
export class Post {
  message : string = '';
  title: string='';
    _id: string='0';
//   title: string;
  user?: User;

  date?:Date;
  picture?: string;
  comments?:Comment[];
  likes?:number;
}
