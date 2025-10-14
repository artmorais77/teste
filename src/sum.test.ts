import { sum } from "./server"

test("sum of 3 + 7 equals 10", () => {
 const result = sum(7, 3)

  expect(result).toBe(10)
})