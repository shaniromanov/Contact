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
import { GroupService } from '../Services/group.service';
import { UserName } from '../DTO/user-name';
import { AuthonticationService } from '../Services/authontication.service';
import { MobileNumber } from '../DTO/mobile-number';
import { Website } from '../DTO/website';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {

  constructor(private contactsService: ContactsService, private route: ActivatedRoute, public headerService: HeaderService, private groupService: GroupService, private authonticationService: AuthonticationService) { }
  currentContact: Contact
  form: FormGroup
  groupList: Array<String>


  meansContact: { [meanType: string]: typeof MeansOfContact } = { "Email": Email, "Phone Number": PhoneNumber, "Mobile Phone": MobileNumber }

  get meansOfContact(): FormArray {
    return this.form.get('meansOfContact') as FormArray;
  }
  get groups(): FormArray {
    return this.form.get('groups') as FormArray;
  }

  ngOnInit(): void {
    this.headerService.show();
    this.currentContact = this.getUser(this.route.snapshot.paramMap.get('id'))
    this.groupList = this.groupService.groups.map(v => v.groupName)
    this.form = new FormGroup({
      firstName: new FormControl(this.currentContact.firstName, [Validators.required]),
      lastName: new FormControl(this.currentContact.lastName, [Validators.required]),
      img: new FormControl(this.currentContact.img),
      address:new FormGroup({ typeOfMeanContact:new FormControl("Address"),
      value:new FormControl()}),
      website:new FormGroup({ typeOfMeanContact:new FormControl("Website"),
      value:new FormControl('',new Website("").validate())}),
      username:new FormGroup({ typeOfMeanContact:new FormControl("UserName"),
      value:new FormControl()}),
      meansOfContact: new FormArray([]),
      groups: new FormArray([])
    })

    this.currentContact.meansOfContact.map(val => {
      if(this.meansContact[val.typeOfMeanContact]){
        this.meansOfContact.push(new FormGroup({ typeOfMeanContact: new FormControl(val.typeOfMeanContact), value: new FormControl(val.value) }))
      }
      else{
        console.log(val.typeOfMeanContact.toLowerCase())
        this.form.get(val.typeOfMeanContact.toLowerCase()).get("typeOfMeanContact").setValue(val.typeOfMeanContact)
        this.form.get(val.typeOfMeanContact.toLowerCase()).get("value").setValue(val.value)
      }

  })
  this.currentContact.groups.map(val => this.groups.push(new FormControl(val)))
}
  getUser(id: string): Contact {
    return this.contactsService.findContact(id)
  }
  keys(): Array<string> {
    return Object.keys(this.meansContact);
  }
  AddToForm() {
    var f: FormArray = this.form.get('meansOfContact') as FormArray

    f.push(new FormGroup({
      typeOfMeanContact: new FormControl(),
      value: new FormControl('', [Validators.required])
    }))
  }
  deleteMeanContact(index: string) {

    this.meansOfContact.removeAt(this.meansOfContact.value[index])
  }
  deleteGroup(index: string) {
    this.groups.removeAt(this.groups.value[index])
  }

  AddGroupToForm() {
    var f: FormArray = this.form.get('groups') as FormArray
    f.push(new FormControl())
  }
  onSubmit() {
    let updatedContact = { ...this.currentContact, ...this.form.value };
    console.log("onsubmit==>>", this.form.value, 'updated=>', updatedContact)

    this.contactsService.updateContact({
      "UserName": this.authonticationService.getCurrentUser().UserName,
      "contact": updatedContact
    }).subscribe(response => {
      if (response) {
        alert("contact updated")
      }
    }, err => { })
  }

}
