import { Contact } from './contact'
import { Group } from './group'

export class User {
    username:string
    password:string
    email:string
    contacts:Array<Contact>
    groups:Array<Group>
}

