// 1. Write a function that displays current date & time in your
// browser.

// function currentDateAndTime(){
//    let now = new Date()
//    let time = now
//    console.log(now)
// }
// currentDateAndTime()

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function greeting(){
//     let firstName = prompt("Enter your first name");
//     let LastName = prompt("Enter your last name");
//     alert(`Hello ${firstName} ${LastName} how are you?`)
// }
// greeting()

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function addingNumbers(){
//     let num1 = +prompt("Enter num 1");
//     let num2 = +prompt("enter num 2")
//     let add = num1 + num2
//     return add
// }
// console.log(`addition of two nums are ${addingNumbers()}`)


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


// function Calculator(num1 , num2 , operator){
//     let result;

//     if(operator === "+"){
//         result = num1 + num2
//     }
//     else if(operator === "-"){
//         result = num1 - num2
//     }
//     else if(operator === "*"){
//         result = num1 * num2
//     }
//     else if(operator === "/"){
//         result = num1 / num2
//     }
//     else{
//         "invalid"
//     }
//     return result;

// }

// let num1 = +prompt("enter num 1");
// let num2 = +prompt("enter num 2");
// let operator = prompt("enter operator")
// result = Calculator(num1 , num2 , operator)
// alert(result)


// 5. Write a function that squares its argument.


// function square(number) {
//     return number * number;
// }
// let num = parseFloat(prompt("Enter a number to square:"));
// let result = square(num);
// alert("The square of " + num + " is: " + result);


// 6. Write a function that computes factorial of a number.
 
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// var num = parseInt(prompt("Enter a number to compute its factorial:"));
// var result = factorial(num);
// alert("The factorial of " + num + " is: " + result);



// 7. Write a function that take start and end number as inputs
// & display counting in your browser.


// function counting(start , end){
  
//     for(i = start ; i <= end ; i++){
//         console.log(i)
//     }
// }

// counting(1 , 20)


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse(base , perpendicular){
//     function calculateSquare(number){
//           return number*number
//     }
//     let baseSquare = calculateSquare(base)
//     let perpendicularSquare = calculateSquare(perpendicular)
//     let hypotenuse = Math.sqrt(baseSquare , perpendicularSquare)

//     return hypotenuse
// }

// let base = 3
// let perpendicular = 4
// let hypotenuse = calculateHypotenuse(base , perpendicular)

// console.log(`the base of tringle is ${base} and the perpendicular of tringle is ${perpendicular} hypotenuse is ${hypotenuse}`)


// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

// function areaOfRectangle(width , height){
//     return width * height
// }

// let calculateArea = areaOfRectangle(5 , 9)
// console.log(calculateArea)

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function isPalindrome(str) {
    
//     let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     let reversedStr = cleanedStr.split('').reverse().join('');

//     return cleanedStr === reversedStr;
// }


// console.log(isPalindrome('madam')); 
// console.log(isPalindrome('hello'));
// console.log(isPalindrome('A man, a plan, a canal, Panama'));



// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// function capitalizeFirstLetter(str) {
//     return str.replace(/\b\w/g, function(char) {
//         return char.toUpperCase();
//     });
// }
// let exampleString = 'the quick brown fox';
// let result = capitalizeFirstLetter(exampleString);
// console.log(result);



// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// function findLongestWord(str) {

//     const words = str.split(' ');

//     let longestWord = '';
    
  
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
    
//     return longestWord;
// }


// const exampleString = 'Web Development Tutorial';
// const longestWord = findLongestWord(exampleString);
// console.log(longestWord); 



// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of

// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2