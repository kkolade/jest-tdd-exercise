const stringLength = require("../js/app");
const string = "I am Kola";

test("Return length of supplied string", () => {
  expect(stringLength(string)).toEqual(9);
});
