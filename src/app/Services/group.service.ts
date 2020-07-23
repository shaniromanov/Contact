import { Injectable } from '@angular/core';
import { Group } from '../DTO/group';
import { User } from '../DTO/user';
import { CommService } from './comm.service';
import { AuthonticationService } from './authontication.service';
import { GroupRequest } from '../DTO/Requests/group-request';
import { AddGroupResponse } from '../DTO/Responses/add-group-response';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeleteGroupResponse } from '../DTO/Responses/delete-group-response';
import { AddContactToGroupRequest } from '../DTO/Requests/add-contact-to-group-request';
import { AddContactToGroupResponse } from '../DTO/Responses/add-contact-to-group-response';
import { DeleteGroupRequest } from '../DTO/Requests/delete-group-request';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  currentUser: User
  groups: Array<Group> = []
  valueForId:number
  deleteSubject = new Subject<number>()

  constructor(private commService: CommService, private authonticationService: AuthonticationService) {
    this.groups = this.authonticationService.getCurrentUser().groups
    this.valueForId=Math.max.apply(Math, this.groups.map(grp=>grp.group_id))+1
  }
  ngOnInit() {
  }
  getGroups(): Array<Group> {
    return this.groups

  }
  deleteGroup(request: DeleteGroupRequest) {
    return this.commService.deleteGroup(request)
  }

  addGroup(request: GroupRequest): Observable<AddGroupResponse> {
    
    return this.commService.addGroup(request)
  }
  AddContactToGroup(request:AddContactToGroupRequest):Observable<AddContactToGroupResponse>{
    return this.commService.AddContactToGroup(request)
  }

  numberOfGroups():number{
    return this.groups.length
  }

  // private contactExistsInGroup = (contact_id:number):boolean =>this.contacts.hasOwnProperty(contact_id)
  // addContact(contact:Contact){

  //         this.contacts[contact.contact_id] = contact 
  // }
  // updateContactsInGroup(contact_id:number,contact:Contact){
  //     if (this.contactExists(contact_id)){
  //         this.contacts[contact_id] = contact
  //     }
  // }
  // deleteContactsInGroup(contact_id:number){
  //     if (this.contactExists(contact_id)){
  //         delete(this.contacts[contact_id])
  //     }
  // }
}
