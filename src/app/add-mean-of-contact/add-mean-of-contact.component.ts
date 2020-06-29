import { Component, OnInit,  Input, EventEmitter, Output } from '@angular/core';
import { MeansOfContact } from '../DTO/means-of-contact';
import { Email } from '../DTO/email';
import { PhoneNumber } from '../DTO/phone-number';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MobileNumber } from '../DTO/mobile-number';

@Component({
  selector: 'app-add-mean-of-contact',
  templateUrl: './add-mean-of-contact.component.html',
  styleUrls: ['./add-mean-of-contact.component.css']
})
export class AddMeanOfContactComponent implements OnInit {
  meansContact:{[meanType:string]:typeof  MeansOfContact}={"Email":Email,"Phone Number":PhoneNumber,"Mobile Number":MobileNumber}
  

   @Input() currentFormGroup: FormGroup;
   @Input() currentIndex:number;

  constructor() { 
  
  }
  keys() : Array<string> {
    return Object.keys(this.meansContact);
  }
  ngOnInit(): void {
    console.log("means form===>>>",this.currentFormGroup.value)
    
  }

}
