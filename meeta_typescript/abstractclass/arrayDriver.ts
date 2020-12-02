import  {Shape} from "./shape";
import {Circle} from "./circle";
import {Rectangle} from "./Rectangle";

//let myShape= new Shape(50,60);
//console.log(myShape.getInfo());

let myCircle= new Circle(30,40,80);

let myRectangle=new Rectangle(1,2,3,4);

//console.log(myCircle.getInfo());

//console.log(myRectangle.getInfo());


let theShapes : Shape[]= [];
//theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempshape of theShapes){
    console.log(tempshape.getInfo());
    console.log(tempshape.calculateArea());
}

