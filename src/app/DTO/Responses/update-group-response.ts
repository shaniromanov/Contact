import { GlobalResponse } from './global-response';

export abstract class UpdateGroupResponse implements GlobalResponse{
    abstract Message(): string
}
