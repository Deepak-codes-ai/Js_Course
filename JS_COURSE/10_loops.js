// A loop is used to repeat a block of code multiple times.

// for(initialization; condition; increment){
// code
// }

for (let i = 1; i <= 3; i++) {
    if (i === 2) break;
    console.log(i);
}
for (let i = 1; i <= 3; i++) {
    if (i === 2) continue;
    console.log(i);
}


// while Loop
// Runs while condition is true.

// Syntax:
// while (condition) {
//     // code
// }

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}



// do...while Loop
// Runs at least once, even if condition is false.

// Syntax:
// do {
//   // code
// } while(condition);

// Example:
let j = 10;
do {
    console.log(j);
    j++;
} while (j <= 12)


for (let index = 1; index <= 10; index++) {
    const element = `5 X ${index}=${5 * index}`;
    console.log(element)

}