import { MeansOfContact } from './means-of-contact';

export class MobileNumber extends MeansOfContact{
    constructor(val:string) {
        super(val);
        this.typeOfMeanContact="Mobile Phone"

    }
    validate(val:string) {
        throw new Error("Method not implemented.");
    }
}
