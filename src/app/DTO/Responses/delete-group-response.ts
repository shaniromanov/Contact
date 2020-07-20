import { GlobalResponse } from './global-response';
import { Group } from '../group';

export class DeleteGroupResponse implements GlobalResponse {
    Message(): string {
        return "Group deleted successfully"
    };
    groups: Group[];
}
