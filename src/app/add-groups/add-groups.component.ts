import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../Services/group.service';
import { Group } from '../DTO/group';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'add-groups',
  templateUrl: './add-groups.component.html',
  styleUrls: ['./add-groups.component.css']
})
export class AddGroupsComponent implements OnInit {
  groups:Array<Group>=this.groupsService.groups
  constructor(private groupsService:GroupService) { }
  @Input() currentFormGroup: FormGroup;
  @Input() currentIndex:number;

  ngOnInit(): void {
    console.log("group form===>>>",this.currentFormGroup.value)
   
  }

}
