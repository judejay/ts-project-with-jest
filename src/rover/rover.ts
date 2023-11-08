import { move } from "../move/move";
import { Grid, RoverInstruction } from "../types/types";



export function isInstruction(input: string)
: input is RoverInstruction
{
return ['L', 'R', 'M'].includes(input);
}

 export function executeInstruction(position: Grid, instruction: RoverInstruction) : Grid {
    if(isInstruction(instruction)){
         var moved = move(instruction,position) ;
    } 
     return moved!;
  };

  export function followsCommands(list: RoverInstruction[], position: Grid ): Grid {
      return   list.reduce(
            (accumulator, currentValue) => executeInstruction(accumulator, currentValue),   
            position)   
    

 }







