test("capitalize function", () => {
  // Test that the function capitalizes the first character of the string
  expect(capitalize("hello")).toBe("Hello");

  // Test that the function returns a string
  expect(typeof capitalize("hello")).toBe("string");
});
