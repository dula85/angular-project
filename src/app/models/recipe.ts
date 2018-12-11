export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(seed?: Partial<Recipe>){
        Object.assign(this, seed);
    }
}