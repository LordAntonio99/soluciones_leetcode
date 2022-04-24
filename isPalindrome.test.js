const isPalindrome = require("./palindrome_number");

test("Ejemplo 1", () => {
  expect(isPalindrome(121)).toBe(true);
});

test("Ejemplo 2", () => {
  expect(isPalindrome(-121)).toBe(false);
});

test("Ejemplo 3", () => {
  expect(isPalindrome(10)).toBe(false);
});
