// function multpleby5(nums) {
//   // this.nums = nums;
//   return nums * 2;
// }

// multpleby5.power = 3;

// console.log(multpleby5.power);
// console.log(multpleby5(10));
// console.log(multpleby5.prototype);


function createUser(userNAme, price) {
  this.userNAme = userNAme;
  this.price = price;
}

createUser.prototype.increament = function () {
  this.price++;
}

createUser.prototype.printme = function () {
  console.log(`ProductName is ${this.userNAme} and Price is ${this.price}`);

}

const coffee = new createUser('Coffee', 25);
const tea = new createUser('Tea', 15);

coffee.printme();
tea.printme();

//-----------------------Prototypes ------------------------//
let myHeros = ['Thor', 'Spidy']

let heropwr = {
  thor: 'Hammer',
  spiderman: 'Sling',

  get_heropwr: function () {
    console.log(`Spide power is ${this.spiderman}`);
  }
}


Object.prototype.Deepak = function () {
  console.log(`Deepak is present is all objects`)
}
// heropwr.Deepak()
myHeros.Deepak()

Array.prototype.heyDeep = function () {
  console.log(`Deepak is present is all Arrays`)
}
myHeros.heyDeep();
// heropwr.heyDeep();

//-------------------Inheritance--------------------'//

const teacher = {
  makeContent: true
}

const TeacherSupport = {
  isAvailable: false
}

const TAsupport = {
  makeASsment: 'Js Assmnets',
  fullTime: true,
  __proto__: TeacherSupport
}

teacher.__proto__ = heropwr
//
Object.setPrototypeOf(TeacherSupport, teacher)

let anotherUser = "Deepak       ";
String.prototype.trueLength = function () {
  console.log(`True Length is : ${this.trim().length}`);
}

anotherUser.trueLength()
'Deepakram'.trueLength();




// function setUsrName(username) {
//   this.username = username;
// }

// function createUser(username, email, password) {
//   setUsrName.call(this,username);
//   this.email = email;
//   this.password = password;
// }

// const chai = new createUser('Chai', 'chai@fb.com', 123)
// console.log(chai);


const setUsrName = (obj, username) => {
  obj.username = username;
}

const createuser = (username, email, password) => {
  const user = {};

  setUsrName(user, username);
  user.email = email;
  user.password = password;

  return user;
}

const chai = createuser('chai', 'chai@123.com', 123);
console.log(chai);

