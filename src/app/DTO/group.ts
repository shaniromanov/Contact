import { Contact } from './contact'

export class Group {
    group_id:number
    groupName:string
    contacts:{[contact_id:number]:Contact}={}

    constructor() {

    }
  
}
