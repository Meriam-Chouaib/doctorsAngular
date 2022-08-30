import {User} from "./User";

export interface Comment {
  _id: number;
  subject: string;
  user: User;
  date:string;
}
