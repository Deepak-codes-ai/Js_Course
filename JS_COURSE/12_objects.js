//singleton :-  

// objects.create :-

// object literals :-

const JsUser = {
    name: "Deepak",
    'full name': "Deepak chauhan",
    age: 18,
    location: "Delhi",
    email: "dc78@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Staturday"]
}

console.log(JsUser.email);
console.log(JsUser['email']); //square notation--------
console.log(JsUser["full name"]); //square notation--------


JsUser.email = "dc7877@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "dc7841@gmail.com"
console.log(JsUser)

JsUser.greeting = function () {
    console.log(`Hello ${this.age}`);
}
console.log(JsUser.greeting())