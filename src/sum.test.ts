import { sum } from "./server";

describe("sum", () => {
  let sumResult: number

  beforeAll(() => {
    sumResult = 10
  })
  it("sum of 3 + 7 equals 10", () => {
    const result = sum(7, 3);

    expect(result).toBe(sumResult);
  });

  test("sum of 2 + 4 equals 6", () => {
    const result = sum(2, 4);

    expect(result).toBe(6);
  });
});
