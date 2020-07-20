import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../Services/group.service';
import { Group } from '../DTO/group';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthonticationService } from '../Services/authontication.service';

@Component({
  selector: 'add-groups',
  templateUrl: './add-groups.component.html',
  styleUrls: ['./add-groups.component.css']
})
export class AddGroupsComponent implements OnInit {
  groups:Array<Group>=this.groupsService.groups
  constructor(private groupsService:GroupService) { }
  @Input() currentFormControl: FormControl;
  @Input() currentIndex:number;

  ngOnInit(): void {
    console.log("group form===>>>",this.currentFormControl.value)
   
  }
}
