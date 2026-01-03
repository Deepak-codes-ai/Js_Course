//singleton :-  

// objects.create :-

// object literals :-

// const JsUser = {
//     name: "Deepak",
//     'full name': "Deepak chauhan",
//     age: 18,
//     location: "Delhi",
//     email: "dc78@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Staturday"]
// }

// console.log(JsUser.email);
// console.log(JsUser['email']); //square notation--------
// console.log(JsUser["full name"]); //square notation--------


// JsUser.email = "dc7877@gmail.com"
// // Object.freeze(JsUser)
// JsUser.email = "dc7841@gmail.com"
// console.log(JsUser)

// JsUser.greeting = function () {
//     console.log(`Hello ${this.age}`);
// }
// console.log(JsUser.greeting())




//*********DESTRUCTURING***************


const tinderUser = {};

tinderUser.id = 1
tinderUser.name = "Deepak"
tinderUser.IsLogggedIn = false

console.log(tinderUser)


const regularUser = {
    email: 'dc678@gmail.com',
    fullname: {
        userfullName: {
            userName: "Deepak",
            LastName: "Chauhan"
        }
    }
}
console.log(regularUser.fullname?.userfullName.userName);


const target = { 1: 'a', 2: 'b' };
const source = { 4: 'a', 4: 'b' };

const returnTarget1 = Object.assign({}, target, source);
const returnTarget = { ...source, ...target }
console.log(returnTarget)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


const course = {
    courseName: "C++ DSA",
    coursePrice: 2000,
    courseInstructor: "Deepak"
}

const { courseInstructor: instructor } = course;
console.log(instructor)


//********************API********************* */

// {
//     'name': "Deepak",
//         'courseName': 'JS',
//             'price': '1000'
// }
[
    {}, {}, {}
]