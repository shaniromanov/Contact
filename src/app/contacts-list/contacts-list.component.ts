import { Component, OnInit } from '@angular/core';
import { Contact } from '../DTO/contact';
import { ContactsService } from '../Services/contacts.service';
import { PhoneNumber } from '../DTO/phone-number';
import { Group } from '../DTO/group';
import { MeansOfContact } from '../DTO/means-of-contact';
import { Email } from '../DTO/email';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts:Array<Contact>

  constructor(private contactservice:ContactsService,private router: Router) { }

  ngOnInit(): void {
    this.contacts=this.contactservice.getContacts()
  }

  getUserContacts(username:string){

  }

  deleteContact(contact_id:number){

  }
  filterByGroup(group:Group){

  }
  searchByName(){
    
  }
  routeToUpdateContact(contact_id:number){
    this.router.navigate(['/contacts/' + contact_id ]);
  }
  routeToAddContact(){
    this.router.navigate(['/add-contact/'  ]);
  }
}
