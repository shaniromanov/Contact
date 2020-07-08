import { Injectable } from '@angular/core';
import { CommService } from './comm.service';
import { LoginRequest } from '../DTO/Requests/login-request';
import { LoginResponse } from '../DTO/Responses/login-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private commService:CommService) { }
  findExistsUser(request:LoginRequest): Observable<LoginResponse> {

    return this.commService.getUser(request);
  }
  // getnumOfTutorial() {
  //   return this.http.get(`${baseUrl}/query/numOfTutorial`);
  // }


  // create(data) {
  //   return this.http.post(baseUrl, data);
  // }

  // update(id, data) {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }
  // init(data) {
  //   return this.http.post(`${baseUrl}/initUser`,data);
  // }

  // delete(id) {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  // deleteAll() {
  //   return this.http.delete(baseUrl);
  // }

  // findByUserName(name) {
  //   return this.http.get(`${baseUrl}?username=${name}`);
  // }

  // findByParams(status, name, faculty)
  // {
  //   return this.http.get(`${baseUrl}?status=${status}&username=${name}&faculty=${faculty}`);
  // }

  // findByStatus(status) {
  //   return this.http.get(`${baseUrl}?status=${status}`);
  // }

  // findByFaculty(faculty) {
  //   return this.http.get(`${baseUrl}?faculty=${faculty}`);
  // }
}
