import reverseString from "./reverseString";

test("reverse of string dog is god", () => {
  expect(reverseString("dog")).toMatch(/god/);
});
