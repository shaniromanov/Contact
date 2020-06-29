import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../Services/header.service';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public headerService:HeaderService) { }

  ngOnInit(): void {
    this.headerService.hide()

  }

}
