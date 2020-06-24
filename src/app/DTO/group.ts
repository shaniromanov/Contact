import { Contact } from './contact'

export class Group {
    groupName:string
    contacts:{[contact_id:number]:Contact}={}
    private contactExists = (contact_id:number):boolean =>this.contacts.hasOwnProperty(contact_id)
    addContact(contact:Contact){

            this.contacts[contact.contact_id] = contact 
    }
    updateContact(contact_id:number,contact:Contact){
        if (this.contactExists(contact_id)){
            this.contacts[contact_id] = contact
        }
    }
    deleteContact(contact_id:number){
        if (this.contactExists(contact_id)){
            delete(this.contacts[contact_id])
        }
    }
}
