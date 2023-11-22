// Using Const with Arrays
// We can change the internals of the array BUT we canNOT point to a new array, neither to a string nor to a boolean

const nums = [1,2,3,4]
nums.push(5,6)
console.log(nums); // 1,2,3,4,5,6
nums.unshift(-1)
console.log(nums); // -1,1,2,3,4,5,6
nums.pop()
nums.pop()
nums.pop()
nums.pop()
nums.pop()
nums.pop()
nums.pop()
console.log(nums); // [] => the array is empty
nums = []
console.log(nums); // Uncaught TypeError: Assignment to constant variable. => canNOT point to a new array