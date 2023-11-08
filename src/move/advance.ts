import { Grid } from "../types/types";

export const advance = (position: Grid): Grid => {
    let [x, y, o] = position;
    switch (o) {
        case "N":
            return [x, y + 1, o ]            
            break;
            case "E":
                return [x + 1, y, o ]            
                break;
            case "W":
                return[((x + 5 - 1) % 5), y, o]    
        default:
            break;
    }
    return [x, y, o]
}