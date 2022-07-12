/* Return the Sum of Two Numbers
    Create a function that takes two numbers as arguments and returns their sum.

    Examples
    addition(3, 2) ➞ 5

    addition(-3, -6) ➞ -9

    addition(7, 3) ➞ 10

    Notes
    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.

*/

const sumOfTwoNumbers = (a, b) => a + b;
console.log(sumOfTwoNumbers(3, 2));
console.log(sumOfTwoNumbers(-3, -6));
console.log(sumOfTwoNumbers(7, 3));

function addition(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
}