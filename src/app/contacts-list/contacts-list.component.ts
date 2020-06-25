import { Component, OnInit } from '@angular/core';
import { Contact } from '../DTO/contact';
import { ContactsService } from '../Services/contacts.service';
import { PhoneNumber } from '../DTO/phone-number';
import { Group } from '../DTO/group';
import { MeansOfContact } from '../DTO/means-of-contact';
import { Email } from '../DTO/email';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts:Array<Contact>=[{contact_id:1,img:"kkk",firstName:"Shani",lastName:"Romanov",meansOfContact:new Array<MeansOfContact>(),groups:new Array<Group>()},
  {contact_id:1,img:"kkk",firstName:"Shani",lastName:"Romanov",meansOfContact:new Array<MeansOfContact>(),groups:new Array<Group>()},
  {contact_id:1,img:"kkk",firstName:"Shani",lastName:"Romanov",meansOfContact:new Array<MeansOfContact>(),groups:new Array<Group>()},
  {contact_id:1,img:"kkk",firstName:"Shani",lastName:"Romanov",meansOfContact:new Array<MeansOfContact>(),groups:new Array<Group>()}]

  constructor(private contactservice:ContactsService) { }

  ngOnInit(): void {
    this.contacts[0].meansOfContact.push(new PhoneNumber("03-5794441"))
    this.contacts[0].groups.push(new Group("jjj"))
    this.contacts[0].meansOfContact.push(new Email("shaniromanov@gmail.com"))
    this.contacts[0].groups.push(new Group("family"))

    this.contacts[1].meansOfContact.push(new PhoneNumber("03-5794441"))
    this.contacts[1].groups.push(new Group("jjj"))
    this.contacts[1].meansOfContact.push(new Email("shaniromanov@gmail.com"))
    this.contacts[1].groups.push(new Group("family"))
  }

  getUserContacts(username:string){

  }



}
