import { plateauSize } from "../src/plateau/plateau";
import * as readline from "node:readline";

describe("Plateau should be 5 x 5 grid", () => {
  it("should be size given", async () => {
    const result = jest
      .spyOn(readline, "createInterface")
      .mockImplementationOnce(() => {
        return [5, 5] as any;
      });

    expect(result).toStrictEqual([5, 5]);
  });
});
