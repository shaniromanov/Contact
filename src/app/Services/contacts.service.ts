import { Injectable } from '@angular/core';
import { Contact } from '../DTO/contact';
import { CommService } from './comm.service';
import { AuthonticationService } from './authontication.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddContactResponse } from '../DTO/Responses/add-contact-response';
import { ContactRequest } from '../DTO/Requests/contact-request';
import { UpdateContactResponse } from '../DTO/Responses/update-contact-response';
import { GroupService } from './group.service';
import { DeleteContactResponse } from '../DTO/Responses/delete-contact-response';
import { DeleteContactRequest } from '../DTO/Requests/delete-contact-request';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Array<Contact> = []
  valueForId:number
  constructor(private commService: CommService, private authonticationService: AuthonticationService, private groupService: GroupService) {
    this.contacts=this.authonticationService.getCurrentUser().contacts
    this.valueForId=Math.max.apply(Math, this.contacts.map(contact=>contact.contact_id))+1
  }
  getContacts(): Contact[] {
    return this.contacts
  }
  findContact(id: number): Contact {
    return this.contacts.find(contact => contact.contact_id == id)
  }
  findIndexOfContact(id: number): number {
    return this.contacts.findIndex(contact => contact.contact_id == id)
  }
  addContact(request: ContactRequest): Observable<AddContactResponse> {
    
    return this.commService.addContact(request)
  }
  
  deleteContact(request:DeleteContactRequest):Observable<DeleteContactResponse>{
    return this.commService.deleteContact(request)
  }

  updateContact(request: ContactRequest): Observable<UpdateContactResponse> {
    return this.commService.updateContact(request)
  }
}
