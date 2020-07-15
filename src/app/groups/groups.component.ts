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
  groups:Array<Group>
  form:FormGroup

  get Groups(): FormArray {
    return this.form.get('Groups') as FormArray;
  }

  constructor(private router: Router,private groupsService:GroupService, public headerService:HeaderService,private authonticationService:AuthonticationService) { }

  ngOnInit(): void {
    this.headerService.show()
    this.groups=this.groupsService.groups
    this.form = new FormGroup({
      Groups:new FormArray([])
    })
    this.groups.map(val=>this.Groups.push(new FormGroup({groupName:new FormControl(val.groupName)})))
  }

  onSubmit(){
    console.log("groups form===>>>",this.form.value);
    this.groupsService.addGroup({"UserName":this.authonticationService.getCurrentUser().UserName,"Groups":this.Groups.value})
    .subscribe()
    
  }
  deleteGroup(index:number){
    this.Groups.removeAt(this.Groups.value[index])
    //delete from repository
    this.groupsService.deleteGroup(index)

  }
  AddGroupToForm(){
    var f:FormArray = this.form.get('Groups') as FormArray
      f.push(new FormGroup({groupName:new FormControl()}))
  }
  updateGroup(index:string){

  }
}
