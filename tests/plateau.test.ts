import { plateauSize, inputToNumber } from "../src/plateau/plateau";
import * as readline from "node:readline";

describe("Plateau should be a number", () => {
  const input = "5 5";
  const oneNumber = "5";
  it("pass string to covert to array of numbers", () => {
    expect(inputToNumber(input)).toStrictEqual([5, 5]);
  });
  it("pass only one number to throw error", () => {
    expect(inputToNumber(oneNumber)).toThrowErrorMatchingSnapshot();
  });
});
