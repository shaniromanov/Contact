import { DeleteContactResponse } from './delete-contact-response';

export class DeleteContactResponseOk implements DeleteContactResponse{
    Message(): string {
        return "Contact deleted successfully"
    }
}
