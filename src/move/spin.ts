import { Grid } from "../types/types";

export const spin = (direction: string, position: Grid) => {
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
 
  else {
    switch (o) {
      case "N":
        console.log("here" , o)
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
  return [x, y, o];
};
