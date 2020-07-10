import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { AuthonticationService } from '../Services/authontication.service';
import { RegisterUserResponseOk } from '../DTO/Responses/register-user-response-ok';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form:FormGroup
  RegisterResult:string=""

  constructor(private router :Router,private userService:UserService, private authonticationService:AuthonticationService) { }
  signUp(){
    this.userService.create(this.form.value)
    .subscribe(
      response => {
        if(response instanceof RegisterUserResponseOk)
        { 
         const res=response as RegisterUserResponseOk 
         this.authonticationService.initUser(res.user);
         this.router.navigate(['/contacts/']);
        }
        this.RegisterResult=response.Message()
        console.log(this.RegisterResult)
      },
      error => {
        console.log(error);
      });

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
