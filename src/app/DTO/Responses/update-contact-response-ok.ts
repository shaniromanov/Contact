import { UpdateContactResponse } from './update-contact-response';

export class UpdateContactResponseOk implements UpdateContactResponse{
    Message(): string {
        return "Updated succesfully"
    }
}
