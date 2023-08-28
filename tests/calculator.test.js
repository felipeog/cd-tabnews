const calculator = require("../models/calculator");

test("add(2, 2) should return 4", () => {
  const result = calculator.add(2, 2);

  expect(result).toBe(4);
});

test("add(5, 100) should return 105", () => {
  const result = calculator.add(5, 100);

  expect(result).toBe(105);
});

test("add('string', 100) should return 'Error'", () => {
  const result = calculator.add("string", 100);

  expect(result).toBe("Error");
});

test("add(100, 'string') should return 'Error'", () => {
  const result = calculator.add(100, "string");

  expect(result).toBe("Error");
});

test("add('string', 'string') should return 'Error'", () => {
  const result = calculator.add("string", "string");

  expect(result).toBe("Error");
});

test("add(0) should return 'Error'", () => {
  const result = calculator.add(0);

  expect(result).toBe("Error");
});

test("add() should return 'Error'", () => {
  const result = calculator.add();

  expect(result).toBe("Error");
});
