import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, NgForm} from "@angular/forms";
import {fakeData} from "../../data/data";
import {successResult} from "../../../helper/success-result";
import {posts} from "../../data/data"

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import {Post} from "../../models/Post";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  edit : boolean = false;
  item : Post | undefined;
  btnName : string = "add";

 id: number = 0;
 modelTitle: string = 'Add post';

  post = new Post();

  postsData = posts;

  @Input() titleForm: string = '';


  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();



  constructor(private formBuilder : FormBuilder) {}

  ngOnInit(): void {


  }

  submit(){
  return this.post;
  }

  cancel(){
    this.onCancel.emit();
  }
  editPost(item: any) {


    try {
      this.postsData[this.postsData.findIndex(el => el._id === item._id)] = item;
      new successResult(true, this.postsData, this.postsData?.length, "success")


    } catch (err) {
      new successResult(false, this.postsData, this.postsData?.length, "failed edit product")

    }

  }

  handleOk(form: NgForm) {
    console.log(form.value)
    this.postsData.push(form.value);
    console.log(this.postsData)
  }
  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      console.log(info.file.name )
     // this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
    //  this.msg.error(`${info.file.name} file upload failed.`);
      console.log(info.file.name )
    }
  }

  onAddPost() {


   // this.postsData.push(this.post);



//old method
//     let index = form.getRawValue().index
//     console.log(form.value)
//     if(index != null) {
//       this.postsData[index] = form.value
//     } else {
//       this.postsData.push(form.value)
//       console.log("new data",this.postsData)
//
//     }
//     this.form.reset() // reset form to empty
  }



}
