import { executeInstruction, followsCommands, isInstruction } from '../src/rover/rover';
import { Grid } from '../src/types/types';

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
});

describe("Rover executes commands", () => {
   it("Rover follows a command to move North from initial position", () => {
      expect(executeInstruction([0, 0, "N"],"M")).toStrictEqual([0, 1, "N"])
   });
   it("Rover follows a command to move West from initial position", () => {
      expect(executeInstruction([0, 0, "E"],"M")).toStrictEqual([1, 0, "E"])
   });   
});

describe("Rover executes a list of commands", () => {
   it("Rover follows a list of commands", () => {
      expect(followsCommands(["M", "M"], [0, 0, "E"])).toStrictEqual([2, 0, "E"])
   })
})



