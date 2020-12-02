import { Shape } from "./shape";

  export class Rectangle extends Shape{

    constructor(meeta:number,rout:number,private _width: number,private _length: number){
        super(meeta,rout);
    }

    
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    
    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    getInfo():string{
       return super.getInfo()+`length=${this.length}, width=${this._width}`;
    }
}