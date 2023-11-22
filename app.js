// Primitive types are stored as the actual value in the variable
// Arrays are different. Instead the variable stores a reference to where that array is in memory


// Primitive types
let fruit = 'orange'
let color = fruit
console.log(fruit); // orange
fruit = 'watermelon'
console.log(fruit); // watermelon
console.log(color); // orange

// Arrays
let nums = [1,2,3,4]
let otherNums = nums
nums.push(5,6,7)
console.log(nums); // 1,2,3,4,5,6,7
console.log(otherNums); // 1,2,3,4,5,6,7