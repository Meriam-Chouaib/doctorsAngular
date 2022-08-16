import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import { DatePipe } from '@angular/common';

import {FormBuilder, FormGroup, Validators, FormControl, NgForm} from "@angular/forms";
import {fakeData} from "../../data/data";
import {successResult} from "../../../helper/success-result";
import {posts} from "../../data/data"

import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import {Post} from "../../models/Post";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  providers:[DatePipe]
})
export class PostFormComponent implements OnInit {


  item : Post | undefined;
  btnName : string = "";
titleMod:String="";
 _id: number = 0;




  post = new Post();

  postsData = posts;
  // myDate = new Date();

  @Input() title: string = '';
  @Input() message: string = '';
  @Input() picture: string = '';
  @Input() modelTitle: string = '';





  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();



  constructor(private formBuilder : FormBuilder,private datePipe: DatePipe,@Inject(MAT_DIALOG_DATA) public data: any) {
    // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

  }

  ngOnInit(): void {

    console.log(this.data.titleForm)
    this.titleMod = this.data.titleForm;
    this.btnName = this.data.btnName;
    this._id=this.data._id;

      let index :  number = this.postsData.findIndex(i => (i._id == this.data._id) );
      console.log(this.postsData[index])
      this.post.title=this.postsData[index].title;
      this.post.message=this.postsData[index].message;
      this.post.picture=this.postsData[index].picture;






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


     this.post._id=this.postsData.length++;
    this.post.title=form.value.title.toString();
    this.post.message=form.value.message.toString();
    this.post.picture=form.value.picture.toString();
    console.log(this.post)
     // @ts-ignore
    this.postsData.push(this.post);
    console.log(this.postsData)

    this._id=this.post._id;



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





}
