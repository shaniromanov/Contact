import { MeansOfContact } from './means-of-contact'
import { Group } from './group'

export class Contact {
    contact_id:number
    firstName:string
    lastName:string
    meansOfContact:Array<MeansOfContact>
    groups:Array<Group>
    img:string
}
