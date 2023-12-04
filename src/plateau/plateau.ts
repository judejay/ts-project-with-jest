const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function ask(query: string) {
  return new Promise<string>((resolve) =>
    readline.question(query, (ans: string) => {
      readline.close();
      return resolve(ans);
    })
  );
}

export const inputToNumber = (input: string): number[] => {
  const numbers = input.split(" ").map(function (str) {
    return parseInt(str);
  });
  return numbers;
};

export async function plateauSize(): Promise<number[]> {
  const answer = await ask("Input grid X & Y \n");
  return inputToNumber(answer);
}
