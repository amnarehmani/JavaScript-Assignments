// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// let userInp = +prompt("Enter your number");
// let roundValue = Math.round(userInp);
// let floorValue = Math.floor(userInp);
// let ceilValue = Math.ceil(userInp);

// document.write(`number: ${userInp} </br>`)
// document.write(`Round off: ${roundValue}</br>`)
// document.write(`Floor: ${floorValue}</br>`)
// document.write(`Ceil: ${ceilValue}</br>`)


// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number



// let userInp = parseFloat(prompt("Enter your number"));
// let roundValue = Math.round(userInp);
// let floorValue = Math.floor(userInp);
// let ceilValue = Math.ceil(userInp);

// document.write(`number: ${userInp} </br>`)
// document.write(`Round off: ${roundValue}</br>`)
// document.write(`Floor: ${floorValue}</br>`)
// document.write(`Ceil: ${ceilValue}</br>`)



// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// let num1 = -4
// let numAbs = Math.abs(num1)
// console.log(numAbs)


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// let userInp = prompt("What would you choose Head or Tail");
// let userNum = Math.floor(Math.random*2);
// if(userInp == 2 && userInp == "head"){
//   alert("random coin value: Head")
// }
// else{
//     alert("random coin value: Tail")
// }


// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("<h2>Random Number between 1 and 100: " + randomNumber + "</h2>");




// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// let userInp = prompt("What is your weight");
// let weight;
// if(userInp.includes("kgs")){
//     weight = parseFloat(userInp)
// }else if (userInput.includes("kilograms")) {

//     weight = parseFloat(userInput);
// } else {

//     weight = parseFloat(userInput);
// }

// console.log(weight)

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// let secretNum = Math.floor(Math.random()*10 + 1)
// let userInp = parseFloat(prompt("Guess numbers between 1 to 10"))
// if(userInp === secretNum){
//     alert("Congratulations you guessed right number")
// }
// else{
//     alert("ohh! better luck next time")
// }