import {DataModel} from "../app/models/data-model";

export class successResult   {
    success : boolean;
    list:any;
    message: string;
    count: number | undefined;
    data : DataModel = {
        list: [],
        count: 0
    };

    constructor(success : boolean,list:any,count = 0,message:string) {
        this.success = success;
        this.data.count=count;
        this.data.list=list;
        this.message=message;
    }
}
