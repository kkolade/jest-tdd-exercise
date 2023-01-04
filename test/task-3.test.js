const Calculator = require("../js/task-3");

describe("Calculator", () => {
  describe("add()", () => {
    test("adds two +ve numbers", () => {
      expect(Calculator.add(2, 3)).toBe(5);
    });

    test("adds a +ve and a -ve number", () => {
      expect(Calculator.add(2, -3)).toBe(-1);
    });

    test("adds two -ve numbers", () => {
      expect(Calculator.add(-2, -3)).toBe(-5);
    });
  });

  describe("subtract()", () => {
    test("subtracts two +ve numbers", () => {
      expect(Calculator.subtract(5, 3)).toBe(2);
    });

    test("subtracts a +ve and a -ve number", () => {
      expect(Calculator.subtract(5, -3)).toBe(8);
    });

    test("subtracts two -ve numbers", () => {
      expect(Calculator.subtract(-5, -3)).toBe(-2);
    });
  });

  describe("divide()", () => {
    test("divides two +ve numbers", () => {
      expect(Calculator.divide(6, 3)).toBe(2);
    });

    test("divides a +ve and a -ve number", () => {
      expect(Calculator.divide(6, -3)).toBe(-2);
    });

    test("divides two -ve numbers", () => {
      expect(Calculator.divide(-6, -3)).toBe(2);
    });
  });

  describe("multiply()", () => {
    test("multiplies two +ve numbers", () => {
      expect(Calculator.multiply(2, 3)).toBe(6);
    });

    test("multiplies a +ve and a -ve number", () => {
      expect(Calculator.multiply(2, -3)).toBe(-6);
    });

    test("multiplies two -ve numbers", () => {
      expect(Calculator.multiply(-2, -3)).toBe(6);
    });
  });
});
