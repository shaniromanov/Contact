import { GlobalResponse } from './global-response';

export abstract class AddContactToGroupResponse implements GlobalResponse{
    abstract Message(): string 
}
