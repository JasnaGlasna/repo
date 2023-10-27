// Zadaca 1

var ageString = prompt("Enter your age");
var age = parseInt(ageString);

if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    var yearsToWait = 18 - age;
    console.log("Sorry, you need to wait for " + yearsToWait + " more years to drive.");
}


// Zadaca 2

var month = prompt("Enter a month");
month = month.toLowerCase();

var days;

if (month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december") {
    days = 31;
} else if (month === "april" || month === "june" || month === "september" || month === "november") {
    days = 30;
} else if (month === "february") {
    days = "28 or 29";
} else {
    days = "Invalid month";
}

console.log(month + " has " + days + " days.");



// Zadaca 3
var numMusicians = prompt("Enter the number of musicians:");

var musicians = parseInt(numMusicians);

var bandType;

if (musicians === 1) {
  bandType = "solo";
} else if (musicians === 2) {
  bandType = "duo";
} else if (musicians === 3) {
  bandType = "trio";
} else if (musicians === 4) {
  bandType = "quartet";
} else if (musicians > 4) {
  bandType = "large band";
} else {
  bandType = "Invalid number of musicians";
}

console.log("The band is a " + bandType + ".");

// Zadaca 4

var diploma = prompt("Enter your diploma/degree");

var salary;

if (diploma === "no high diploma") {
    salary = "1000$";
} else if (diploma === "high school diploma") {
    salary = "2000$";
} else if (diploma === "associate degree") {
    salary = "3000$";
} else if (diploma === "bachelor's degree") {
    salary = "4000$";
} else if (diploma === "master's degree") {
    salary = "5000$";
} else if (diploma === "professional degree") {
    salary = "6000$";
} else if (diploma === "doctor's degree") {
    salary = "7000$";
} else {
    salary = "Invalid diploma/degree";
}

console.log("Your diploma is worth " + salary + ".");



