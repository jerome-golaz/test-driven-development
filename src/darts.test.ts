import { calcPoints, possibleCheckout } from "./darts";

describe("caclulate points", () => {
  test.each([
    ["3 20 1 17 2 4", 85],
    ["2 15 1 18 3 19", 105],
    ["3 20 1 5", 65],
  ])("calcPoints(%f) == %f", (a, expected) => {
    expect(calcPoints(a)).toBe(expected);
  });
});

describe("possible checkout", () => {
    test.each([
      [477, "Double 12"],
      [480, "Not possible, odd score"],
      [441, "Not possible, 30 > 20"],
    ])("play(%f, %f) == %f", (a, expected) => {
      expect(possibleCheckout(a)).toBe(expected);
    });
  });