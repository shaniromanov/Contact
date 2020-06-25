export abstract class MeansOfContact {
    
   value:string
   typeOfMeanContact:string
   abstract validate(val:string)
    /**
     *
     */
    constructor(value:string ) {
        this.value=value
    }
}
