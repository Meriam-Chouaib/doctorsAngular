import {User} from "./User";

export interface Comment {
  _id: string;
  subject: string;
  user: User;
  date:Date;
}
