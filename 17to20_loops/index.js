// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// let arr = []

// 2.Declare and initialize a multidimensional array representing the following matrix:

// let myArr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
  
//   3. Write a program to print numeric counting from 1 to 10.

// for(let i = 1  ; i <= 10 ; i++){
//     console.log(i)
// }

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be
// taken as an input from user.
// let usrInput = +prompt("Enter your number")
 
// for(let i=1 ; i<=10 ; i++){
//     console.log(usrInput+" x "+i+" = "+usrInput*i )
// }

// let number = parseInt(prompt("Enter a number:"));
// let length = parseInt(prompt("Enter the length of the table:"));

// console.log(`Multiplication table of ${number}:`);

// for (let i = 1; i <= length; i++) {
//   const product = number * i;
//   console.log(`${number} x ${i} = ${product}`);
// }


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// let fruits = ["apple", "banana" ,"mango", "orange", "strawberry"]

// for(let i = 0 ; i<=4; i++){
//     document.write(fruits[i] , "</br>")
// }



// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("<h1>counting</h1>")
for(let i= 1 ; i<=15 ; i++){
    document.write(i ,"</br>")
}


document.write("<h1>reverse</h1>")
for(let i= 10; i>=1; i--){
    document.write(i ,"</br>")
}

document.write("<h1>even</h1>")
for(let i= 0; i<= 20; i +=2 ){
    document.write(i ,"</br>")
}

document.write("<h1>odd</h1>")
for (let i = 1; i <= 19; i++) {
  if (i % 2 !== 0) {
    document.write(i, " ");
  }
}