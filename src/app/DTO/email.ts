import { MeansOfContact } from './means-of-contact';
import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

export class Email extends MeansOfContact{
    validate(): ValidatorFn {
            return Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")
    }
   
    constructor(val:string) {
        super(val);
        this.typeOfMeanContact="Email"

    }

}
