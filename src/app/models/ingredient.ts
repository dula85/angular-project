export class Ingredient{
    public name:string;
    public amount:number;

    constructor(seed?:Partial<Ingredient>){
        Object.assign(this, seed);
    }
    
}