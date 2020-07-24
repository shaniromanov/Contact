import { DeleteContactFromGroupResponse } from './delete-contact-from-group-response';

export class DeleteContactFromGroupResponseOk implements DeleteContactFromGroupResponse{
    Message(): string {
       return "Deleting the contact from the group was successful"
    }
}
