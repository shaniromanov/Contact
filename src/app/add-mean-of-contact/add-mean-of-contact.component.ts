import { Component, OnInit,  Input, EventEmitter, Output } from '@angular/core';
import { MeansOfContact } from '../DTO/means-of-contact';
import { Email } from '../DTO/email';
import { PhoneNumber } from '../DTO/phone-number';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-mean-of-contact',
  templateUrl: './add-mean-of-contact.component.html',
  styleUrls: ['./add-mean-of-contact.component.css']
})
export class AddMeanOfContactComponent implements OnInit {
  meansContact:{[meanType:string]:typeof  MeansOfContact}={"Email":Email,"Phone Number":PhoneNumber}
  
  //  @Input() parentForm: FormGroup;
   @Input() currentFormGroup: FormGroup;
   @Input() currentIndex:number;
  // meanContactGroup: FormGroup;
  //  @Output() onFormGroupChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>()
  constructor() { 
  
  }
  keys() : Array<string> {
    return Object.keys(this.meansContact);
  }
  ngOnInit(): void {
    console.log(this.currentFormGroup)
    // this.currentFormGroup = new FormGroup(
    //   {
    //     typeOfContact:new FormControl(),
    //     value:new FormControl('',[Validators.required]),
       
    //   }
      
    // )
    // var f:FormArray = this.parentForm.get('MeansContact') as FormArray
    // f.push(this.meanContactGroup)
    // this.onFormGroupChange.emit(this.meanContactGroup);

  }
  onSubmit(){
    console.log("sub submit")
  }

}
