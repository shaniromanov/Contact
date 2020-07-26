import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../Services/group.service';
import { Group } from '../DTO/group';
import { FormControl, FormArray } from '@angular/forms';
import { AuthonticationService } from '../Services/authontication.service';
import { RepositoryService } from '../Services/repository.service';
import { DeleteContactFromGroupResponseOk } from '../DTO/Responses/delete-contact-from-group-response-ok';

@Component({
  selector: 'add-groups',
  templateUrl: './add-groups.component.html',
  styleUrls: ['./add-groups.component.css']
})
export class AddGroupsComponent implements OnInit {
  groups: Array<Group> = this.groupsService.groups
  constructor(private groupsService: GroupService, private authonticationService: AuthonticationService, private rep: RepositoryService) { }
  @Input() currentFormControl: FormControl;
  @Input() currentIndex: number;
  @Input() formArray: FormArray;
  @Input() contact_id: number;

  ngOnInit(): void {
    console.log("group form===>>>", this.currentFormControl.value)
    console.log("contact id===>>>", this.contact_id)
  }
  deleteGroupFromContact() {
    this.formArray.removeAt(this.currentIndex)
    let group = this.groups.find(grp => grp.groupName == this.currentFormControl.value && grp.contacts[this.contact_id])
    if (group) {
      this.groupsService.deleteContactFromGroup({ "userName": this.authonticationService.getUserName(), "group_id": group.group_id, "Contact_id": this.contact_id }).subscribe(
        (response) => {
          if (response instanceof DeleteContactFromGroupResponseOk) {
            delete group.contacts[this.contact_id]
            console.log(this.groups)

          }
        }
      )
      console.log(this.rep.users[0].groups[0].contacts)
    }

  }
}
