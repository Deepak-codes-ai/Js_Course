//Arrays 
const myArrays = [12, 34, 2, 21, 55, 44, "Deep", true];
console.log(myArrays[0])

const myArrays2 = new Array(1, 2, 3, 4);
console.log(myArrays2)

myArrays2.push(33);// delete element to last
console.log(myArrays2)

myArrays2.pop();// delete element from last
console.log(myArrays2)

myArrays2.unshift(8);  // add element to start
console.log(myArrays2)

myArrays2.shift();  // delete element from start
console.log(myArrays2)

console.log(myArrays2.includes(4)); // return true or false values
console.log(myArrays2.indexOf(4)); // return index values

console.log(myArrays.join()) //convert them in string
console.log(typeof myArrays.join())

console.log("A", myArrays);
const newArr = myArrays.slice(1, 4) // return the value which is bw the given value numbers
console.log(newArr)

const newArr1 = myArrays.splice(1, 4) // return the value which is bw the given value numbers with last value numbers vaules
console.log(newArr1)
