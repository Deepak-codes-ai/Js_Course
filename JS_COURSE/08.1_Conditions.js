// if (condition) {
//     // code runs if condition is true
// }

// let age = 20;

// if (age >= 18) {
//     console.log("You can vote");
// }


let age = 16;

if (age >= 18 && age <= 60) {
    console.log("Adult");
} else {
    console.log("Minor");
}


let marks = 72;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


let username = "admin";
let password = "1234";

if (username === "admin") {
    if (password === "1234") {
        console.log("Login success");
    } else {
        console.log("Wrong password");
    }
}

// **************TERNARY OPERATORS******************
// condition ? trueStatement : falseStatement;

let age2 = 34;
let result = age > 18 ? "Eligible" : "Not Eligible";
console.log(result);


// **************SWITCH STATEMENTS******************
// switch is used when you have many fixed conditions.


// switch (expression) {
//   case value1:
//     // code
//     break;

//   case value2:
//     // code
//     break;

//   default:
//     // code
// }

let day = 2;

switch (day) {
    case 1:
        console.log("Sonday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid day");
}


