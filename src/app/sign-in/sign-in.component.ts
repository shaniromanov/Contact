import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form:FormGroup
  onSubmit(){
    console.log("onsubmit==>>",this.form.value)
  }
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      UserName:new FormControl(),
      Password:new FormControl(),
    })
  }

}
