import { Grid, RoverInstruction } from "../types/types"





export const resetPosition = (): Grid => {
    return [0, 0]
}

function getInstruction (): RoverInstruction {
    //readfrom file
    return 'L';
}

function executeInstruction( instruction: RoverInstruction) : Grid {
    return [0,0] //orientation
}


function isInstruction(input: string)
: input is RoverInstruction
{
return ['L', 'R', 'M'].includes(input);
}


const someInstruction = getInstruction(); // returns a string

if(isInstruction(someInstruction))
executeInstruction(someInstruction);
// 🥳 no error!
else {

}