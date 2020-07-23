import { Component, OnInit } from '@angular/core';
import { Group } from '../DTO/group';
import { Router } from '@angular/router';
import { GroupService } from '../Services/group.service';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../Services/header.service';
import { AuthonticationService } from '../Services/authontication.service';
import { AddGroupResponseOK } from '../DTO/Responses/add-group-response-ok';
import { DeleteGroupResponse } from '../DTO/Responses/delete-group-response';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groupList: Array<Group>
  form: FormGroup
  msg:string

  get Groups(): FormArray {
    return this.form.get('Groups') as FormArray;
  }
 

  constructor(private router: Router, private groupsService: GroupService, public headerService: HeaderService, private authonticationService: AuthonticationService) { }

  ngOnInit(): void {
    this.headerService.show()
    this.groupList = this.groupsService.groups
    this.form = new FormGroup({
      Groups: new FormArray([])
    })
    this.setGroupsIntoForm(this.groupList);
  }

  setGroupsIntoForm(groups:Array<Group>) {
    groups.map(val => this.Groups.push(new FormGroup({group_id: new FormControl(val.group_id), groupName: new FormControl(val.groupName) })))
  }

  onSubmit() {
    this.groupsService.addGroup({ "UserName": this.authonticationService.getUserName(), "Groups": this.Groups.value })
      .subscribe(response=>{
        if(response instanceof AddGroupResponseOK){
          Object.assign(this.groupList, this.Groups.value)
        }
        this.msg=response.Message()
      })

  }
  deleteGroup(index: number) {
    const i= this.groupList.findIndex(grp=>grp.group_id==this.Groups.value[index].group_id)
    console.log("index comp",index)
    if(i>-1){
      this.groupsService.deleteGroup( {"id":this.Groups.value[index].group_id,"userName":this.authonticationService.getUserName()}
      ).subscribe((response) => {
    if(response instanceof DeleteGroupResponse){
    console.log(this.groupList)
    this.groupList.splice(i, 1)
  }
  })   
    }
    this.Groups.removeAt(index)
    console.log(this.groupList)
  }
  AddGroupToForm() {
    this.groupsService.valueForId++
    var f: FormArray = this.form.get('Groups') as FormArray
    f.push(new FormGroup({group_id:new FormControl(this.groupsService.valueForId), groupName: new FormControl() }))
    
  }
  updateGroup(index: string) {

  }
}
