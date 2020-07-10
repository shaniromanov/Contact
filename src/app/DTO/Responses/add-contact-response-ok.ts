import { AddContactResponse } from './add-contact-response';

export class AddContactResponseOk implements AddContactResponse{
    Message(): string {
        return "Add Contact Succeeded"
    }
}
