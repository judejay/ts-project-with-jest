import { Grid } from "../types/types";

export const spin = (direction: string, position: Grid) => {
  let [x, y, o] = position;
  if ((direction = "R"))
    switch (o) {
      case "N":
        o = "E";
        return [x, y, o];

        break;

      default:
        break;
    }
};
