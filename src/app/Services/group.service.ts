import { Injectable } from '@angular/core';
import { Group } from '../DTO/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groups:Array<Group>=[]
  constructor() { 
    this.groups.push(new Group("Family"))
    this.groups.push(new Group("Work"))
    this.groups.push(new Group("Freinds"))
    this.groups.push(new Group("Emergency"))
  }
}
