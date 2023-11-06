import { bowlingGame } from '../src/bowlingGame';

describe("test bowlingGame function", () => {

     it("should return correct score for all strikes(300)", () => {
        expect(bowlingGame([[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0],[10, 0]])).toBe(300);
    });   
    it("should return correct score for all rolls of and a miss(90)", () => {
        expect(bowlingGame([[9, 0],[9, 0],[9, 0],[9, 0],[9, 0],[9, 0], [9, 0],[9, 0],[9, 0],[9, 0]])).toBe(190);
    }); 
    it("should return correct score all spares with a final 5(150)", () => {
        expect(bowlingGame([[5, 5], [5, 5], [5, 5], [5, 5], [5, 5], [5, 5], [5, 5],[ 5, 5], [5, 5], [5, 5],[5] ])).toBe(150);
    }); 
    });
