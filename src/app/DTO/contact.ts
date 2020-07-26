import { MeansOfContact } from './means-of-contact'
import { Website } from './website'
import { UserName } from './user-name'
import { Adress } from './adress'

export class Contact {
    contact_id: number
    firstName: string
    lastName: string
    website: Website
    username: UserName
    address: Adress
    meansOfContact: Array<MeansOfContact>
    groups: Array<string>
    img: string
}
