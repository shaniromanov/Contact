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
    this.groups.push(new Group("Family"))
    this.groups.push(new Group("Work"))
    this.groups.push(new Group("Freinds"))
    this.groups.push(new Group("Emergency"))
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
