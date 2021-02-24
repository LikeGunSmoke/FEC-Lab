const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Matchers allow you to test in various ways
// https://jestjs.io/docs/en/using-matchers

// Commmon Matchers
// expect/toBe
// expect is an expectation object to call a matcher on
// toBe is the matcher, jest tracks failing matches (tests)
// toBe uses Object.is to test exact equality
// if you want to check a value use toEqual
// toEqual checks every field recusively
// can use not to test opposites as well

// TODO: ...