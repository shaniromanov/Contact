import { Component, OnInit } from '@angular/core';
import { Group } from '../DTO/group';
import { Router } from '@angular/router';
import { GroupService } from '../Services/group.service';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../Services/header.service';
import { AuthonticationService } from '../Services/authontication.service';
import { AddGroupResponseOK } from '../DTO/Responses/add-group-response-ok';
import { DeleteGroupResponse } from '../DTO/Responses/delete-group-response';
import { Contact } from '../DTO/contact';
import { DeleteGroupFromContactResponseOk } from '../DTO/Responses/delete-group-from-contact-response-ok';
import { UpdateGroupResponseOk } from '../DTO/Responses/update-group-response-ok';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groupList: Array<Group> = this.groupService.groups
  form: FormGroup
  msg: string
  selectedGroup: string
  selectedGroupId: number

  get Groups(): FormArray {
    return this.form.get('Groups') as FormArray;
  }


  constructor(private router: Router, private groupService: GroupService, public headerService: HeaderService, private authonticationService: AuthonticationService) { }

  ngOnInit(): void {
    console.log(this.groupList)
    this.headerService.show()
    this.form = new FormGroup({
      Groups: new FormArray([])
    })
    this.setGroupsIntoForm(this.groupList);

  }

  setGroupsIntoForm(groups: Array<Group>) {
    groups.map(val => this.Groups.push(new FormGroup({ group_id: new FormControl(val.group_id), groupName: new FormControl(val.groupName) })))
  }

  onSubmit() {
    this.groupService.addGroup({ "UserName": this.authonticationService.getUserName(), "Groups": this.Groups.value })
      .subscribe(response => {
        if (response instanceof AddGroupResponseOK) {
          Object.assign(this.groupList, this.Groups.value)
        }
        this.msg = response.Message()
      })

  }
  deleteGroup(index: number) {
    const id = this.Groups.value[index].group_id
    const name = this.Groups.value[index].groupName
    const i = this.groupList.findIndex(grp => grp.group_id == id)
    if (i > -1) {
      this.groupService.deleteGroup({ "id": id, "userName": this.authonticationService.getUserName(), "groupName": name }
      ).subscribe((response) => {
        if (response instanceof DeleteGroupResponse) {
          this.groupList.splice(i, 1)
          this.groupService.deleteGroupFromContact({ "userName": this.authonticationService.getUserName(), "groupName": name })
            .subscribe(response => {
              if (response instanceof DeleteGroupFromContactResponseOk) {
                this.groupService.deleteGroupFromContactLocal(name)
              }
            })
        }
      })
    }
    this.Groups.removeAt(index)
  }
  AddGroupToForm() {
    this.groupService.valueForId++
    var f: FormArray = this.form.get('Groups') as FormArray
    f.push(new FormGroup({ group_id: new FormControl(this.groupService.valueForId), groupName: new FormControl() }))

  }
  selectGroup(groupName: string, group_id: number) {
    this.selectedGroup = groupName
    this.selectedGroupId = group_id

  }
  updateGroup(index: number) {
    const id = this.Groups.value[index].group_id
    const name = this.Groups.value[index].groupName
    let nameBeforeChange = this.groupList.find(grp => grp.group_id == id).groupName
    this.groupService.updateGroup({
      "userName": this.authonticationService.getUserName(),
      "group_id": id, "groupName": name, "nameBeforeChange": nameBeforeChange
    }).subscribe(response => {
      if (response instanceof UpdateGroupResponseOk) {

        this.groupList.find(grp => grp.group_id == id).groupName = name
        this.authonticationService.getContacts().forEach(contact => {
          let i = contact.groups.findIndex(grp => grp == nameBeforeChange)
          contact.groups[i] = name
        })
      }
    })
  }
}
