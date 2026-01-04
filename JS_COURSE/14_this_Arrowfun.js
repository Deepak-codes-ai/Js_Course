
// const user = {
//     username: "Deepak",
//     price: 120,
//     welcomeMessage: function () {
//         console.log(`${this.username},Welcome to website`);
//         // console.log(this)

//     }
// }
// user.welcomeMessage();
// user.username = "Ram"
// user.welcomeMessage();

// console.log(this); //window object in browser
// console.log(this); //empty object in node


// function chai() {
//     const username = "Deepak"
//     console.log(this.username); //not workable bcs only in object
// }
// chai();

// const chai = function () {
//     const username = "Deepak"
//     console.log(this.username); //not workable bcs only in object
// }
// chai()


// const chai = () => {
//     const username = "Deepak"
//     console.log(this); //not workable bcs only in object
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

//IMPLICITE FORMATE----------------------------------

// const addTwo = (num1, num2) => ({ username: "Deepak" });

// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(2, 3));


// (IIFE)-- >> Immediately Invoked Function Expression

// (Defination)(execution)

(function chai() {
    console.log("DB Connected")
})();
((name) => {
    console.log(`DB Connected Two ${name}`)
})("Deepak");
