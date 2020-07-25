import { DeleteGroupFromContactResponse } from './delete-group-from-contact-response';

export class DeleteGroupFromContactResponseOk implements DeleteGroupFromContactResponse{
    Message(): string {
        return "Deleting the group from contacts was successful"
    }
}
