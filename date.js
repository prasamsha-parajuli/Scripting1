/* const date = new Date();
document.write(date); */

//way to access current date and time
/* var date = new Date();
time = date.getHours();

if (time < 12) {
    console.log("Good Morning!");
} else if (time >= 12 && time <= 17) {
    console.log("Good Afternoon!");
} else {
    console.log("Good Evening!");
} */

//  Write a script that displays the current date and time in the format "Day, Month Date, Year,
// Time". Use JavaScript’s built-in Date object
// date in milliseconds
/* var date_milli = new Date(8298400000);
document.write(date_milli); */


// document.write("<br> <br>");

//date in strings
/* var date_strings = new Date("Feb 9, 2020");
document.write(date_strings.getDate()); */

//document.write("<br> <br>");

// date in year, month, day, hour, minute, second and milliseconds
/* var birthDate = new Date(2020, 0, 31, 12, 30, 20);
document.write(birthDate); */

//parse method - converts date to milliseconds
/* var dateParse = Date.parse("01 jan 2020");
document.write(dateParse); */

/*
    Date Get Methods:
    getFullYear() : Get year as a four digit number (yyyy)
    getMonth() : Get month as a number (0-11)
    getDate(): Get day as a number (1-31)
    getDay(): Get weekday as a number (0-6)
    getHours(): Get hour (0-23)
    getMinutes() : Get minute (0-59)
    getSeconds() : Get second (0-59)
    getMilliseconds() : Get millisecond (0-999)
    getTime() : Get time (milliseconds since January 1, 1970)
*/

/* Example of Get Methods */
// const date = new Date("2023-07-25 09:05:20");
// document.write(date);
// document.write(date.getFullYear());
// document.write(date.getTime());


/*
    Set Date Methods:
    -> Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

    -> Set Date methods are used for setting a part of a date:
        setDate() : Set the day as a number (1-31)
        setFullYear() : Set the year (optionally month and day)
        setHours() : Set the hour (0-23)
        setMilliseconds() : Set the milliseconds (0-999)
        setMinutes() : Set the minutes (0-59)
        setMonth() : Set the month (0-11)
        setSeconds() : Set the seconds (0-59)
        setTime() : Set the time (milliseconds since January 1, 1970)
*/

/* Example of Set Methods */
// const date = new Date();
// document.write(date.setFullYear(2023));
// document.write(date.setHours(11));