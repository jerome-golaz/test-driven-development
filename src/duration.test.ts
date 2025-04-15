import { formatDuration } from "./duration";

describe("format duration", () => {
  test.each([
    [33, "33s"],
    [123, "2m3s"],
    [500, "8m20s"],
    [3600, "1h"],
    [3999, "1h6m39s"],
    [0, "0s"],
  ])("formatDuration(%f) == %f", (a, expected) => {
    expect(formatDuration(a)).toBe(expected);
  });

  test("formatDuration(%f) == Error", () => {
      expect(() => formatDuration(-1)).toThrow("negative number");
    });
});