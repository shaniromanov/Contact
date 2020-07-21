import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../DTO/contact';
import { ContactsService } from '../Services/contacts.service';

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent implements OnInit {
  @Output() searchContacts:EventEmitter<Array<Contact>>
  contacts:Array<Contact>

  constructor(private contactService:ContactsService) {
    this.searchContacts = new EventEmitter<Array<Contact>>() 
   }

  ngOnInit(): void {
    this.contacts=this.contactService.getContacts()
  }
  firstNameSearch(firstName:string){
    this.searchContacts.emit(this.contacts.filter(contact=>contact.firstName.startsWith(firstName.toLowerCase())||contact.firstName.startsWith(firstName.toUpperCase())))
  }
  lastNameSearch(lastName:string){
    this.searchContacts.emit(this.contacts.filter(contact=>contact.lastName.startsWith(lastName.toLowerCase())||contact.lastName.startsWith(lastName.toUpperCase())))
  }
}
