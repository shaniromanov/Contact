import { MeansOfContact } from './means-of-contact';

export class PhoneNumber extends MeansOfContact{
    validate() {
        throw new Error("Method not implemented.");
    }
}
