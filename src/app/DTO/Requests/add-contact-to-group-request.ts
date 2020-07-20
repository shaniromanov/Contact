import { Contact } from '../contact'

export class AddContactToGroupRequest {
    UserName:string
    contact:Contact
    group_id:number
}
