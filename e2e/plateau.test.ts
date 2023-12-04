import { plateauSize } from "../src/plateau/plateau";
describe("Plateau should be 5 x 5 grid", () => {
  it("should be size given", async () => {
    const result = await plateauSize();
    expect(result).toStrictEqual([5, 5]);
  }, 100000);
});
