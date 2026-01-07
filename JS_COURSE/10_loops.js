// A loop is used to repeat a block of code multiple times.

// for(initialization; condition; increment){
// code
// }

// for (let i = 1; i <= 3; i++) {
//     if (i === 2) break;
//     console.log(i);
// }
// for (let i = 1; i <= 3; i++) {
//     if (i === 2) continue;
//     console.log(i);
// }


// while Loop
// Runs while condition is true.

// Syntax:
// while (condition) {
//     // code
// }

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }



// do...while Loop
// Runs at least once, even if condition is false.

// Syntax:
// do {
//   // code
// } while(condition);

// Example:
// let j = 10;
// do {
//     console.log(j);
//     j++;
// } while (j <= 12)


// for (let index = 1; index <= 10; index++) {
//     const element = `5 X ${index}=${5 * index}`;
//     console.log(element)

// }

//For of loops-------------------

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "Hello Deepak";
// for (const greet of greeting) {
//     console.log(greet);
// }


//Map method---------------- its used for unique value

// const map = new Map();
// map.set('IN', 'India');
// map.set('USA', 'United State Of America');
// // console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// for in loop--------------------

// const myObject = {
//     game1: "NFS",
//     game2: "spiderman",
//     game3: "superman",
// }
// for (const key in myObject) {
//     console.log(`${key} for ${myObject[key]}`);
// }

// ---------------------------------

// const codings = ["C", "Java", "JS", "C++", "PHP"];

// codings.forEach((items, index, arr) => {
//     console.log(items, index, arr);
// })

// function printme(items) {
//     console.log(items);
// }
// codings.forEach(printme)


const myCoding = [
    {
        languageName: "JavaScript",
        languageFile: "JS"
    },
    {
        languageName: "Python",
        languageFile: "Py"
    },
    {
        languageName: "Java",
        languageFile: "J"
    },
]

myCoding.forEach((items) => {
    console.log(items.languageFile);

})