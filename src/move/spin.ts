import { Grid } from "../types/types";

export const spin = (direction: string, position: Grid) => {
    let [x, y, o ] = position
switch (direction) {
    case "R":
        if(o === "N") {
           o = "E"
            return [x, y, o]
        }
        
        break;

    default:
        break;
}
}