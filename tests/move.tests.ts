import { marsRover } from '../src/marsRover';

describe("rover should move according to command", () => {
    it("should spin left", () => {
        expect(marsRover("L")).toBe("spin");
    });   
    it("rover should spin right", () => {
        expect(marsRover("R")).toBe("spin");
    }); 
    it("rover should advance one unit", () => {
        expect(marsRover("M")).toBe("moved");
    }); 
    });
