import { Injectable } from '@angular/core';
import { Group } from '../DTO/group';
import { MeansOfContact } from '../DTO/means-of-contact';
import { Contact } from '../DTO/contact';
import { PhoneNumber } from '../DTO/phone-number';
import { Email } from '../DTO/email';
import { Adress } from '../DTO/adress';
import { Website } from '../DTO/website';
import { UserName } from '../DTO/user-name';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
groups:Array<Group>=[]
contacts:Array<Contact>=[{contact_id:1,img:"https://img.icons8.com/dusk/64/000000/old-man.png",firstName:"Shani",lastName:"Romanov",meansOfContact:new Array<MeansOfContact>(),groups:new Array<Group>()},
{contact_id:1,img:"https://img.icons8.com/dusk/64/000000/old-man.png",firstName:"Margalit",lastName:"Sayada",meansOfContact:new Array<MeansOfContact>(),groups:new Array<Group>()},
{contact_id:1,img:"https://img.icons8.com/dusk/64/000000/old-man.png",firstName:"Shani",lastName:"Romanov",meansOfContact:new Array<MeansOfContact>(),groups:new Array<Group>()},
{contact_id:1,img:"https://img.icons8.com/dusk/64/000000/old-man.png",firstName:"Shani",lastName:"Romanov",meansOfContact:new Array<MeansOfContact>(),groups:new Array<Group>()}]
  constructor() {
    this.contacts[0].meansOfContact.push(new PhoneNumber("03-5794441"))
    this.contacts[0].groups.push(new Group("Freinds"))
    this.contacts[0].meansOfContact.push(new Email("shaniromanov@gmail.com"))
    this.contacts[0].meansOfContact.push(new Adress("הרב בלוי 10"))
    this.contacts[0].meansOfContact.push(new Website("www.shani.co.il"))
    this.contacts[0].meansOfContact.push(new UserName("shani"))
    this.contacts[0].groups.push(new Group("Family"))

    this.contacts[1].meansOfContact.push(new PhoneNumber("03-5782403"))
    this.contacts[1].groups.push(new Group("Freinds"))
    this.contacts[1].meansOfContact.push(new Email("margalite95@gmail.com"))
    this.contacts[1].meansOfContact.push(new Adress("shevet yehuda 5"))
    this.contacts[1].groups.push(new Group("Family"))

    this.groups.push(new Group("Family"))
    this.groups.push(new Group("Work"))
    this.groups.push(new Group("Freinds"))
    this.groups.push(new Group("Emergency"))
   }
   getContacts():Array<Contact>{
return this.contacts
   }
   findContact(id:string):Contact{
    return this.contacts.find(contact=>contact.contact_id.toString()==id)
   }
}
