import { GlobalResponse } from './global-response';

export abstract class DeleteGroupFromContactResponse implements GlobalResponse{
    abstract Message(): string 
}
