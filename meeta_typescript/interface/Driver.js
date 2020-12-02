"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var golfcoach_1 = require("./golfcoach");
var cricketcoach_1 = require("./cricketcoach");
var thecouches = [];
var golfcoach = new golfcoach_1.GolfCoach();
var cricketcoach = new cricketcoach_1.CricketCoach();
thecouches.push(golfcoach);
thecouches.push(cricketcoach);
for (var _i = 0, thecouches_1 = thecouches; _i < thecouches_1.length; _i++) {
    var couchDetails = thecouches_1[_i];
    console.log(couchDetails.getDailyWorkout());
}
