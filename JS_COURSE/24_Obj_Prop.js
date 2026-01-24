// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);


// console.log(Math.PI)
// Math.PI = 3;
// console.log(Math.PI);

const maggie = {
  name: "Corn_Cheese_Maggie",
  price: 250,
  isAvailable: true,

  orderMaggie: function () {
    console.log('Not coocked yet');
  }
}

console.log(Object.getOwnPropertyDescriptor(maggie, "name"));

for defining property
Object.defineProperty(maggie, "name", {
writable: false,
enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(maggie, "name"));

for (let [key, value] of Object.entries(maggie)) {
  if (typeof value !== 'function') {
    console.log(`${key},${value}`);
  }
}
