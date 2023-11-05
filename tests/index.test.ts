import { convertToRoman } from '../src/roman';

describe("test convertToRoman function", () => {
    it("should return MMM for convertToRoman(3000)", () => {
        expect(convertToRoman(3000)).toBe("MMM");
    });   
    it("should return XCIII for convertToRoman(93)", () => {
        expect(convertToRoman(93)).toBe("XCIII");
    }); 
    it("should return IV for convertToRoman(4)", () => {
        expect(convertToRoman(4)).toBe("IV");
    }); 
    });
