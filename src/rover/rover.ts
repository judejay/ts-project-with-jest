import { Grid, RoverInstruction } from "../types/types";



export function isInstruction(input: string)
: input is RoverInstruction
{
return ['L', 'R', 'M'].includes(input);
}

// export function executeInstruction( instruction: RoverInstruction) : Grid {
//      return [ 0, 0,"N"] 
//  }
// const someInstruction = getInstruction()

// export function getInstruction (): RoverInstruction {
//      if(isInstruction(someInstruction))
//  executeInstruction(someInstruction);
//  // 🥳 no error!
//  else {

//  }
//     return 'L';
// }




