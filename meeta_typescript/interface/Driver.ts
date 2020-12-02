
import {Coach} from "./coach"
import {GolfCoach} from "./golfcoach"
import {CricketCoach} from "./cricketcoach";

let thecouches:Coach[]=[];



let golfcoach= new GolfCoach();
let cricketcoach=new CricketCoach();

thecouches.push(golfcoach);
thecouches.push(cricketcoach);

for (let couchDetails of thecouches){
    console.log(couchDetails.getDailyWorkout());
}
