import { GlobalResponse } from './global-response';

export abstract class AddContactResponse implements GlobalResponse {
    abstract  Message(): string 
}
