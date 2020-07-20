import { AddContactToGroupResponse } from './add-contact-to-group-response';

export class AddContactToGroupResponseOk implements AddContactToGroupResponse{
    Message(): string {
        return "Add Contact To Group Succeeded"
    }
}
