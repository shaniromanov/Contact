import { Contact } from './contact'
import { Group } from './group'

export class User {
    UserName:string
    Password:string
    email:string
    contacts:Array<Contact>
    groups:Array<Group>
}

