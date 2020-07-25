import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Contact } from '../DTO/contact';
import { ContactsService } from '../Services/contacts.service';

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent implements OnInit {
  @Output() searchContacts: EventEmitter<Array<Contact>>
  @Input()  contacts: Array<Contact>
  firstNameContacts:Array<Contact>
  lastNameContacts:Array<Contact>

  constructor(private contactService: ContactsService) {
    this.searchContacts = new EventEmitter<Array<Contact>>()
  }

  ngOnInit(): void {
    
  }

  firstNameSearch(firstName: string) {
    if(firstName){
      this.firstNameContacts=this.contacts.filter(contact => contact.firstName.toLowerCase().startsWith(firstName.toLowerCase()) )
      this.searchContacts.emit(this.firstNameContacts)
    }
   else {
     this.firstNameContacts=[]
     if(this.lastNameContacts.length>0){
      this.searchContacts.emit(this.lastNameContacts)
     }
     else{
      this.searchContacts.emit(this.contactService.getContacts())
     }
    }
  }
  
  lastNameSearch(lastName: string) {
    if(lastName){
      this.lastNameContacts=this.contacts.filter(contact => contact.lastName.toLowerCase().startsWith(lastName.toLowerCase()) )
      this.searchContacts.emit( this.lastNameContacts)
    }
    else {
      this.lastNameContacts=[]
      if(this.firstNameContacts.length>0){
       this.searchContacts.emit(this.firstNameContacts)
      }
      else{
       this.searchContacts.emit(this.contactService.getContacts())
      }
     }
  }
}
