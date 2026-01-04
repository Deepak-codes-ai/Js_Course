// A function is a block of code that performs a specific task and can be reused.

// function functionName() {
//   // code
// }

function greet(name) {
    console.log("Hello " + name);
}
greet("Deepak");


function checkLogin(isLoggedIn) {
    return isLoggedIn ? "Welcome" : "Please login";
}
console.log(checkLogin(true));


const square = n => n * n;
console.log(square(5));

function Welcome(user = "User") {
    console.log("Welcome " + user);
}
Welcome();


function addTwoNumbers(numb1, numb2) {
    return numb1 + numb2;
}
const result = addTwoNumbers(2, 3);
console.log('Result :', result);


//*************REST OPER**************** */

function calculateCard(val1, val2, ...params) {
    return params;
}
console.log(calculateCard(200, 300, 400, 500))


const user = {
    name: "Deepak",
    age: 22
}
function handleUser(object) {
    console.log(`UserName is ${object.name} and age is ${object.age}`)
}
// handleUser(user);
handleUser({
    name: "Deepak",
    age: 22
});



const Array = [100, 200, 300, 400];

function returnedArray(getarray) {
    return getarray[1];
}

// console.log(returnedArray(Array));
console.log(returnedArray([100, 200, 300, 400]));




