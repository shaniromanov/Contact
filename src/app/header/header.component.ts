import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../Services/header.service';
import { AuthonticationService } from '../Services/authontication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public headerService:HeaderService,private authonticationService:AuthonticationService) { }
  userName:string
  ngOnInit(): void {
    this.authonticationService.oninitUser()
         .subscribe(name=>{
           console.log("inSubject")
          this.userName=name
        })
    console.log(this.userName)
  }
  resetUser(){
    this.authonticationService.resetUser()
  }
}
