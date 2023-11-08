import { resetPosition } from '../src/move/position';
import { spin } from '../src/move/spin';
import { advance } from '../src/move/advance';

describe("rover should move according to command", () => {
    it("should be at starting position facing North", () => {
        expect(resetPosition()).toStrictEqual([0, 0, "N"])
    });
    it("should spin left from North", () => {
        expect(spin("L", [0, 0, "N"])).toStrictEqual( [0, 0, "W"]);
    });
    it("should spin left from South", () => {
        expect(spin("L", [0, 0, "S"])).toStrictEqual( [0, 0, "E"]);
    });
    it("should spin left from West", () => {
        expect(spin("L", [0, 0, "W"])).toStrictEqual( [0, 0, "S"]);
    });
    it("should spin left from East", () => {
        expect(spin("L", [0, 0, "E"])).toStrictEqual( [0, 0, "N"]);
    });    
    it("rover should spin right from North", () => {
        expect(spin("R", [0, 0, "N"])).toStrictEqual( [0, 0, "E"]);
    }); 
    it("rover should spin right from South", () => {
        expect(spin("R", [0, 0, "S"])).toStrictEqual( [0, 0, "W"]);
    });
    it("rover should spin right from West", () => {
        expect(spin("R", [0, 0, "W"])).toStrictEqual( [0, 0, "N"]);
    });
    it("rover should spin right from East", () => {
        expect(spin("R", [0, 0, "E"])).toStrictEqual( [0, 0, "S"]);
    });
    it("rover should advance one unit", () => {
        expect(advance("M")).toBe("moved");
    }); 
    });
