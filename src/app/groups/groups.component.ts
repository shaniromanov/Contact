import { Component, OnInit } from '@angular/core';
import { Group } from '../DTO/group';
import { Router } from '@angular/router';
import { GroupService } from '../Services/group.service';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

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

  constructor(private router: Router,private groupsService:GroupService) { }

  ngOnInit(): void {
    this.groups=this.groupsService.groups
    this.form = new FormGroup({
      Groups:new FormArray([])
    })
    this.groups.map(val=>this.Groups.push(new FormGroup({groupName:new FormControl(val.groupName)})))
  }
  
  onSubmit(){
    console.log("groups form===>>>",this.form.value);
    
  }
  deleteGroup(){
  }
  AddGroup(){
    var f:FormArray = this.form.get('Groups') as FormArray
  f.push(new FormGroup({groupName:new FormControl('',[Validators.required])}))

  }
}
