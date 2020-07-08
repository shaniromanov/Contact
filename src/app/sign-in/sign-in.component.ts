import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { LoginResponseOk } from '../DTO/Responses/login-response-ok';
import { AuthonticationService } from '../Services/authontication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form:FormGroup
  LoginResult=""
  constructor(private router: Router,
    private userService:UserService,
    private authonticationService:AuthonticationService) { }


  signIn(){
    console.log("signIn ",this.form.value)
    this.userService.findExistsUser(this.form.value)
    .subscribe(
      response => {
        
        if(response instanceof LoginResponseOk)
       { 
        const res=response as LoginResponseOk 
        this.authonticationService.initUser(res.user);
        this.router.navigate(['/contacts/']);
       }
       this.LoginResult=response.Message()
      },
);

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      UserName:new FormControl(),
      Password:new FormControl(),
    })
  }

}
