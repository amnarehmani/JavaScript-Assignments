// 1. Declare an empty array using JS literal notation to store student names in future.
// let array = [];

// 2 Declare an empty array using JS object notation to store student names in future.
// let studentName = [];

//3. Declare and initialize a strings array.
// let array =  ["A" , "B" , "C"];

// 4. Declare and initialize a numbers array.
// let arrayNum = [1 , 2 , 3 , 4 , 5]

// 5. Declare and initialize a boolean array.
// let arrayBoolean = [true , false , true , false];

// 6. Declare and initialize a mixed array.
// let mixedArray = ["Hello World" , 123 , true , false];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser.

// document.write("<h1>Qualifications</h1>")
// let education = [ "SSC <br>", "HSC <br>" , "BCS <br>", "BS <br>"  , "BCom  <br>"  , "MS <br>"  , "M.phil. <br>"  , " phD"]
// document.write(education)

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students.

// let studentName = ["amna" , "ayesha" , "zoya"];
// let studentPercentage = [90 , 80 , 70];

// console.log("score of" , studentName[0] , "is 480." ,"percentage: ", studentName[0] )
// console.log("score of" , studentName[1] , "is 480." ,"percentage: ", studentName[1] )
// console.log("score of" , studentName[2] , "is 480." ,"percentage: ", studentName[2])


// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// let colorNames = ["red" , "blue" , "purple"];
// console.log(`original array: ${colorNames} \n \n`)

// // adding a prompt to add a color in array in the beginning
// let beginningArrays = prompt("What color you want to add in array in the beginning?");
// colorNames.unshift(beginningArrays);
// console.log(`after adding colors name in the beginning of the array: ${colorNames} \n \n`);

// // adding a prompt to add a color in array in the ending
// let endingArray = prompt("What color you want to add in your array in the ending");
// colorNames.push(endingArray);
// console.log(`after adding colors name in the ending of the array: ${colorNames} \n \n`);

// // adding to more colors in the beginning of the array
// colorNames.unshift("white", "orange");
// console.log(`After adding two more colors in the beginning of the array: ${colorNames} \n \n`);

// // deleting the first color from the array
// colorNames.shift()
// console.log(`after deleting one color from the beginning of the array: ${colorNames} \n \n`);

// // deleting the last color from the array
// colorNames.pop()
// console.log(`after deleting one color from the end of the array ${colorNames} \n \n`);

// // adding the prompt to ask the user in which index they want to add their color
// let indexToAdd = prompt("In which index you want to add your color?");
// let addingColor = prompt("Add your color in the array");
// colorNames.splice(indexToAdd , 0 , addingColor);
// console.log(`adding color after asking from user what index they want add their color ${colorNames}`);

// // adding the prompt to ask the user in which index they want to add their color
// let indexToDelete = prompt("In which index you want to add your color?");
// let deleteColor = prompt("Add number of color you want to delete");
// colorNames.shift(indexToDelete , deleteColor);
// console.log(`deleting color after asking from user what index they want delete color ${colorNames}`)


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort method.

// let studentScore = [85 , 100 , 95 , 60 , 78 , 57];
// // original oder
// console.log(`Score of students ${studentScore}`)
// // ascending order
// studentScore.sort();
// console.log(`Score of students in ascending order: ${studentScore}`);


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// let cityNames = ["Karachi" , "Islamabad" , "Seoul" , "Tokyo"]
// console.log(`city names: ${cityNames}`)
// let selectedCities = []
// selectedCities = cityNames.slice(0 ,3)
// console.log(`Selected Cities ${selectedCities}`);


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// let myArr = ["This", "is" , "my" , "cat"]
// let result = myArr.join(" ")
// console.log(myArr)

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// Initialize an empty array to store values
let array = [];

// Add values to the FIFO array
array.push(100);
array.push(200);
array.push(300);

// Remove and display values from the FIFO array in the order they were stored
console.log(array.shift()); // Output: 100
console.log(array.shift()); // Output: 200
console.log(array.shift()); // Output: 300

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-
// First Out)

// Initialize an empty array to store values
var lifoArray = [];

// Add values to the LIFO array
lifoArray.push(100);
lifoArray.push(200);
lifoArray.push(300);

// Remove and display values from the LIFO array in reverse order
console.log(lifoArray.pop()); // Output: 300
console.log(lifoArray.pop()); // Output: 200
console.log(lifoArray.pop()); // Output: 100


// 15. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your browser using document.write() method:

let MobileManufacutrers = ["Apple" , "Samsung" , "Motorola" , "Nokia", "Sony" , "Haier"]

document.write(
    "<select>"
)
document.write(
   "<option>"+ MobileManufacutrers[0]+"</option>"
)
document.write(
    "<option>"+ MobileManufacutrers[1]+"</option>"
 )
 document.write(
    "<option>"+ MobileManufacutrers[2]+"</option>"
 )
 document.write(
    "<option>"+ MobileManufacutrers[3]+"</option>"
 )
 document.write(
    "<option>"+ MobileManufacutrers[4]+"</option>"
 )
 document.write(
    "<option>"+ MobileManufacutrers[5]+"</option>"
 )
document.write(
    "</select>"
)

