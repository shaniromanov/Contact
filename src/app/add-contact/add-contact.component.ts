import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { MeansOfContact } from '../DTO/means-of-contact';
import { Email } from '../DTO/email';
import { PhoneNumber } from '../DTO/phone-number';
import { ContactsService } from '../Services/contacts.service';
import { Group } from '../DTO/group';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  form:FormGroup
 
  myURL:any

 
  meansContact:{[meanType:string]:typeof  MeansOfContact}={"Email":Email,"Phone Number":PhoneNumber}
  get MeansContact(): FormArray {
    return this.form.get('MeansContact') as FormArray;
  }
  get Groups(): FormArray {
    return this.form.get('Groups') as FormArray;
  }
  onSubmit(){
    console.log("onsubmit==>>",this.form.value)
  }
  AddToForm(){
      var f:FormArray = this.form.get('MeansContact') as FormArray

      f.push(new FormGroup({ typeOfContact:new FormControl(),
        value:new FormControl('',[Validators.required]),
       }))
      
      
  }

  AddGroupToForm(){
    var f:FormArray = this.form.get('Groups') as FormArray
      f.push(new FormGroup({groupName:new FormControl()}))
  }

  keys() : Array<string> {
    return Object.keys(this.meansContact);
  }
  

  ngOnInit(): void {
      this.form = new FormGroup({
        FirstName:new FormControl(),
        LastName:new FormControl(),
        Adress:new FormControl(),
        Image:new FormControl(),
        Website:new FormControl(),
        Username:new FormControl(),
        MeansContact:new FormArray([]),
        Groups:new FormArray([])
      })

  }
  onURLinserted() {
    
}


  constructor(private contactsService:ContactsService) { }


}
