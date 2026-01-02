const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2));


const anotherNum = 342.55;
console.log(anotherNum.toPrecision(3))

const anotherNum2 = 34276800;
console.log(anotherNum2.toLocaleString('en-IN'));//indian value
console.log(anotherNum2.toLocaleString()); //USA Value


// *********************MATHS**************************

console.log(Math) //object
console.log(Math.abs(-4)) //absolute value 
console.log(Math.round(4.2))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))

console.log(Math.min(2, 4, 3, 2, 4, 6, 7, 6))
console.log(Math.max(2, 4, 3, 2, 4, 6, 7, 6))

console.log(Math.random()) //values bw 0s and 1s
console.log((Math.random() * 10) + 1)
console.log(Math.floor((Math.random() * 10)) + 1)

