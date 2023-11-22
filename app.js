// Nested array

const foods = [
  ['chicken', 'rice'],
  ['beefsteak', 'potatoes'],
  ['rice paper', 'sauce']
]

console.log(foods); // (3) [Array(2), Array(2), Array(2)]

// Accessing array element
// 'beefsteak'
console.log(foods[1][0]); // beefsteak

// changing array element
// 'chicken' => 'drumstick'
console.log(foods[0][0] = 'drumstick'); // drumstick
console.log(foods[0]); // (2) ['drumstick', 'rice']

// adding array element: ['beefsteak', 'potatoes'] => ['beefsteak', 'potatoes', 'garlic sauce']
console.log(foods[1].push('garlic sauce'));
console.log(foods[1]); // (3) ['beefsteak', 'potatoes', 'garlic sauce']

const animalPairs = [
  ['dog', ['cat', 'rabbit']],
  ['dinosaur', 'pig'],
  [['ant', 'crocodile'], 'dolphin', ['elephant', 'kangaroo']]
]

// get 'elephant'
console.log(animalPairs[2][2][0]); // elephant