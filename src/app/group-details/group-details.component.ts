import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GroupService } from '../Services/group.service';
import { Contact } from '../DTO/contact';
import { ActivatedRoute } from '@angular/router';
import { AuthonticationService } from '../Services/authontication.service';
import { DeleteContactFromGroupResponseOk } from '../DTO/Responses/delete-contact-from-group-response-ok';
import { Group } from '../DTO/group';
import { DeleteGroupFromContactResponseOk } from '../DTO/Responses/delete-group-from-contact-response-ok';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit ,OnChanges{
 groups:Array<Group>
  @Input()  groupName:string
  @Input()  group_id:number
  groupContacts:Array<Contact>=[]
  constructor(private route:ActivatedRoute,private groupService:GroupService,private authonticationService:AuthonticationService) { 
   
  }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges){
    this.groups=this.groupService.getGroups()
    const group=this.groups.find(grp=>grp.groupName==this.groupName)
    if(group){
      this.groupContacts=Object.values(group.contacts)
    }
    else{
      this.groupContacts=[]
    }
    

  }
  deleteContactFromGroup(id:number)
  {
    this.groupService.deleteContactFromGroup({"userName":this.authonticationService.getUserName(),
      "group_id":this.group_id,"Contact_id":id}).subscribe(
        (response) => {
          if(response instanceof DeleteContactFromGroupResponseOk){
           delete this.groups.find(grp=>grp.group_id==this.group_id).contacts[id]
           this.groupContacts=Object.values(this.groups.find(grp=>grp.groupName==this.groupName).contacts)
           console.log(this.groups)
           this.groupService.deleteGroupFromContact({"userName":this.authonticationService.getUserName(),"groupName":this.groupName})
           .subscribe(response=>{
            if(response instanceof DeleteGroupFromContactResponseOk){
              this.groupService.deleteGroupFromContactLocal(this.groupName)
            }
           })
        }
      })
  }

}
