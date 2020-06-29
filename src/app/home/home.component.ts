import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../Services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public headerService:HeaderService) { }

  ngOnInit(): void {
    this.headerService.hide()
  }

}
