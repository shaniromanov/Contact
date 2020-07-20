import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GroupService } from '../Services/group.service';
import { Group } from '../DTO/group';
import { Contact } from '../DTO/contact';

@Component({
  selector: 'app-filter-by-group',
  templateUrl: './filter-by-group.component.html',
  styleUrls: ['./filter-by-group.component.css']
})
export class FilterByGroupComponent implements OnInit {

  groups:Array<Group>=this.groupService.groups
  @Output() filterContacts:EventEmitter<Array<Contact>>
  constructor(private groupService:GroupService) {
    this.filterContacts = new EventEmitter<Array<Contact>>() 
   }

  ngOnInit(): void {
  }
  filterByNameGroup(group:string){

    if(group=="without"){
      this.filterContacts.emit(null)
    }
    else{
   const contacts=Object.values(this.groups.find(grp=>grp.groupName==group).contacts)
    this.filterContacts.emit(contacts)
    }
  }

}
