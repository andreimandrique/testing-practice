import calculator from "./calculator";

test("adds 2 + 2 to equal 4", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("subtract 10 - 4 to equal 6", () => {
  expect(calculator.sub(10, 4)).toBe(6);
});

test("multiply 8  * 8 to equal 64", () => {
  expect(calculator.mul(8, 8)).toBe(64);
});

test("divide 15 / 9 to equal 1.67", () => {
  expect(calculator.div(15, 5)).toBe(3);
});
