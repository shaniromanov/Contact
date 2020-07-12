import { GlobalResponse } from './global-response';

export abstract class AddGroupResponse implements GlobalResponse {
  abstract  Message(): string    
}
