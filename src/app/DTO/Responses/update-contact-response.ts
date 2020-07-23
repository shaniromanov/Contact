import { GlobalResponse } from './global-response';

export abstract class UpdateContactResponse implements GlobalResponse {
    abstract Message(): string 
}
