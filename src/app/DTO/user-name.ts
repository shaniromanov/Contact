import { MeansOfContact } from './means-of-contact';

export class UserName extends MeansOfContact{
    validate(): import("@angular/forms").ValidatorFn {
        throw new Error("Method not implemented.");
    }
    constructor(val:string) {
        super(val);
        this.typeOfMeanContact="Username"

    }
  
}
