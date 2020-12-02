import { Coach } from "./coach";

export class GolfCoach implements Coach{
    getDailyWorkout(): string {
        return "hit 100 bulbs at gulf range.";
    }

}