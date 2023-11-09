import * as readline from 'readline';

const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


export const gridPrompt = rl.question('Input grid X & Y \n', (answer: string): number[] => {
    const digit = inputToNumber(answer)
    rl.close();
    return digit;
});
;
const inputToNumber = (input: string): number[] => {
      const arr=  input.split(" ")
      var numbers = arr.map(function(str) {
        return parseInt(str); });
      console.log(numbers)
    return numbers;
}