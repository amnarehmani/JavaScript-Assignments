// class tasks 

// task no 1
// Head and tail game

// let player1 = prompt("enter your name 1")
// let player2 = prompt("enter your name 2")
// let winner = Math.floor(Math.random()*2)

// if(winner == 0){
//     alert(`${player1} WIN`)
// }
// else{
//     alert(`${player2} WIN`)
// }
// console.log(winner)



// task no 2 
// generating random passowrds
// let passwordLenght = prompt("enter lenght of password");
// let charset = "ABCDEFGHIJKLMNOPQRSTUPWXYZ1@#$%^&*()_+{}";
// let password = " ";
// for(let i = 0; i < passwordLenght; i++){
//     randomIndex = Math.floor(Math.random()*charset.length)
//     password += charset[randomIndex]
// }
// console.log(`random password: ${password}`)


// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let firstName = prompt("enter your first name");
// let lastName = prompt("enter your last name");
// let name = (firstName+" "+lastName)
// console.log(`Hello ${name} How are you?`)



// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user
// input in your browser
//   let favoriteModel = prompt("Please enter your favorite mobile phone model:");
//   let lengthOfInput = favoriteModel.length;
//   document.write("<h2>The length of your favorite mobile phone model input is: " + lengthOfInput + "</h2>");


// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
// let letter = "Pakistan"
// let indexOf = letter.indexOf("n")
// console.log(`letter index ${letter} "n" is: ${indexOf}`)




// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// let letter = "Hello World";
// let indexOf = letter.lastIndexOf("l")
// console.log(`letter index ${letter} "last l" is: ${indexOf}`)



// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// let letter = "Pakistan";
// let indexOf = letter.charAt(3)
// console.log(`index of ${letter} "3" is: ${indexOf}`);




// 6. Repeat Q1 using string concat() method.
// let firstName = prompt("enter your first name");
// let lastName = prompt("enter your last name");
// let name = firstName.concat(lastName)
// console.log(`Hello ${name} How are you?`)


// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
// let name = "Hyderabad";
// let replace = name.replace("Hyder","Islam")
// console.log(replace)


// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”;

// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let replace = message.replace(/and/g, "&");
// console.log(replace)



// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// let stringNumber = "472";
// let number = parseInt(stringNumber);
// console.log(typeof number)



// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// let userInp = prompt("Enter your name");
// let capital = userInp.toUpperCase()
// console.log(capital)




// 11. Write a program that takes user input. Convert and
// show the input in title case.


// let userInp = prompt("Enter your name");
// let titleCaseInput = userInp.toLowerCase().split(' ');
// console.log(titleCaseInput)



// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// let stringNum = 35.36;
// let toString = stringNum.toString().replace('.', '');
// console.log(toString)




// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// let userInp = prompt("enter your username");

// if(userInp.includes("@")|| userInp.includes('.') || userInp.includes(',') ||userInp.includes('!')){
//     alert("Please enter a valid username without special symbols like @, ., ,, or !");
// }

// else {
//     alert("Username accepted: " + userInp);
//   }


// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
 
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let searchItem = prompt("Enter the item you want to search for:").trim().toLowerCase();
// let found = false;
// for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === searchItem) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     alert(`Yes, '${searchItem}' is found in the list.`);
// } else {
//     alert(`No, '${searchItem}' is not found in the list.`);
// }


// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


// let password = prompt("Enter your password:\nRequirements:\n- Should contain alphabets and numbers\n- Should not start with a number\n- Must be at least 6 characters long");
// if (
//     password.length >= 6 &&
//     isNaN(password.charAt(0)) &&
//     /[a-zA-Z]/.test(password) &&
//     /[0-9]/.test(password)
// ) {
//     alert("Password is valid!");
// } else {
//     alert("Invalid password! Please enter a valid password.");
// }



// 16. Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// let university = "University of K arachi";
// let split = university.split(" ")
// console.log(split)


// 17. Write a program to display the last character of a user
// input.

// let character = "Amna";
// let lastCharacter = character.charAt(3)
// console.log(lastCharacter)


// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
// Define the string
// let sentence = "The quick brown fox jumps over the lazy dog";
// let lowerCaseSentence = sentence.toLowerCase();
// let wordToSearch = "the";
// let words = lowerCaseSentence.split(' ');
// let count = 0;
// for (let i = 0; i < words.length; i++) {
//     if (words[i] === wordToSearch) {
//         count++;
//     }
// }
// console.log(`Number of occurrences of '${wordToSearch}' in the string: ${count}`);

