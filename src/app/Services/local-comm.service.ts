import { Injectable } from '@angular/core';
import { CommService } from './comm.service';
import { RepositoryService } from './repository.service';
import { Observable } from 'rxjs';
import { LoginResponse } from '../DTO/Responses/login-response';
import { LoginRequest } from '../DTO/Requests/login-request';
import { RegisterUserResponse } from '../DTO/Responses/register-user-response';
import { AddContactResponse } from '../DTO/Responses/add-contact-response';
import { ContactRequest } from '../DTO/Requests/contact-request';
import { GroupRequest } from '../DTO/Requests/group-request';
import { AddGroupResponse } from '../DTO/Responses/add-group-response';
import { RegisterUserRequest } from '../DTO/Requests/register-user-request';
import { DeleteGroupResponse } from '../DTO/Responses/delete-group-response';
import { UpdateContactResponse } from '../DTO/Responses/update-contact-response';
import { AddContactToGroupRequest } from '../DTO/Requests/add-contact-to-group-request';
import { AddContactToGroupResponse } from '../DTO/Responses/add-contact-to-group-response';
import { DeleteGroupRequest } from '../DTO/Requests/delete-group-request';
import { DeleteContactResponse } from '../DTO/Responses/delete-contact-response';
import { DeleteContactRequest } from '../DTO/Requests/delete-contact-request';
import { DeleteContactFromGroupRequest } from '../DTO/Requests/delete-contact-from-group-request';
import { DeleteContactFromGroupResponse } from '../DTO/Responses/delete-contact-from-group-response';
import { DeleteGroupFromContactRequest } from '../DTO/Requests/delete-group-from-contact-request';
import { DeleteGroupFromContactResponse } from '../DTO/Responses/delete-group-from-contact-response';
import { UpdateGroupRequest } from '../DTO/Requests/update-group-request';
import { UpdateGroupResponse } from '../DTO/Responses/update-group-response';

@Injectable()
export class LocalCommService implements CommService {

  constructor(private repositoryService: RepositoryService) { }

  updateContact(request: ContactRequest): Observable<UpdateContactResponse> {
    return new Observable<UpdateContactResponse>(
      subscriber => {
        let ret = this.repositoryService.updateContact(request)

        return subscriber.next(ret)
      }

    )
  }

  deleteGroup(request: DeleteGroupRequest): Observable<DeleteGroupResponse> {
    return new Observable<DeleteGroupResponse>(
      subscriber => {
        subscriber.next(this.repositoryService.deleteGroup(request))
      })
  }
  addGroup(request: GroupRequest): Observable<AddGroupResponse> {
    return new Observable<AddGroupResponse>(
      subscriber => {

        let ret = this.repositoryService.addGroup(request)

        return subscriber.next(ret)
      }
    )
  }

  registerUser(request: RegisterUserRequest): Observable<RegisterUserResponse> {
    return new Observable<LoginResponse>(
      subscriber => {
        let ret = this.repositoryService.registerUser(request)
        return subscriber.next(ret)
      }
    )
  }
  getUser(request: LoginRequest): Observable<LoginResponse> {
    return new Observable<LoginResponse>(
      subscriber => {
        let ret = this.repositoryService.getUser(request)

        return subscriber.next(ret)
      }
    )
  }

  addContact(request: ContactRequest): Observable<AddContactResponse> {
    return new Observable<AddContactResponse>(
      subscriber => {
        let ret = this.repositoryService.addContact(request)
        return subscriber.next(ret)
      }
    )
  }
  AddContactToGroup(request: AddContactToGroupRequest): Observable<AddContactToGroupResponse> {
    return new Observable<AddContactToGroupResponse>(
      subscriber => {
        let ret = this.repositoryService.AddContactToGroup(request)
        return subscriber.next(ret)
      }
    )
  }

  deleteContact(request: DeleteContactRequest): Observable<DeleteContactResponse> {
    return new Observable<DeleteContactResponse>(
      subscriber => {
        subscriber.next(this.repositoryService.deleteContact(request))
      })
  }


  deleteContactFromGroup(request: DeleteContactFromGroupRequest): Observable<DeleteContactFromGroupResponse> {
    return new Observable<DeleteContactFromGroupResponse>(
      subscriber => {
        subscriber.next(this.repositoryService.deleteContactFromGroup(request))
      })
  }
  deleteGroupFromContact(request: DeleteGroupFromContactRequest): Observable<DeleteGroupFromContactResponse> {
    return new Observable<DeleteGroupFromContactResponse>(
      subscriber => {
        subscriber.next(this.repositoryService.deleteGroupFromContact(request))
      })
  }
  updateGroup(request: UpdateGroupRequest): Observable<UpdateGroupResponse> {
    return new Observable<UpdateGroupResponse>(
      subscriber => {
        subscriber.next(this.repositoryService.updateGroup(request))
      })
  }
}
