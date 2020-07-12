import { AddGroupResponse } from './add-group-response';

export class AddGroupResponseOK implements AddGroupResponse{
    Message(): string {
        return "Group successfully added"
    }
}
