import { Injectable } from '@angular/core';
import { Group } from '../DTO/group';
import { User } from '../DTO/user';
import { CommService } from './comm.service';
import { AuthonticationService } from './authontication.service';
import { GroupRequest } from '../DTO/Requests/group-request';
import { AddGroupResponse } from '../DTO/Responses/add-group-response';
import { Observable } from 'rxjs';

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
  addGroup(request:GroupRequest):Observable<AddGroupResponse>{
    console.log("groupService",request)
   return this.commService.addGroup(request)
  }
}
