import { MeansOfContact } from './means-of-contact';

export class PhoneNumber extends MeansOfContact{
    constructor(val:string) {
        super(val);
        this.typeOfMeanContact="Phone"

    }
    validate(val:string) {
        throw new Error("Method not implemented.");
    }
}
