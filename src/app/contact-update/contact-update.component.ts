import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../Services/contacts.service';
import { Contact } from '../DTO/contact';
import { ActivatedRoute } from '@angular/router';
import { MeansOfContact } from '../DTO/means-of-contact';
import { Email } from '../DTO/email';
import { PhoneNumber } from '../DTO/phone-number';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Adress } from '../DTO/adress';
import { HeaderService } from '../Services/header.service';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {

  constructor(private contactsService:ContactsService, private route: ActivatedRoute ,public headerService:HeaderService) { }
  currentContact:Contact
  form:FormGroup
  groupList:Array<String>

  
  meansContact:{[meanType:string]:typeof  MeansOfContact}={"Email":Email,"Phone Number":PhoneNumber,"Adress":Adress}

  get MeansContact(): FormArray {
    return this.form.get('MeansContact') as FormArray;
  }
  get Groups(): FormArray {
    return this.form.get('Groups') as FormArray;
  }
  ngOnInit(): void {
    this.headerService.show();
    this.currentContact=this.getUser(this.route.snapshot.paramMap.get('id'))
    this.groupList=this.contactsService.groups.map(v=>v.groupName)

    this.form = new FormGroup({
      FirstName:new FormControl(this.currentContact.firstName),
      LastName:new FormControl(this.currentContact.lastName),
      Image:new FormControl(),
      Adress:new FormControl(this.currentContact.meansOfContact.filter(mean=>mean.typeOfMeanContact=="Adress")[0]),
      Website:new FormControl(this.currentContact.meansOfContact.filter(mean=>mean.typeOfMeanContact=="Website")[0]),
      Username:new FormControl(this.currentContact.meansOfContact.filter(mean=>mean.typeOfMeanContact=="Usernamr")[0]),
      MeansContact:new FormArray([]),
      Groups:new FormArray([])
    })

    this.currentContact.meansOfContact.map(val=>this.MeansContact.push( new FormGroup({typeOfContact:new FormControl(val.typeOfMeanContact),value:new FormControl(val.value)})))
    this.currentContact.groups.map(val=>this.Groups.push(new FormGroup({groupName:new FormControl(val.groupName)})))
  }
  getUser(id:string):Contact{
   return this.contactsService.findContact(id)
  }
  keys() : Array<string> {
    return Object.keys(this.meansContact);
  }
  AddToForm(){
    var f:FormArray = this.form.get('MeansContact') as FormArray

    f.push(new FormGroup({ typeOfContact:new FormControl(),
      value:new FormControl('',[Validators.required]),
     }))
    
    
}
deleteMeanContact(index:string)
{

  this.MeansContact.removeAt(this.MeansContact.value[index])
}
deleteGroup(index:string)
{
  this.Groups.removeAt(this.Groups.value[index])
}

AddGroupToForm(){
  var f:FormArray = this.form.get('Groups') as FormArray
  f.push(new FormGroup({groupName:new FormControl('',[Validators.required])}))
}
onSubmit(){
  console.log("onsubmit==>>",this.form.value)
}

}
