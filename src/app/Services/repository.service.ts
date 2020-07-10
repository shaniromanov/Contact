import { Injectable } from '@angular/core';
import { User } from '../DTO/user';
import { Group } from '../DTO/group';
import { PhoneNumber } from '../DTO/phone-number';
import { Email } from '../DTO/email';
import { Adress } from '../DTO/adress';
import { Website } from '../DTO/website';
import { UserName } from '../DTO/user-name';
import { LoginResponse } from '../DTO/Responses/login-response';
import { LoginRequest } from '../DTO/Requests/login-request';
import { LoginResponseOk } from '../DTO/Responses/login-response-ok';
import { LoginResponseNotExists } from '../DTO/Responses/login-response-not-exists';
import { RegisterUserResponse } from '../DTO/Responses/register-user-response';
import { RegisterUserResponseUsernameExists } from '../DTO/Responses/register-user-response-username-exists';
import { RegisterUserResponseOk } from '../DTO/Responses/register-user-response-ok';
import { Contact } from '../DTO/contact';
import { AddContactResponse } from '../DTO/Responses/add-contact-response';
import { AddContactResponseIdExists } from '../DTO/Responses/add-contact-response-id-exists';
import { AddContactResponseOk } from '../DTO/Responses/add-contact-response-ok';
import { ContactRequest } from '../DTO/Requests/contact-request';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  users:Array<User>= [
    {"UserName":"shaniRomanov","Password":"123456","email":"shaniromanov@gmail.com","contacts":[{"contact_id":1,"firstName":"racheli","lastName": "cohen","meansOfContact":[new PhoneNumber("03-5794441"),new Email("rachli548@gmail.com "),new Adress("Bilu 5 Bnei-Brak"),new Website("www.rachel.co.il")],"groups":[new Group("Family"),new Group("Work")],"img":"https://img.icons8.com/dusk/64/000000/old-man.png"},{"contact_id":2,"firstName":"margalite","lastName": "Sayada","meansOfContact":[new PhoneNumber("03-5794441"),new Email("margalite95@gmail.com"),new Adress("shevet yehuda 5"),new Website("www.margalite.co.il"),new UserName("margalite")],"groups":[new Group("Freinds"),new Group("Work"),],"img":"https://img.icons8.com/dusk/64/000000/old-man.png"}],"groups":[new Group("Family"),new Group("Work"),new Group("Freinds"),new Group("Emergency")]}
    , {"UserName":"margaliteSayada","Password":"234567","email":"margalite95@gmail.com","contacts":[{"contact_id":3,"firstName":"shani","lastName": "romanov","meansOfContact":[new PhoneNumber("03-5794441"),new Email("shaniromanov@gmail.com "),new Adress("Harav Bloy 10 Bnei-Brak"),new Website("www.shani.co.il")],"groups":[new Group("OpenCourse"),new Group("Work")],"img":"https://img.icons8.com/dusk/64/000000/old-man.png"},{"contact_id":4,"firstName":"chavi","lastName": "berkovich","meansOfContact":[new PhoneNumber("03-5794441"),new Email("chavi@gmail.com"),new Adress("Yehuda Halevi 5")],"groups":[new Group("OpenCourse")],"img":"https://img.icons8.com/dusk/64/000000/old-man.png"}],"groups":[new Group("Family"),new Group("OpenCourse"),new Group("Freinds")]}
  ]
 getUser(request:LoginRequest):LoginResponse{
  let retval:LoginResponse;
  const user= this.users.find(user=>user.UserName===request.UserName&& user.Password===request.Password)
  if(user){
   retval=new LoginResponseOk(user)
  }
  else{
    retval=new LoginResponseNotExists()
  }
  return retval
 }
 registerUser(request:User):RegisterUserResponse{
  let retval:RegisterUserResponse;
  if(this.users.find(user=>user.UserName===request.UserName)){
    retval=new RegisterUserResponseUsernameExists()
  }
  else{
    this.users.push(request)
    console.log(this.users)
    retval=new RegisterUserResponseOk(request)
  }
  return retval
 }

 addContact(request: ContactRequest):AddContactResponse {
  let retval:AddContactResponse
  const user=this.users.find(user=>user.UserName==request.UserName)
  if(user.contacts.find(contact=>contact.contact_id==request.contact.contact_id)){
    retval=new AddContactResponseIdExists()

  }
  else{
    console.log("before: ",this.users.find(user=>user.UserName==request.UserName).contacts)
    user.contacts.push(request.contact)
    retval=new AddContactResponseOk()
    console.log("after: ",this.users.find(user=>user.UserName==request.UserName).contacts)
  }
  console.log(retval)
  return retval
}
  constructor() { }
}
