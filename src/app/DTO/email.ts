import { MeansOfContact } from './means-of-contact';

export class Email extends MeansOfContact{
   
    constructor(val:string) {
        super(val);
        this.typeOfMeanContact="Email"

    }
    validate(val:string) {
        throw new Error("Method not implemented.");
    }
}
