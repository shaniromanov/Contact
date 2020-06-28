import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form:FormGroup
  constructor(private router: Router) { }


  signIn(){
    this.router.navigate(['/contacts/']);
    console.log("onsubmit==>>",this.form.value)
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      UserName:new FormControl(),
      Password:new FormControl(),
    })
  }

}
