import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { MeansOfContact } from '../DTO/means-of-contact';
import { Email } from '../DTO/email';
import { PhoneNumber } from '../DTO/phone-number';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  form:FormGroup
  subForm:FormGroup=null
 
  meansContact:{[meanType:string]:typeof  MeansOfContact}={"Email":Email,"Phone Number":PhoneNumber}
  get MeansContact(): FormArray {
    return this.form.get('MeansContact') as FormArray;
  }
  onSubmit(empForm: any, event: Event){
    event.preventDefault();
    console.log("onsubit==>>",this.form.value)
  }
  AddToForm(){
      var f:FormArray = this.form.get('MeansContact') as FormArray

      f.push(new FormGroup({ typeOfContact:new FormControl(),
        value:new FormControl('',[Validators.required]),
       }))
      
      
  }
  keys() : Array<string> {
    return Object.keys(this.meansContact);
  }
  ngOnInit(): void {
      this.form = new FormGroup({
        MeansContact:new FormArray([])
      })

  }
//   public setParentControl(formGroup: FormGroup) {
//         this.subForm=formGroup
// }
  constructor() { }


}
