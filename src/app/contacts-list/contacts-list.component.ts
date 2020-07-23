import { Component, OnInit } from '@angular/core';
import { Contact } from '../DTO/contact';
import { ContactsService } from '../Services/contacts.service';
import { PhoneNumber } from '../DTO/phone-number';
import { Group } from '../DTO/group';
import { MeansOfContact } from '../DTO/means-of-contact';
import { Email } from '../DTO/email';
import { Router } from '@angular/router';
import { HeaderService } from '../Services/header.service';
import { GroupService } from '../Services/group.service';
import { AuthonticationService } from '../Services/authontication.service';
import { DeleteContactResponse } from '../DTO/Responses/delete-contact-response';
import { DeleteContactResponseOk } from '../DTO/Responses/delete-contact-response-ok';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Array<Contact> = [];
  filterContacts: Array<Contact> = [];

  constructor(private contactservice: ContactsService, private router: Router, public headerService: HeaderService, private authonticationService: AuthonticationService) { }

  ngOnInit(): void {
    this.headerService.show()
    this.contacts = this.contactservice.getContacts()
    this.filterContacts = this.contacts
    }

  FilterByGroup(contacts: Array<Contact>) {
    if (contacts == null) {
      this.filterContacts = this.contacts
    }
    else {
      this.filterContacts = contacts
    }
  }

  deleteContact(contact_id: number) {
    console.log(this.contacts)
    this.contactservice.deleteContact( {"UserName":this.authonticationService.getUserName(),
    "id":contact_id}).subscribe((response) => {
      if(response instanceof DeleteContactResponseOk){
       const i= this.contacts.findIndex(contact=>contact.contact_id==contact_id)
       console.log(this.contacts)
       this.contacts.splice(i, 1)
    }
  })   
}

  searchContact(contacts: Array<Contact>) {
    this.filterContacts = contacts
  }

  routeToUpdateContact(contact_id: number) {
    this.router.navigate(['/contacts/' + contact_id]);
  }

  routeToAddContact() {
    this.router.navigate(['/add-contact/']);
  }
}
