import { MeansOfContact } from './means-of-contact';
import { Validators, ValidatorFn } from '@angular/forms';

export class PhoneNumber extends MeansOfContact{
    validate(): ValidatorFn {
        return Validators.pattern('[0-9]{9}|[0-9]{2}-[0-9]{7}');
    }
    constructor(val:string) {
        super(val);
        this.typeOfMeanContact="Phone"

    }
  
}
