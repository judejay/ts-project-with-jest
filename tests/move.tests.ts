import { position } from '../src/move/position';
import { spin } from '../src/move/spin';
import { advance } from '../src/move/advance';

describe("rover should move according to command", () => {
    it("should spin left", () => {
        expect(spin("L")).toBe("spin");
    });   
    it("rover should spin right", () => {
        expect(spin("R")).toBe("spin");
    }); 
    it("rover should advance one unit", () => {
        expect(advance("M")).toBe("moved");
    }); 
    });
