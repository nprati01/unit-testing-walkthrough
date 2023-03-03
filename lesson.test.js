//import our functions from main.js
const modules = require('./main')
console.log(modules)
const isEven = modules.isEven
const divide = modules.divide
const isPositive = modules.isPositive

//This is where all of our test cases belong
//This is the test case is even
test("It should return true when called with an even number", () => {
    expect(isEven(4)).toBe(true);
});

//Test case for DIVIDE
//if b is 0, the return value would be Infinity.Infitny is still considered a number. Thus passing the test
test("it should return a number when called", () => {
    expect(typeof divide(4, 0)).toBe("number")
})


test("It should return true when passed a positive number", () => {
    //Base Case: where a number is true
    expect(isPositive(3)).toBe(true)
});
// Test Suites is a collection of Tests

test("It should return false when passed a negative number", () => {
    expect(isPositive(-3)).toBe(false)
});
test("It should return true when passed a 0 input", () => {
    expect(isPositive(0)).toBe(false);
  });
