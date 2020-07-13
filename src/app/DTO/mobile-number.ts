import { MeansOfContact } from './means-of-contact';
import { ValidatorFn, Validators } from '@angular/forms';

export class MobileNumber extends MeansOfContact{
    validate(): ValidatorFn {
        return Validators.pattern('[0-9]{10}|[0-9]{3}-[0-9]{7}');
    }
    constructor(val:string) {
        super(val);
        this.typeOfMeanContact="Mobile Phone"

    }
 
}
