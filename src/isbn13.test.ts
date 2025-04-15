import { isValid } from "./isbn13";

describe("isbn13", () => {
  test.each([
    ["978-3-16-148410-0", true],
    ["9783161484100", true],
    ["978-3-16-148410-X", false],
    ["978-3-16-148410", false],
    ["978316148410", false],
    ["97831614841000", false],
    ["9783161484101", false],
    ["978-3-8668-0192", false],
  ])("play(%f, %f) == %f", (a, expected) => {
    expect(isValid(a)).toBe(expected);
  });
});