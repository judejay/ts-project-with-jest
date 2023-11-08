import { Grid } from "../types/types";

export const advance = (position: Grid): Grid => {
  let [x, y, o] = position;
  switch (o) {
    case "N":
      return [x, (y + 5 + 1) % 5, o];
      break;
    case "E":
      return [(x + 5 + 1) % 5, y, o];
      break;
    case "W":
      return [(x + 5 - 1) % 5, y, o];
    case "S":
        return [x, ((y + 5 - 1) % 5), o];  
    default:
      break;
  }
  return [x, y, o];
};
