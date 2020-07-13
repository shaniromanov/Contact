import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { MeansOfContact } from '../DTO/means-of-contact';
import { Email } from '../DTO/email';
import { PhoneNumber } from '../DTO/phone-number';
import { ContactsService } from '../Services/contacts.service';
import { Group } from '../DTO/group';
import { HeaderService } from '../Services/header.service';
import { ContactRequest } from '../DTO/Requests/contact-request';
import { AuthonticationService } from '../Services/authontication.service';
import { Router } from '@angular/router';
import { Adress } from '../DTO/adress';
import { Website } from '../DTO/website';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  form:FormGroup
  // websiteValidateMsg:boolean=false
 
  meansOfContactList:{[meanType:string]:typeof  MeansOfContact}={"Address":Adress,"Phone Number":PhoneNumber}
  get meansOfContact(): FormArray {
    return this.form.get('meansOfContact') as FormArray;
  }
  get groups(): FormArray {
    return this.form.get('groups') as FormArray;
  }
 
  onSubmit(){
 
  this.form.get('contact_id').setValue(this.contactsService.numberOfContacts()+1)
    this.contactsService.addContact({"UserName":this.authonticationService.getCurrentUser().UserName,"contact":this.form.value}).subscribe(response=>{
      this.router.navigate(['/contacts/']);
     this.form.value.address
    })
  }
  AddToForm(){
      var f:FormArray = this.form.get('meansOfContact') as FormArray

      f.push(new FormGroup({ typeOfMeanContact:new FormControl(),
        value:new FormControl('',[Validators.required])
       })) 
  }

  AddGroupToForm(){
    var f:FormArray = this.form.get('groups') as FormArray
      f.push(new FormGroup({groupName:new FormControl()}))
  }

  deleteMeanContact(index:string)
{

  this.meansOfContact.removeAt(this.meansOfContact.value[index])
}
deleteGroup(index:string)
{
  this.groups.removeAt(this.groups.value[index])
}


  keys() : Array<string> {
    return Object.keys(this.meansOfContact);
  }
  

  ngOnInit(): void {
    this.headerService.show();
      this.form = new FormGroup({
        contact_id:new FormControl(),
        firstName:new FormControl('',[Validators.required]),
        lastName:new FormControl('',[Validators.required]),
        address:new FormGroup({ typeOfMeanContact:new FormControl("Address"),
          value:new FormControl()}),
          img:new FormControl(),
        website:new FormGroup({ typeOfMeanContact:new FormControl("Website"),
        value:new FormControl('',new Website("").validate())}),
        username:new FormGroup({ typeOfMeanContact:new FormControl("UserName"),
        value:new FormControl()}),
        meansOfContact:new FormArray([]),
        groups:new FormArray([])
      })

  }

  // validateWebsite(event){
  //   console.log("website validator")
  //   if(this.form.get('website').invalid)
  //   this.websiteValidateMsg=true
  //   else this.websiteValidateMsg=false

  // }



  constructor(private router :Router,private contactsService:ContactsService,public headerService:HeaderService,private authonticationService:AuthonticationService) { }


}
