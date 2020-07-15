import { GlobalResponse } from './global-response';

export class DeleteGroupResponse implements GlobalResponse {
    Message(): string {
return "Group deleted successfully"    }
}
