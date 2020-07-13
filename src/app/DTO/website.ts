import { MeansOfContact } from './means-of-contact';
import { ValidatorFn, Validators } from '@angular/forms';

export class Website extends MeansOfContact{
    validate(): ValidatorFn {
        return Validators.pattern('(https?://)?(www.)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
    }
    constructor(val:string) {
        super(val);
        this.typeOfMeanContact="Website"

    }

}
