import { AddContactToGroupResponse } from './add-contact-to-group-response';

export class AddContactToGroupResponseContactExists implements AddContactToGroupResponse{
    Message(): string {
       return "The contact already exists in this group"
    }
}
