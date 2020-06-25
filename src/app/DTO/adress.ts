import { MeansOfContact } from './means-of-contact';

export class Adress extends MeansOfContact  {
    constructor(val:string) {
        super(val);
        this.typeOfMeanContact="Adress"

    }
    validate(val:string) {
        throw new Error("Method not implemented.");
    }
    
}
