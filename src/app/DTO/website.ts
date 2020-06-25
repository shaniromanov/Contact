import { MeansOfContact } from './means-of-contact';

export class Website extends MeansOfContact{
    constructor(val:string) {
        super(val);
        this.typeOfMeanContact="Website"

    }
    validate(val:string) {
        throw new Error("Method not implemented.");
    }
}
