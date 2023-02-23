function compareNumbers(a, b) {
    return (a > b && a + " is greater than " + b)
           || (a < b && a + " is less than " + b)
           || (a === b && a + " is equal to " + b);
}

// Test case 1
let result = compareNumbers(5, 4);
console.log(result); // Output: "5 is greater than 4"

// Test case 2
result = compareNumbers(-4, -7);
console.log(result); // Output: "-4 is greater than -7"

compareNumbers(2, 2);


  
  