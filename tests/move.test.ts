import { resetPosition } from '../src/move/position';
import { spin } from '../src/move/spin';
import { advance } from '../src/move/advance';

describe("rover should move according to command", () => {
    it("should be at starting position facing North", () => {
        expect(resetPosition()).toStrictEqual([0, 0, "N"])
    });
    it("should spin left", () => {
        expect(spin("L", [0, 0, "N"])).toBe("W");
    });   
    it("rover should spin right", () => {
        expect(spin("R", [0, 0, "N"])).toStrictEqual( [0, 0, "E"]);
    }); 
    it("rover should advance one unit", () => {
        expect(advance("M")).toBe("moved");
    }); 
    });
