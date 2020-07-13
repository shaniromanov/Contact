import { MeansOfContact } from './means-of-contact';

export class Adress extends MeansOfContact  {
    validate(): import("@angular/forms").ValidatorFn {
        throw new Error("Method not implemented.");
    }
    constructor(val:string) {
        super(val);
        this.typeOfMeanContact="Adress"

    }
 
    
}
