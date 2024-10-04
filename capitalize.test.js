import capitalize from "./capitalize";

test("capitalize cat to Cat", () => {
  expect(capitalize("cat")).toMatch(/Cat/);
});
