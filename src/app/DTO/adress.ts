import { MeansOfContact } from './means-of-contact';
import { ValidatorFn } from '@angular/forms';

export class Adress extends MeansOfContact  {
    validate(): ValidatorFn {
        throw new Error("Method not implemented.");
    }
    constructor(val:string) {
        super(val);
        this.typeOfMeanContact="Address"

    }
 
    
}
