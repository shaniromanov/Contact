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
import { AddContactResponse } from '../DTO/Responses/add-contact-response';
import { AddContactResponseIdExists } from '../DTO/Responses/add-contact-response-id-exists';
import { AddContactResponseOk } from '../DTO/Responses/add-contact-response-ok';
import { ContactRequest } from '../DTO/Requests/contact-request';
import { GroupRequest } from '../DTO/Requests/group-request';
import { AddGroupResponse } from '../DTO/Responses/add-group-response';
import { AddGroupResponseOK } from '../DTO/Responses/add-group-response-ok';
import { RegisterUserRequest } from '../DTO/Requests/register-user-request';
import { DeleteGroupResponse } from '../DTO/Responses/delete-group-response';
import { UpdateContactResponse } from '../DTO/Responses/update-contact-response';
import { AddContactToGroupRequest } from '../DTO/Requests/add-contact-to-group-request';
import { AddContactToGroupResponse } from '../DTO/Responses/add-contact-to-group-response';
import { AddContactToGroupResponseOk } from '../DTO/Responses/add-contact-to-group-response-ok';
import { AddContactToGroupResponseContactExists } from '../DTO/Responses/add-contact-to-group-response-contact-exists';
import { UpdateContactResponseOk } from '../DTO/Responses/update-contact-response-ok';
import { DeleteGroupRequest } from '../DTO/Requests/delete-group-request';
import { DeleteContactResponse } from '../DTO/Responses/delete-contact-response';
import { DeleteContactResponseOk } from '../DTO/Responses/delete-contact-response-ok';
import { DeleteContactRequest } from '../DTO/Requests/delete-contact-request';
import { DeleteContactFromGroupRequest } from '../DTO/Requests/delete-contact-from-group-request';
import { DeleteContactFromGroupResponse } from '../DTO/Responses/delete-contact-from-group-response';
import { DeleteContactFromGroupResponseOk } from '../DTO/Responses/delete-contact-from-group-response-ok';
import { DeleteGroupFromContactRequest } from '../DTO/Requests/delete-group-from-contact-request';
import { DeleteGroupFromContactResponse } from '../DTO/Responses/delete-group-from-contact-response';
import { DeleteGroupFromContactResponseOk } from '../DTO/Responses/delete-group-from-contact-response-ok';
import { UpdateGroupRequest } from '../DTO/Requests/update-group-request';
import { UpdateGroupResponse } from '../DTO/Responses/update-group-response';
import { UpdateGroupResponseOk } from '../DTO/Responses/update-group-response-ok';





@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  users: Array<User> = [
    {
      "UserName": "shaniRomanov","FirstName":"Shani","LastName":"Romanov" ,"Password": "123456", "Email": "shaniromanov@gmail.com",
      "contacts": [{
        "contact_id": 1, "firstName": "racheli", "lastName": "cohen", "website": new Website("www.rachel.co.il"), "username": new UserName("racheli"), "address": new Adress("shevet yehuda 5"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("racheli@gmail.com")],
        "groups": ["Family", "Work"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png"
      }, { "contact_id": 2, "firstName": "margalite", "lastName": "Sayada", "website": new Website("www.margalite.co.il"), "username": new UserName("margalite"), "address": new Adress("shevet yehuda 5"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("margalite95@gmail.com")], "groups": ["Freinds", "Work"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png" }],

      "groups": [
        {
          "groupName": "Family", "contacts": {
            1: {
              "contact_id": 1, "firstName": "racheli", "lastName": "cohen", "website": new Website("www.rachel.co.il"), "username": new UserName("racheli"), "address": new Adress("shevet yehuda 5"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("racheli@gmail.com")],
              "groups": ["Family", "Work"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png"
            }
          }, "group_id": 1
        },
        {
          "groupName": "Work", "contacts": {
            1: {
              "contact_id": 1, "firstName": "racheli", "lastName": "cohen", "website": new Website("www.rachel.co.il"), "username": new UserName("racheli"), "address": new Adress("shevet yehuda 5"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("racheli@gmail.com")],
              "groups": ["Family", "Work"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png"
            }, 2: { "contact_id": 2, "firstName": "margalite", "lastName": "Sayada", "website": new Website("www.margalite.co.il"), "username": new UserName("margalite"), "address": new Adress("shevet yehuda 5"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("margalite95@gmail.com")], "groups": ["Freinds", "Work"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png" }
          }, "group_id": 2
        },
        { "groupName": "Freinds", "contacts": { 2: { "contact_id": 2, "firstName": "margalite", "lastName": "Sayada", "website": new Website("www.margalite.co.il"), "username": new UserName("margalite"), "address": new Adress("shevet yehuda 5"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("margalite95@gmail.com")], "groups": ["Freinds", "Work"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png" } }, "group_id": 3 },
        { "groupName": "Emergency", "contacts": {}, "group_id": 4 }]
    }

    , {
      "UserName": "margaliteSayada","FirstName":"Margalite","LastName":"Sayada" , "Password": "234567", "Email": "margalite95@gmail.com",
      "contacts": [{
        "contact_id": 1, "firstName": "shani", "lastName": "romanov", "website": new Website("www.shani.co.il"), "username": new UserName("shanoRomanov"), "address": new Adress("Harav Bloy 10 Bnei-Brak"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("shaniromanov@gmail.com")],
        "groups": ["OpenCourse", "Freinds"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png"
      }, { "contact_id": 2, "firstName": "chavi", "lastName": "berkovich", "website": new Website("www.chavi.co.il"), "username": new UserName("chavi"), "address": new Adress("shevet yehuda 5"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("chavi@gmail.com")], "groups": ["OpenCourse"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png" }],
      "groups": [
        { "groupName": "Family", "contacts": {}, "group_id": 1 },
        {
          "groupName": "OpenCourse", "contacts": {
            1: {
              "contact_id": 1, "firstName": "shani", "lastName": "romanov", "website": new Website("www.shani.co.il"), "username": new UserName("shanoRomanov"), "address": new Adress("Harav Bloy 10 Bnei-Brak"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("shaniromanov@gmail.com")],
              "groups": ["OpenCourse", "Freinds"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png"
            }, 2: { "contact_id": 2, "firstName": "chavi", "lastName": "berkovich", "website": new Website("www.chavi.co.il"), "username": new UserName("chavi"), "address": new Adress("shevet yehuda 5"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("chavi@gmail.com")], "groups": ["OpenCourse"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png" }
          }, "group_id": 2
        },
        {
          "groupName": "Freinds", "contacts": {
            1: {
              "contact_id": 1, "firstName": "shani", "lastName": "romanov", "website": new Website("www.shani.co.il"), "username": new UserName("shanoRomanov"), "address": new Adress("Harav Bloy 10 Bnei-Brak"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("shaniromanov@gmail.com")],
              "groups": ["OpenCourse", "Work"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png"
            }
          }, "group_id": 3
        }]
    }
  ]
  getUser(request: LoginRequest): LoginResponse {
    let retval: LoginResponse;
    const user = this.users.find(user => user.UserName === request.UserName && user.Password === request.Password)
    if (user) {
      retval = new LoginResponseOk(user)
    }
    else {
      retval = new LoginResponseNotExists()
    }
    return retval
  }

  // _getUser(_user: User): User {
  //   return this.users.find(user => user.UserName === _user.UserName && user.Password === _user.Password)
  // }


  // getContacts(user: User) {
  //   return this._getUser(user).contacts;
  // }

  deleteGroup(request:DeleteGroupRequest): DeleteGroupResponse {
    const user = this.users.find(user => user.UserName == request.userName)
    if (user) {
      const i=user.groups.findIndex(grp=>grp.group_id==request.id)
      user.groups.splice(i, 1)
      // this.deleteGroupFromContact(user,request.groupName)
      let retval = new DeleteGroupResponse();
      return retval
    }
  }

  registerUser(request: RegisterUserRequest): RegisterUserResponse {
    let retval: RegisterUserResponse;
    if (this.users.find(user => user.UserName === request.user.UserName)) {
      retval = new RegisterUserResponseUsernameExists()
    }
    else {
      this.users.push(request.user)
      console.log(this.users)
      retval = new RegisterUserResponseOk(request.user)
    }
    return retval
  }
  addGroup(request: GroupRequest): AddGroupResponse {

    const user = this.users.find(user => user.UserName == request.UserName)
    const mergeArrayWithoutDup: Array<Group> = request.Groups.filter((v, i, array) => array.findIndex((group => v.groupName == group.groupName)) == i)
    user.groups = mergeArrayWithoutDup
    return new AddGroupResponseOK()
  }

  addContact(request: ContactRequest): AddContactResponse {
    let retval: AddContactResponse
    const user = this.users.find(user => user.UserName == request.UserName)
    if (user.contacts.find(contact => contact.contact_id == request.contact.contact_id)) {
      retval = new AddContactResponseIdExists()

    }
    else {
      user.contacts.push(request.contact)
      retval = new AddContactResponseOk()
      request.contact.groups.forEach(grp =>
        user.groups.find(group => group.groupName == grp).contacts[request.contact.contact_id] = request.contact)
    }

    return retval
  }


  updateContact(request: ContactRequest): UpdateContactResponse {
    try {
      const user = this.users.find(user => user.UserName == request.UserName);
      let foundContactIndex = user.contacts.findIndex(contact => contact.contact_id == request.contact.contact_id)
      user.contacts[foundContactIndex] = request.contact;
      return new UpdateContactResponseOk()
    } catch{

    }
  }
  deleteContact(request:DeleteContactRequest):DeleteContactResponse{
    const user = this.users.find(user => user.UserName == request.UserName)
    if (user) {
      const i=user.contacts.findIndex(contact=>contact.contact_id==request.id)
      user.contacts.splice(i, 1)
      user.groups.forEach(grp=>{
        if(grp.contacts[request.id]){
          delete grp.contacts[request.id]
        }
      })
      let retval = new DeleteContactResponseOk();
      return retval
    }
  }
  AddContactToGroup(request: AddContactToGroupRequest): AddContactToGroupResponse {
    let retval = new AddContactToGroupResponseOk()
    const user = this.users.find(user => user.UserName == request.UserName)
    const group = user.groups.find(grp => grp.group_id == request.group_id)
    if (group.contacts[request.contact.contact_id] == null) {
      group.contacts[request.contact.contact_id] = request.contact
    }
    else {
      retval = new AddContactToGroupResponseContactExists()
    }
    return retval
  }
  deleteContactFromGroup(request:DeleteContactFromGroupRequest):DeleteContactFromGroupResponse{
    const user = this.users.find(user => user.UserName == request.userName)
    if (user) {
      const group=user.groups.find(grp=>grp.group_id==request.group_id)
      delete  group.contacts[request.Contact_id]
      // this.deleteGroupFromContact(user,group.groupName)
      return  new DeleteContactFromGroupResponseOk()
    }
  }
  deleteGroupFromContact(request: DeleteGroupFromContactRequest):DeleteGroupFromContactResponse{
    const user = this.users.find(user => user.UserName == request.userName)
    user.contacts.forEach(contact=>{
      let groupIndex=contact.groups.findIndex(grp=>grp==request.groupName)
      if(groupIndex>-1){
       contact.groups.splice(groupIndex, 1);
      }
    })
    return new DeleteGroupFromContactResponseOk()
  }
  updateGroup(request:UpdateGroupRequest):UpdateGroupResponse{
    const user = this.users.find(user => user.UserName == request.userName)
    console.log("request",request)
    user.groups.find(grp=>grp.group_id==request.group_id).groupName=request.groupName
    user.contacts.forEach(contact=> {
      let currentGroup=contact.groups.findIndex(grp=>grp==request.nameBeforeChange)
      if(currentGroup){
        contact.groups[currentGroup]=request.groupName
      }
    })
    return new UpdateGroupResponseOk()
    
  }
  constructor() { }
}
