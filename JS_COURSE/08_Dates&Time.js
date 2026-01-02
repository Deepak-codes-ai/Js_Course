// Date object respreents a single moments

let myDate = new Date();
console.log(myDate)
console.log(myDate.toString()); // Fri Jan 02 2026 18:05:12 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); // Fri Jan 02 2026
console.log(myDate.toLocaleDateString()); // 1 / 2 / 2026

console.log(myDate.toLocaleString()); // 1 / 2 / 2026, 6:05: 12 PM

let createdDate = new Date(2023, 0, 13, 5, 0);
console.log(createdDate.toLocaleString()) // 1/3/2023, 5:00:00 AM

let createdDtate1 = new Date("2023-01-23");
console.log(createdDtate1.toLocaleString())



// ***********TIME STAMPS***************

let myTimestamps = Date.now();
console.log(myTimestamps)

console.log(createdDtate1.getTime());
console.log(Math.floor(myTimestamps / 1000));

myDate.toLocaleString('default', {
    //suggection =: ctrl+space
    weekday: "long"
})
console.log(myDate)