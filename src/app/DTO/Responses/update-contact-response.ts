import { GlobalResponse } from './global-response';

export class UpdateContactResponse implements GlobalResponse {
    Message(): string {
        return "Updated succesfully"
    }
}
