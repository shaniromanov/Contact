export abstract class MeansOfContact {
    
   value:string
   abstract validate()
    /**
     *
     */
    constructor(value:string ) {
        this.value=value
        
    }
}
