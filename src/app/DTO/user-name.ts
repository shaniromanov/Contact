import { MeansOfContact } from './means-of-contact';

export class UserName extends MeansOfContact{
    constructor(val:string) {
        super(val);
        this.typeOfMeanContact="Username"

    }
    validate(val:string) {
        throw new Error("Method not implemented.");
    }
}
