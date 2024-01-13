GOALS
- Work with primitive types
- Understand let & const
- Use String Template Literals
- Work with common operators/methods

PRIMITIVE TYPES - represent data in our code
- Number
- String
- Boolean
- Null
- Undefined

***** the rest two are Symbol and BigInt

- Number
JavaScript stores all kinds of numbers with Number type
You will not always have perfect precision of irrational number: For example if we get the result 3.3333333(infinite 3s)5 from a calculation => you will get an approximation.

Calculation: +, -, *, /, % (modulo), ** (exponent)

Example for modulo:
25 % 5 = 0
16 % 3 = 1
14 % 4 = 2
Modulo is sometimes used to determine even/odd number

Orders of operations: parenthesis, exponent, multiplication, division , addition , subtraction

Example:
3 - 9 * 2 = -15
(3 - 9) * 2 = -12


NaN & Infinity
0/0 => NaN
1 + NaN => NaN

1 / 0 => Infinity
-1 / 0 => Infinity

Notes:
- 0 and -0, they are their own values in JS
- NaN does not necessary mean something went wrong, it is not necessary to be an error.
- NaN means this is not a standard math or JS will have a hard time representing this number or value as a true numeric value.