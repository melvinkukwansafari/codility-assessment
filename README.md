# codility-assessment

# challenge-1
  This function compareNumbers(a, b) is designed to compare two numbers, a and b, and return a string indicating their relationship.

# Inputs

a (number): The first number to be compared.
b (number): The second number to be compared.

# Outputs
The function returns a string indicating the relationship between the two input numbers. The possible output strings are:

a is greater than b: If a is greater than b.
a is less than b: If a is less than b.
a is equal to b: If a is equal to b.

# Usage
Example usage:

*javascript
const result = compareNumbers(10, 5); // returns "10 is greater than 5"
console.log(result);
In the example above, the function compareNumbers is called with a equal to 10 and b equal to 5. The function returns the string "10 is greater than 5", which is stored in the variable result. This string is then printed to the console using console.log(result).

# How it works

The function uses a combination of logical operators (&& and ||) to evaluate the relationship between a and b.

If a is greater than b, the first condition (a > b && a + " is greater than " + b) evaluates to true, and the corresponding string is returned.
If a is less than b, the second condition (a < b && a + " is less than " + b) evaluates to true, and the corresponding string is returned.
If a is equal to b, the third condition (a === b && a + " is equal to " + b) evaluates to true, and the corresponding string is returned.
If none of the conditions evaluate to true, the function does not return anything.