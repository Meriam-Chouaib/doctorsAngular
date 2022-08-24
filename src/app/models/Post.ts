import {User} from "./User";
import {Comment} from "./Comment"

export class Post {
  _id: number = 0;
  title: string = '';
  message: string = '';


//   title: string;
  user?: User;

  date?: Date;
  picture?: string;
  comments?: Comment[];
  liked?: boolean;

}
