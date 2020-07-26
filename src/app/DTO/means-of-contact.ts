import { ValidatorFn } from '@angular/forms'

export abstract class MeansOfContact {

    value: string
    typeOfMeanContact: string
    abstract validate(): ValidatorFn

    constructor(value: string) {
        this.value = value
    }
    setValue(value: string) {
        this.value = value
    }

}
