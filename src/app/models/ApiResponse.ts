

  export interface  ApiResponse {

    status:  number;
    data:    Data;
    error:   null;
    message: string;
  }

  export interface Data {
    id:          number;
    name:        string;
    username:    string;
    password:    string;
    speciality:  null;
    description: null;
    isLogged:    null;
    isAdmin:     boolean;
    isTest:      null;
    picture:     null;
    admin:       boolean;
    test:        null;
    logged:      null;
  }
