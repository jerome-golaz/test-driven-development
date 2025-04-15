import { play } from "./rock-paper-scissors";

describe("rock-paper-scissors", () => {
  test.each([
    [" rock", "rock", 0],
    ["paper  ", " scissors ", 2],
    [" rock", "   scissors", 1],
  ])("play(%f, %f) == %f", (a, b, expected) => {
    expect(play(a, b)).toBe(expected);
  });

  test("play(%f, %f) == %f", () => {
      expect(() => play("rock", "scissrs")).toThrow("invalid input");
    });
});