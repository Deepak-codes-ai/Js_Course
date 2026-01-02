// Primitive 7 types of data: -
//  String, Number, Boolean, null, undefined, Symbol, BigInt

let str1 = "Deepak";

const num = 10;
const scorevalue = 100;

const isLogedIn = false

const outSider = null;

let userEmail;

const id = Symbol("123");
const AnotherID = Symbol('123')

console.log(id == AnotherID);

const bigNum = 19726458635n;



// Non Primitive and Refrence type :-
// Array, Object, function

const heros = ['Ram', 'Shyam', 'Ghanshyam'];

let myObj = {
    name: 'Deep',
    age: 1,
}

const myfunction = function () {
    console.log("Hello Deep")
}
myfunction();