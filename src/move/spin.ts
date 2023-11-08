import { Grid } from "../types/types";

export const spin = (direction: string, position: Grid) => {
  let [x, y, o] = position;
  if ((direction = "R"))
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
        o = "N"
        break;
      default:
        break;
    }
  return [x, y, o];
};
