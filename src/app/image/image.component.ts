import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  url: string;
  @Input() currentFormGroup: FormGroup
  constructor() { }

  ngOnInit(): void {
    const img = this.currentFormGroup.get('img').value
    if (img) {
      this.url = img
    }
  }
  onSelectFile(event) {

    if (event.target.files && event.target.files[0]) {
      let formData = new FormData();
      formData.append('file', event.target.files[0]);
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target.result as string;


        this.currentFormGroup.get('img').setValue(this.url)

      }
    }
  }
  onURLinserted() {

  }
}
