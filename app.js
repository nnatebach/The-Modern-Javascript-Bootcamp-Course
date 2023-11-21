let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

// swimmers are shark, salmon, whale
let swimmers = animals.slice(0, 3)
console.log('swimmers are ' + swimmers);

// mammals are whale and bear
let mammals = animals.slice(2, 4)
console.log('mammals are ' + mammals);

// reptiles are lizard and tortoise
// let reptiles = animals.slice(2, 4)
// let reptiles = animals.slice(4)
let reptiles = animals.slice(-2)
console.log('reptiles are ' + reptiles);

// quadruped are bear, lizard, tortoise
let quadruped = animals.slice(-3)
console.log('quadruped are ' + quadruped);

// A quick way to make a copy of an array and it does not impact the original array
let copy = animals.slice()
console.log(copy);

console.log(animals); // the original array stays the same
