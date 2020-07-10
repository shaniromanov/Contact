import { Injectable } from '@angular/core';
import { Group } from '../DTO/group';
import { User } from '../DTO/user';
import { CommService } from './comm.service';
import { AuthonticationService } from './authontication.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  currentUser:User
  groups:Array<Group>=[]
  constructor(private commService:CommService, private authonticationService:AuthonticationService) { 
    this.groups=this.authonticationService.getCurrentUser().groups

  }
  ngOnInit(){
  }
  getGroups():Array<Group>{
    return this.groups

  }
}
