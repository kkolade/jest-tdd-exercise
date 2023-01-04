const reverseString = require("../js/task-2");
const result = "hello";

test("Return reverse of inputted string", () => {
  expect(reverseString(result)).toBe("olleh");
});
