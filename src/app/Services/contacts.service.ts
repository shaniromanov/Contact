import { Injectable } from '@angular/core';
import { Group } from '../DTO/group';
import { MeansOfContact } from '../DTO/means-of-contact';
import { Contact } from '../DTO/contact';
import { PhoneNumber } from '../DTO/phone-number';
import { Email } from '../DTO/email';
import { Adress } from '../DTO/adress';
import { Website } from '../DTO/website';
import { UserName } from '../DTO/user-name';
import { CommService } from './comm.service';
import { AuthonticationService } from './authontication.service';
import { Observable } from 'rxjs';
import { AddContactResponse } from '../DTO/Responses/add-contact-response';
import { ContactRequest } from '../DTO/Requests/contact-request';
import { GroupService } from './group.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  

contacts:Array<Contact>=[]
  constructor(private commService:CommService, private authonticationService:AuthonticationService,private groupService :GroupService) {
    this.contacts=this.authonticationService.getCurrentUser().contacts
   }
   getContacts():Array<Contact>{
    return this.contacts
   }
   findContact(id:string):Contact{
    return this.contacts.find(contact=>contact.contact_id.toString()==id)
   }
   addContact(request:ContactRequest):Observable<AddContactResponse>{
     console.log("contactService",request)
    //  this.groupService.AddContactToGroup()
    return this.commService.addContact(request)
   }
   numberOfContacts():number{
     return this.contacts.length
   }
}
