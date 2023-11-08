import { Grid } from "../types/types";
import { advance } from "./advance";

export const move = (direction: string, position: Grid): Grid => {
  let [x, y, o] = position;
  if (direction === "R"){
       switch (o) {
      case "N":
        o = "E";
        break;
      case "S":
        o = "W";
        break;
      case "E":
        o = "S";
        break;
      case "W":
        o = "N";
        break;
      default:
        break;
    }
  }
 
  else if (direction === "L") {
    switch (o) {
      case "N":
        
        o = "W";
        break;
      case "S":
        o = "E";
        break;
      case "E":
        o = "N";
        break;
      case "W":
        o = "S";
        break;
      default:
        break;
    }
  }
  else {
   [x, y, o] = advance(position)
  }
  return [x, y, o];
};
