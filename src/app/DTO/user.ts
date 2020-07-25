import { Contact } from './contact'
import { Group } from './group'

export class User {
    FirstName:string
    LastName:string
    UserName:string
    Password:string
    Email:string
    contacts:Array<Contact>
    groups:Array<Group>
}

