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



