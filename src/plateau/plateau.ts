
export function Ask(query: any) {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise<number[]>((resolve) =>
    readline.question(query, (ans: string) => {
      readline.close();
      resolve(inputToNumber(ans));
    })
  );
}

const inputToNumber = (input: string): number[] => {
  const arr = input.split(" ");
  var numbers = arr.map(function (str) {
    return parseInt(str);
  });
  return numbers;
};

export async function plateau() {
  var name = await Ask("Input grid X & Y \n");
}
