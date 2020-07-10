import { AddContactResponse } from './add-contact-response';

export class AddContactResponseIdExists implements AddContactResponse{
    Message(): string {
     return "Contact ID already exists"
    }
}
