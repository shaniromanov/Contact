import { AddGroupResponse } from './add-group-response';

export class AddGroupResponseGroupAlreadyExist implements AddGroupResponse{
    Message(): string {
        return "This group already exist"
    }
}
