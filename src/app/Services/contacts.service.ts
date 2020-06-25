import { Injectable } from '@angular/core';
import { Group } from '../DTO/group';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
groups:Array<Group>=[new Group("Family"),new Group("Freind")]
  constructor() { }
}
