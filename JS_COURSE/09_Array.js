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


const marvel_heros = ['Tony Syark', 'Thor', 'Spider Man'];
const Universe_Boss = ['Iron Man', 'Volverine', 'Super Man'];
// marvel_heros.push(Universe_Boss)
// console.log(marvel_heros);


const All_Heros = marvel_heros.concat(Universe_Boss); //Merged
// console.log(All_Heros);

const AllnewHeros = [...marvel_heros, ...Universe_Boss]; //Spread Operators Merged 
console.log(AllnewHeros);


const depthArray = [1, 2, 3, [4, 5], 6, [7, [8, 9]]]
const real_depthArray = depthArray.flat(2)
console.log(real_depthArray)
// console.log(marvel_heros[3][1]);


console.log(Array.isArray("Deepak"));
console.log(Array.from("Deepak"));
console.log(Array.from({ name: "Deepak" }));




//******************METHODS***********************
// forEach() – Just Loop (No Return)
let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbs.forEach(items => {
    console.log(items * 2)
});

// map() – Transform Array 

let squares = numbs.map(n => n * n);
console.log(squares)

// filter() – Select Some Elements

let filtered = numbs.filter(items => items % 2 === 0);
console.log(filtered)

// reduce() – Reduce to One Value

// array.reduce((accumulator, current) => {
//   return updatedAccumulator;
// }, initialValue);

const cart = [
    { item: "Mobile", price: 10000 },
    { item: "iPhone", price: 40000 }
]

let sum = cart.reduce((total, n) => total + n.price, 0);
console.log(sum);


// find() – Find One Element

let users = [
    {
        id: 1, name: "Deepak"
    },
    { id: 2, name: "Ram" }
];

let user = users.find(items => items.id === 2);
console.log(user);

// some() & every()

let nums = [2, 4, 6];

console.log(nums.some(n => n % 2 !== 0)); // false
console.log(nums.every(n => n % 2 === 0)); // true
