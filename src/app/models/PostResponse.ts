import {PostInterface} from "./Post";


export interface  PostResponse {

    status:  number;
    data:    any;
    error:   string;
    message: string;
  }


  export interface User {
    id:          number;
    name:        string;
    username:    string;
    password:    string;
    speciality:  string;
    description: string;
    isLogged:    boolean;
    isAdmin:     boolean;
    isTest:      null;
    picture:     string;
    admin:       boolean;
    test:        null;
    logged:      boolean;
  }
