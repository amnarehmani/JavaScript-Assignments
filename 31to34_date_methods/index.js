// 1. Write a program that displays current date and time in
// your browser.
// var now = new Date();
// console.log('Current Date:', now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0'));
// console.log('Current Time:', String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0') + ':' + String(now.getSeconds()).padStart(2, '0'));
        // this code is from chatgpt




// 2. Write a program that alerts the current month in words.
// For example December.
// let months = ["January", "Febuary" , "March", "April" , "May" , "June" , "july" , "August" , "September" , "October" , "November" , "December"];
// let currentMonthIndex = new Date().getMonth();
// alert("The current month is " + months[currentMonthIndex]);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// let days = ["sun", "mon", "tues", "wed", "thurs", "fri" , "sat"];
// let currentDay = new Date().getDay();
// alert("Today is "+ days[currentDay])


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// let dateIndex = new Date().getDay();
// let days = ["sun", "mon", "tues", "wed", "thurs", "fri" , "sat"];

// if(dateIndex == 0 || dateIndex == 6){
//     console.log("its funday")

// }
// else{
//     console.log("today is "+ days[dateIndex])
// }


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// let date= new Date();
// let currentDate = date.getDate     

// if(currentDate < 15){
//   document.write("first fifteen days of month")
// }
// else{
//         document.write("last days of month")
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// const now = new Date();
// const millisecondsSinceEpoch = now.getTime();
// const minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / 1000 / 60);
// let minutesSinceMidnight1970 = minutesSinceEpoch;
// console.log(minutesSinceMidnight1970);




// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.


// let now = new Date();
// let getHours = now.getHours();
// if(getHours < 12){
//         alert("its AM")
// }
// else{
//         alert("its PM")
// }



// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// const laterDate = new Date(2020, 11, 31);
// console.log(laterDate);


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


let startingRamadan = new Date(15 , 5 , 18)
let currentDate = new Date(;
        
)
