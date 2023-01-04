// Task 1
function stringLength(string) {
  if (typeof string !== "string") {
    throw new Error("Input must be a string");
  }
  if (string.length === 0) {
    throw new Error("Input string must not be empty");
  }
  if (string.length > 10) {
    throw new Error("Input string must not be greater than 10 characters");
  }
  return string.length;
}

module.exports = stringLength;
