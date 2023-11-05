import { bowlingGame } from '../src/bowlingGame';

describe("test bowlingGame function", () => {
    it("should return correct score for all strikes(300)", () => {
        expect(bowlingGame("X, X, X, X, X, X, X, X,,X, X, X, X")).toBe(300);
    });   
    it("should return correct score for all spares(90)", () => {
        expect(bowlingGame("9, 9, 9, 9, 9, 9, 9, 9, 9, 9")).toBe(90);
    }); 
    it("should return correct score for 21 rolls of 5", () => {
        expect(bowlingGame("5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5 ")).toBe(150);
    }); 
    });
