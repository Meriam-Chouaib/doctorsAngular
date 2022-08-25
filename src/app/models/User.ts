import {Post} from "./Post";

export class User {
  _id: number=0;
  name?: string  = '';
  username: string | undefined = '';
  password: string | undefined = '';
  speciality?: string  = '';
  // role:string='';
  picture?:string  = '';
  description?:string  = '';
  posts?:Post[];
  isLogged?:boolean=false;
isAdmin?:boolean = false;

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
