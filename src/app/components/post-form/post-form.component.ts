import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {DatePipe} from '@angular/common';

import {FormBuilder, FormGroup, Validators, FormControl, NgForm} from "@angular/forms";
import {fakeData} from "../../data/data";
import {successResult} from "../../../helper/success-result";

import {NzUploadChangeParam} from 'ng-zorro-antd/upload';
import {Post} from "../../models/Post";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {PostService} from "../../services/post-service/post.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  providers: [DatePipe]
})
export class PostFormComponent implements OnInit {


  item: Post | undefined;
  btnName: string = "";
  titleMod: string = "";
 // _id: number = 0;


  post: Post = new Post();

  postsData = this.PostService.getPosts();
  // myDate = new Date();

  @Input() title: string = '';
  @Input() _id: number = 0;
  @Input() message: string = '';
  @Input() picture: string = '';
  @Input() modelTitle: string = '';


  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();


  constructor(private datePipe: DatePipe, @Inject(MAT_DIALOG_DATA) public data: any, private PostService: PostService) {
    // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

  }


  submit() {
    return this.post;
  }

  cancel() {
    this.onCancel.emit();
    //window.location.reload();
  }


  handleOk(form: NgForm, _id: number) {
    console.log(_id)

    if (this.data._id == -1) {


      this.PostService.addPost(form.value).subscribe((res)=>{
        window.location.reload();
      });
      console.log("add  post", form.value, "id=", _id)

      // window.location.reload();
    } else {

      this.PostService.editPost(form.value, _id).subscribe((res)=>{
        console.log("response api update",res);
      });
      console.log("edit  post", form.value, "id=", _id)

      //  window.location.reload();

    }

  }

  // handleChange(info: NzUploadChangeParam): void {
  //   if (info.file.status !== 'uploading') {
  //     console.log(info.file, info.fileList);
  //   }
  //   if (info.file.status === 'done') {
  //     console.log(info.file.name)
  //     // this.msg.success(`${info.file.name} file uploaded successfully`);
  //   } else if (info.file.status === 'error') {
  //     //  this.msg.error(`${info.file.name} file upload failed.`);
  //     console.log(info.file.name)
  //   }
  // }

  getPost(idPost: number) {
    this.PostService.getPostById(idPost).subscribe((res) => {
      this.post = res.data as unknown as Post;
    });

  }

  getDataForm(): void {
    console.log(this.data)
    this.titleMod = this.data.titleForm;
    this.btnName = this.data.btnName;
    this._id = this.data._id;
  }

  ngOnInit(): void {

    this.getDataForm();
    if (this._id != -1) {
    this.getPost(this._id);
    }

  }

}
