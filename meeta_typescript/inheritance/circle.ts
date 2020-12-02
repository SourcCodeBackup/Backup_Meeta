import { Shape } from "./shape";

export class Circle extends Shape{


    constructor( meeta: number,rout:number,private _radius:number){
        super(meeta,rout);
    }

    

    public get radius():number{
        return this._radius;
    }

    public set radius(meeta:number){
        this._radius=meeta;
    }

    getInfo():string {
        return super.getInfo()+ `, radius=${this._radius}`;
    }

}