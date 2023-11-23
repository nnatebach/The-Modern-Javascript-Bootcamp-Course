let foods = {
  chicken: 124324,
  rice: 12465,
  lobster: 9878,
  pasta: 98734,

  45: 'something a number'
}

// The 'keys' of the 'property' inside an Object are automatically converted to strings
// => chicken, rice, lobster, pasta are Strings
// If we use a number (e.g., 1,4,5,3,8,...) as the key of a property => It will be turned into a string
// Unless the 'key' is a 'Symbol' then it will NOT be stored as a string.

console.log(foods);
// console.log(foods.45); // Uncaught SyntaxError: Unexpected number
// NOTE: It is NOT possible to access the key property '45' with the dot '.' => There is a different solution for that.