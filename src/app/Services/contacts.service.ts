import { Injectable } from '@angular/core';
import { Contact } from '../DTO/contact';
import { CommService } from './comm.service';
import { AuthonticationService } from './authontication.service';
import { Observable } from 'rxjs';
import { AddContactResponse } from '../DTO/Responses/add-contact-response';
import { ContactRequest } from '../DTO/Requests/contact-request';
import { UpdateContactResponse } from '../DTO/Responses/update-contact-response';
import { GroupService } from './group.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Array<Contact> = []
  constructor(private commService: CommService, private authonticationService: AuthonticationService, private groupService: GroupService) {
    this.contacts = this.authonticationService.getCurrentUser().contacts
  }
  getContacts(): Array<Contact> {
    return this.contacts
  }
  findContact(id: string): Contact {
    return this.contacts.find(contact => contact.contact_id.toString() == id)
  }
  addContact(request: ContactRequest): Observable<AddContactResponse> {
    console.log("contactService", request)
    //  this.groupService.AddContactToGroup()
    return this.commService.addContact(request)
  }
  numberOfContacts(): number {
    return this.contacts.length
  }
  updateContact(request: ContactRequest): Observable<UpdateContactResponse> {
    return this.commService.updateContact(request)
  }
}
