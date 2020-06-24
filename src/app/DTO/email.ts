import { MeansOfContact } from './means-of-contact';

export class Email extends MeansOfContact{
    validate() {
        throw new Error("Method not implemented.");
    }
}
