import { Component, OnInit } from '@angular/core';
import { Group } from '../DTO/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups=new Array<Group>()
  constructor() { }

  ngOnInit(): void {
    this.groups.push(new Group("family"))
    this.groups.push(new Group("work"))
    this.groups.push(new Group("freinds"))

  }
  updateGroup(){
    
  }
  deleteGroup(){

  }
}
