// Stack Memories =: Primitive type

let myName = "Deepak Chuahan";

let userOne = {
    email: "abc@gmail.com",
    upi: "user@pytm"
}


// Heap Memories =:Non Primitive type refrence
let anotherName = myName;
anotherName = "Deep Thakur";


let userTwo = userOne;
userTwo.email = "abx@gmail.com";

console.log(userOne.email)
console.log(userTwo.email)

console.log(myName);
console.log(anotherName);


