import { isInstruction } from '../src/rover/rover';

describe("check to see if input is an instruction Rover understand", () =>{
    it(" Rover takes Left command", () => {
       expect(isInstruction("L")).toBeTruthy() 
    });
    it(" Rover takes Right command", () => {
        expect(isInstruction("R")).toBeTruthy() 
     });
     it(" Rover takes Move command", () => {
        expect(isInstruction("M")).toBeTruthy() 
     });
     it(" Rover doesn't understand command", () => {
        expect(isInstruction("X")).toBeFalsy() 
     });
     it(" Rover doesn't understand number", () => {
        expect(isInstruction("0")).toBeFalsy() 
     });
})