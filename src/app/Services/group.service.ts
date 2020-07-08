import { Injectable } from '@angular/core';
import { Group } from '../DTO/group';
import { User } from '../DTO/user';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  currentUser:User
  groups:Array<Group>=[]
  constructor() { 
    this.groups.push(new Group("Family"))
    this.groups.push(new Group("Work"))
    this.groups.push(new Group("Freinds"))
    this.groups.push(new Group("Emergency"))
  }
  ngOnInit(){

  }
  getGroups(){
    
  }
}
