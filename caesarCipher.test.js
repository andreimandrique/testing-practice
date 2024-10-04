import caesarCipher from "./caesarCipher";

test("caesar cipher the string", () => {
  expect(caesarCipher("Hello, World!", 3)).toMatch(/Khoor, Zruog!/);
});
