import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../Services/contacts.service';
import { Contact } from '../DTO/contact';
import { ActivatedRoute, Router } from '@angular/router';
import { MeansOfContact } from '../DTO/means-of-contact';
import { Email } from '../DTO/email';
import { PhoneNumber } from '../DTO/phone-number';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../Services/header.service';
import { GroupService } from '../Services/group.service';
import { AuthonticationService } from '../Services/authontication.service';
import { MobileNumber } from '../DTO/mobile-number';
import { Website } from '../DTO/website';
import { UpdateContactResponseOk } from '../DTO/Responses/update-contact-response-ok';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {

  constructor(private contactsService: ContactsService,private router :Router, private route: ActivatedRoute, public headerService: HeaderService, private groupService: GroupService, private authonticationService: AuthonticationService) { }
  currentContact: Contact
  form: FormGroup
  groupList: Array<String>
  msg:string

  meansContact: { [meanType: string]: MeansOfContact } =
  { "Email": new Email(null), "Phone Number": new PhoneNumber(null), "Mobile Number": new MobileNumber(null) }

  get meansOfContact(): FormArray {
    return this.form.get('meansOfContact') as FormArray;
  }
  get groups(): FormArray {
    return this.form.get('groups') as FormArray;
  }

  ngOnInit(): void {
    this.headerService.show();
    this.currentContact = this.getContact(this.route.snapshot.paramMap.get('id'))
    this.groupList = this.groupService.groups.map(v => v.groupName)
    this.form = new FormGroup({
      contact_id:new FormControl(),
      firstName: new FormControl(this.currentContact.firstName, [Validators.required]),
      lastName: new FormControl(this.currentContact.lastName, [Validators.required]),
      img: new FormControl(this.currentContact.img),
      address:new FormGroup({ typeOfMeanContact:new FormControl(this.currentContact.address.typeOfMeanContact),
      value:new FormControl(this.currentContact.address.value)}),
      website:new FormGroup({ typeOfMeanContact:new FormControl(this.currentContact.website.typeOfMeanContact),
      value:new FormControl(this.currentContact.website.value,new Website("").validate())}),
      username:new FormGroup({ typeOfMeanContact:new FormControl(this.currentContact.username.typeOfMeanContact),
      value:new FormControl(this.currentContact.username.value)}),
      meansOfContact: new FormArray([]),
      groups: new FormArray([])
    })

    this.currentContact.meansOfContact.map(val=> {
console.log(val.typeOfMeanContact)
        this.meansOfContact.push(new FormGroup({ typeOfMeanContact: new FormControl(val.typeOfMeanContact), value: new FormControl(val.value,this.meansContact[val.typeOfMeanContact].validate()) }))
  })

  this.currentContact.groups.map(val => this.groups.push(new FormControl(val)))
}
  getContact(id: string): Contact {
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
    this.form.get('contact_id').setValue(this.currentContact.contact_id)
    let updatedContact = { ...this.currentContact, ...this.form.value };
    console.log("onsubmit==>>", this.form.value, 'updated=>', updatedContact)

    this.contactsService.updateContact({
      "UserName": this.authonticationService.getUserName(),
      "contact": updatedContact
    }).subscribe(response => {
      if(response instanceof UpdateContactResponseOk){
        Object.assign(this.currentContact, this.form.value)
        this.currentContact.groups.forEach(grp =>
          this.authonticationService.getCurrentUser().groups.find(group => group.groupName == grp).contacts[this.form.get("contact_id").value] = this.form.value)
        this.router.navigate(['/contacts/']);
      }
      this.msg=response.Message()
    }, err => { })
  }

}
