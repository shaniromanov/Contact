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
  subForm:FormGroup=null
  groupList:Array<String>
  url: string;
  imageToShow:any;
  myURL:any

 
  meansContact:{[meanType:string]:typeof  MeansOfContact}={"Email":Email,"Phone Number":PhoneNumber}
  get MeansContact(): FormArray {
    return this.form.get('MeansContact') as FormArray;
  }
  get Groups(): FormArray {
    return this.form.get('Groups') as FormArray;
  }
  onSubmit(){
    console.log("onsubit==>>",this.form.value)
  }
  AddToForm(){
      var f:FormArray = this.form.get('MeansContact') as FormArray

      f.push(new FormGroup({ typeOfContact:new FormControl(),
        value:new FormControl('',[Validators.required]),
       }))
      
      
  }

  AddGroupToForm(){
    var f:FormArray = this.form.get('Groups') as FormArray
      f.push(new FormControl())
  }

  keys() : Array<string> {
    return Object.keys(this.meansContact);
  }
  
  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result as string;
      }
    }
}
  ngOnInit(): void {
    this.groupList=this.contactsService.groups.map(v=>v.groupName)
      this.form = new FormGroup({
        FirstName:new FormControl(),
        LastName:new FormControl(),
        Adress:new FormControl(),
        MeansContact:new FormArray([]),
        Groups:new FormArray([])
      })

  }
  onURLinserted() {
    
}



createImageFromBlob(image: Blob) {
 let reader = new FileReader(); //you need file reader for read blob data to base64 image data.
 reader.addEventListener("load", () => {
    this.imageToShow = reader.result; // here is the result you got from reader
 }, false);

 if (image) {
    reader.readAsDataURL(image);
 }
}
//   public setParentControl(formGroup: FormGroup) {
//         this.subForm=formGroup
// }
  constructor(private contactsService:ContactsService) { }


}
