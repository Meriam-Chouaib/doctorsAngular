import {Post} from "./Post";

export class User {
  _id: number=0;
  name?: string  = '';
  username: string | undefined = '';
  password: string | undefined = '';
  speciality?: string  = '';
  picture?:string  = '';
  description?:string  = '';
  posts?:Post[];
  isLogged?:boolean=false;
// constructor(username:string, name:string,password:string) {
//   this.username = username;
//   this.name = name;
//   this.password = password
// }
// User() {
//
//   this.username="";
//   this.name="";
//   this.password="";
// }


  constructor( name?: string, username?: string, speciality?: string,
              picture?: string, description?: string, password?: string,posts?:Post[],isLogged?:boolean) {

      this.username = username;
      this.name = name;
      this.speciality = speciality;
      this.picture = picture;
      this.description = description;
      this.password = password;
      this.posts = posts;
      this.isLogged = isLogged;

  }
}
