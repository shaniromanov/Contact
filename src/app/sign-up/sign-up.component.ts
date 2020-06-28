import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form:FormGroup

  constructor(private router :Router) { }
  signUp(){
    this.router.navigate(['/contacts/']);
    console.log("onsubmit==>>",this.form.value)
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      FirstName:new FormControl(),
      LastName:new FormControl(),
      UserName:new FormControl(),
      Password:new FormControl(),
      Email:new FormControl()
  })
  }
}
