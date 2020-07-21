import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MeansOfContact } from '../DTO/means-of-contact';
import { Email } from '../DTO/email';
import { PhoneNumber } from '../DTO/phone-number';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MobileNumber } from '../DTO/mobile-number';
import { Website } from '../DTO/website';

@Component({
  selector: 'app-add-mean-of-contact',
  templateUrl: './add-mean-of-contact.component.html',
  styleUrls: ['./add-mean-of-contact.component.css']
})
export class AddMeanOfContactComponent implements OnInit {
  meansContact: { [meanType: string]: MeansOfContact } =
    { "Email": new Email(null), "Phone Number": new PhoneNumber(null), "Mobile Number": new MobileNumber(null) }


  @Input() currentFormGroup: FormGroup;
  @Input() currentIndex: number;

  constructor() {

  }
  keys(): Array<string> {
    return Object.keys(this.meansContact);
  }
  ngOnInit(): void {

  }
  setValidators(event) {
    this.currentFormGroup.get('value').setValidators(this.meansContact[event.target.value].validate())

  }
  setValue(event) {
    const typ = this.currentFormGroup.get('typeOfMeanContact').value
    console.log('fffff',typ )
    this.meansContact[typ].setValue(event.target.value)
    this.currentFormGroup.setValue(this.meansContact[typ])
    this.currentFormGroup.get('typeOfMeanContact').setValue(typ)
  }




}
