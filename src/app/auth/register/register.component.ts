import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
this.validator()
  }
  validator() {
    this.registerForm = this.formBuilder.group({
      Name : ['', Validators.required],
      UserName : ['', Validators.required],
      password : ['' , Validators.required],
      Confirmpassword : ['' , Validators.required],



    })
  }
  register (): void{
    console.log(this.registerForm.value)
  }
}
