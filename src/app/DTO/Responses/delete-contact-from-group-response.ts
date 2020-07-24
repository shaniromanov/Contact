import { GlobalResponse } from './global-response';

export abstract class DeleteContactFromGroupResponse implements GlobalResponse{
    abstract Message(): string 
}
