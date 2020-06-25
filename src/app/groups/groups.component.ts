import { Component, OnInit } from '@angular/core';
import { Group } from '../DTO/group';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups=new Array<Group>()
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.groups.push(new Group("family"))
    this.groups.push(new Group("work"))
    this.groups.push(new Group("freinds"))

  }
  routeToUpdateGroup(_groupName:string){
    this.router.navigate(['/groups/' + _groupName ]);
  }
  deleteGroup(){
  }
  routeToAddGroup(){
    this.router.navigate(['/add-groups/']);

  }
}
