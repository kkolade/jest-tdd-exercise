const stringLength = require("../js/app");

test("Error if input is not a string", () => {
  expect(() => stringLength(123)).toThrow("Input must be a string");
});

test("Error if input string is empty", () => {
  expect(() => stringLength("")).toThrow("Input string must not be empty");
});

test("Error if input string is greater than 10 characters", () => {
  expect(() => stringLength("I am Kola the greatest")).toThrow(
    "Input string must not be greater than 10 characters"
  );
});

test("Correct string length", () => {
  expect(stringLength("I am Kola")).toBe(9);
});
