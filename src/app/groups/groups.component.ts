import { Component, OnInit } from '@angular/core';
import { Group } from '../DTO/group';
import { Router } from '@angular/router';
import { GroupService } from '../Services/group.service';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../Services/header.service';
import { AuthonticationService } from '../Services/authontication.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: Array<Group>
  form: FormGroup

  get Groups(): FormArray {
    return this.form.get('Groups') as FormArray;
  }
  set Groups(value) {
    this.form.controls.Groups = value;
  }

  constructor(private router: Router, private groupsService: GroupService, public headerService: HeaderService, private authonticationService: AuthonticationService) { }

  ngOnInit(): void {
    this.headerService.show()
    this.groups = this.groupsService.groups
    this.form = new FormGroup({
      Groups: new FormArray([])
    })
    this.setGroupsIntoForm(this.groups);
  }

  setGroupsIntoForm(groups) {
    this.Groups = new FormArray([])
    groups.map(val => this.Groups.push(new FormGroup({ groupName: new FormControl(val.groupName) })))
  }

  onSubmit() {
    console.log("groups form===>>>", this.form.value);
    this.groupsService.addGroup({ "UserName": this.authonticationService.getCurrentUser().UserName, "Groups": this.Groups.value })
      .subscribe()

  }
  deleteGroup(index: number) {

    this.groupsService.deleteGroup(index).subscribe((res: Group[]) => {
      this.setGroupsIntoForm(res)
    })

  }
  AddGroupToForm() {
    var f: FormArray = this.form.get('Groups') as FormArray
    f.push(new FormGroup({ groupName: new FormControl() }))
  }
  updateGroup(index: string) {

  }
}
