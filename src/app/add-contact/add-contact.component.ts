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

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  form:FormGroup
 
  myURL:any

 
  meansOfContactList:{[meanType:string]:typeof  MeansOfContact}={"Email":Email,"Phone Number":PhoneNumber}
  get meansOfContact(): FormArray {
    return this.form.get('meansOfContact') as FormArray;
  }
  get groups(): FormArray {
    return this.form.get('groups') as FormArray;
  }
  onSubmit(){

    this.contactsService.addContact({"UserName":this.authonticationService.getCurrentUser().UserName,"contact":this.form.value}).subscribe(response=>{
      this.router.navigate(['/contacts/']);
    })
  }
  AddToForm(){
      var f:FormArray = this.form.get('meansOfContact') as FormArray

      f.push(new FormGroup({ typeOfMeanContact:new FormControl(),
        value:new FormControl('',[Validators.required]),
       })) 
  }

  AddGroupToForm(){
    var f:FormArray = this.form.get('groups') as FormArray
      f.push(new FormGroup({groupName:new FormControl()}))
  }

  keys() : Array<string> {
    return Object.keys(this.meansOfContact);
  }
  

  ngOnInit(): void {
    this.headerService.show();
      this.form = new FormGroup({
        firstName:new FormControl(),
        lastName:new FormControl(),
        adress:new FormControl(),
        image:new FormControl(),
        website:new FormControl(),
        username:new FormControl(),
        meansOfContact:new FormArray([]),
        groups:new FormArray([])
      })

  }
//   onURLinserted() {
    
// }


  constructor(private router :Router,private contactsService:ContactsService,public headerService:HeaderService,private authonticationService:AuthonticationService) { }


}
