"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var circle_1 = require("./circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new shape_1.Shape(50, 60);
//console.log(myShape.getInfo());
var myCircle = new circle_1.Circle(30, 40, 80);
var myRectangle = new Rectangle_1.Rectangle(1, 2, 3, 4);
//console.log(myCircle.getInfo());
//console.log(myRectangle.getInfo());
var theShapes = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempshape = theShapes_1[_i];
    console.log(tempshape.getInfo());
}
