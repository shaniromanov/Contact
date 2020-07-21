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
import { GroupRequest } from '../DTO/Requests/group-request';
import { AddGroupResponse } from '../DTO/Responses/add-group-response';
import { AddGroupResponseGroupAlreadyExist } from '../DTO/Responses/add-group-response-group-already-exist';
import { FormGroupName } from '@angular/forms';
import { AddGroupResponseOK } from '../DTO/Responses/add-group-response-ok';
import { RegisterUserRequest } from '../DTO/Requests/register-user-request';
import { DeleteGroupResponse } from '../DTO/Responses/delete-group-response';
import { DeleteGroupRequest } from '../DTO/Requests/delete-group-request';
import { UpdateContactResponse } from '../DTO/Responses/update-contact-response';
import { AddContactToGroupRequest } from '../DTO/Requests/add-contact-to-group-request';
import { AddContactToGroupResponse } from '../DTO/Responses/add-contact-to-group-response';
import { AddContactToGroupResponseOk } from '../DTO/Responses/add-contact-to-group-response-ok';
import { AddContactToGroupResponseContactExists } from '../DTO/Responses/add-contact-to-group-response-contact-exists';




@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  users: Array<User> = [
    {
      "UserName": "shaniRomanov", "Password": "123456", "email": "shaniromanov@gmail.com",
      "contacts": [{
        "contact_id": 1, "firstName": "racheli", "lastName": "cohen", "website": new Website("www.rachel.co.il"), "username": new UserName("racheli"), "address": new Adress("shevet yehuda 5"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("rachli548@gmail.com "), new Adress("Bilu 5 Bnei-Brak")],
        "groups": ["Family", "Work"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png"
      }, { "contact_id": 2, "firstName": "margalite", "lastName": "Sayada", "website": new Website("www.margalite.co.il"), "username": new UserName("margalite"), "address": new Adress("shevet yehuda 5"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("margalite95@gmail.com")], "groups": ["Freind", "Work"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png" }],

      "groups": [
        {
          "groupName": "Family", "contacts": {
            1: {
              "contact_id": 1, "firstName": "racheli", "lastName": "cohen", "website": new Website("www.rachel.co.il"), "username": new UserName("racheli"), "address": new Adress("shevet yehuda 5"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("rachli548@gmail.com "), new Adress("Bilu 5 Bnei-Brak")],
              "groups": ["Family", "Work"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png"
            }
          }, "group_id": 1
        },
        {
          "groupName": "Work", "contacts": {
            1: {
              "contact_id": 1, "firstName": "racheli", "lastName": "cohen", "website": new Website("www.rachel.co.il"), "username": new UserName("racheli"), "address": new Adress("shevet yehuda 5"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("rachli548@gmail.com "), new Adress("Bilu 5 Bnei-Brak")],
              "groups": ["Family", "Work"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png"
            }, 2: { "contact_id": 2, "firstName": "margalite", "lastName": "Sayada", "website": new Website("www.margalite.co.il"), "username": new UserName("margalite"), "address": new Adress("shevet yehuda 5"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("margalite95@gmail.com")], "groups": ["Freind", "Work"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png" }
          }, "group_id": 2
        },
        { "groupName": "Freinds", "contacts": { 2: { "contact_id": 2, "firstName": "margalite", "lastName": "Sayada", "website": new Website("www.margalite.co.il"), "username": new UserName("margalite"), "address": new Adress("shevet yehuda 5"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("margalite95@gmail.com")], "groups": ["Freind", "Work"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png" } }, "group_id": 3 },
        { "groupName": "Emergency", "contacts": {}, "group_id": 4 }]
    }

    , {
      "UserName": "margaliteSayada", "Password": "234567", "email": "margalite95@gmail.com",
      "contacts": [{
        "contact_id": 1, "firstName": "shani", "lastName": "romanov", "website": new Website("www.shani.co.il"), "username": new UserName("shanoRomanov"), "address": new Adress("Harav Bloy 10 Bnei-Brak"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("shaniromanov@gmail.com ")],
        "groups": ["OpenCourse", "Freind"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png"
      }, { "contact_id": 2, "firstName": "chavi", "lastName": "berkovich", "website": new Website("www.chavi.co.il"), "username": new UserName("chavi"), "address": new Adress("shevet yehuda 5"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("chavi@gmail.com")], "groups": ["OpenCourse"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png" }],
      "groups": [
        { "groupName": "Family", "contacts": {}, "group_id": 1 },
        {
          "groupName": "OpenCourse", "contacts": {
            1: {
              "contact_id": 1, "firstName": "shani", "lastName": "romanov", "website": new Website("www.shani.co.il"), "username": new UserName("shanoRomanov"), "address": new Adress("Harav Bloy 10 Bnei-Brak"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("shaniromanov@gmail.com ")],
              "groups": ["OpenCourse", "Freind"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png"
            }, 2: { "contact_id": 2, "firstName": "chavi", "lastName": "berkovich", "website": new Website("www.chavi.co.il"), "username": new UserName("chavi"), "address": new Adress("shevet yehuda 5"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("chavi@gmail.com")], "groups": ["OpenCourse"], "img": "https://img.icons8.com/dusk/64/000000/old-man.png" }
          }, "group_id": 2
        },
        {
          "groupName": "Freinds", "contacts": {
            1: {
              "contact_id": 1, "firstName": "shani", "lastName": "romanov", "website": new Website("www.shani.co.il"), "username": new UserName("shanoRomanov"), "address": new Adress("Harav Bloy 10 Bnei-Brak"), "meansOfContact": [new PhoneNumber("03-5794441"), new Email("shaniromanov@gmail.com ")],
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

  _getUser(_user: User): User {
    return this.users.find(user => user.UserName === _user.UserName && user.Password === _user.Password)
  }


  getContacts(user: User) {
    return this._getUser(user).contacts;
  }

  deleteGroup(index: number, username = "margaliteSayada", password = "234567"): DeleteGroupResponse {
    const user = this.users.find(u => u.Password === password && u.UserName === username)
    if (user) {
      user.groups.splice(index, 1)
      let retval: DeleteGroupResponse
      console.log("deleted")
      retval = new DeleteGroupResponse();
      retval.groups = user.groups;
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
      console.log("before: ", this.users.find(user => user.UserName == request.UserName).contacts)
      user.contacts.push(request.contact)
      retval = new AddContactResponseOk()
      console.log("request.contact", request.contact)
      request.contact.groups.forEach(grp =>
        user.groups.find(group => group.groupName == grp).contacts[request.contact.contact_id] = request.contact)
      console.log("after addcontactToGroup=>>", user.groups)
      console.log("after: ", this.users.find(user => user.UserName == request.UserName).contacts)
    }
    console.log(retval)
    return retval
  }


  updateContact(request: ContactRequest): UpdateContactResponse {
    try {
      const user = this.users.find(user => user.UserName == request.UserName);
      let foundContactIndex = user.contacts.findIndex(contact => contact.contact_id == request.contact.contact_id)
      user.contacts[foundContactIndex] = request.contact;
      return new UpdateContactResponse()
    } catch{

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
  constructor() { }
}
