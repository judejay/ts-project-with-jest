import { resetPosition } from '../src/move/position';
import { move } from '../src/move/move';
import { advance } from '../src/move/advance';

describe("Rover should move according to command", () => {
    it("Rover should be at starting position facing North", () => {
        expect(resetPosition()).toStrictEqual([0, 0, "N"])
    });
    it("Rover should spin left from North", () => {
        expect(move("L", [0, 0, "N"])).toStrictEqual( [0, 0, "W"]);
    });
    it("Rover should spin left from South", () => {
        expect(move("L", [0, 0, "S"])).toStrictEqual( [0, 0, "E"]);
    });
    it("Rover should spin left from West", () => {
        expect(move("L", [0, 0, "W"])).toStrictEqual( [0, 0, "S"]);
    });
    it("Rover should spin left from East", () => {
        expect(move("L", [0, 0, "E"])).toStrictEqual( [0, 0, "N"]);
    });    
    it("Rover should spin right from North", () => {
        expect(move("R", [0, 0, "N"])).toStrictEqual( [0, 0, "E"]);
    }); 
    it("Rover should spin right from South", () => {
        expect(move("R", [0, 0, "S"])).toStrictEqual( [0, 0, "W"]);
    });
    it("Rover should spin right from West", () => {
        expect(move("R", [0, 0, "W"])).toStrictEqual( [0, 0, "N"]);
    });
    it("Rover should spin right from East", () => {
        expect(move("R", [0, 0, "E"])).toStrictEqual( [0, 0, "S"]);
    });
    it("Rover should advance one unit North from initial position", () => {
        expect(advance( [0, 0, "N"])).toStrictEqual([0, 1, "N"]);
    }); 
    it("Rover should advance one unit East from initial position", () => {
        expect(advance( [0, 0, "E"])).toStrictEqual([1, 0, "E"]);
    });
    it("Rover should advance one unit West from initial position", () => {
        expect(advance( [0, 0, "W"])).toStrictEqual([4, 0, "W"]);
    });
    });
