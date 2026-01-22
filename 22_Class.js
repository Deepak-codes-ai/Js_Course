
class user {
  constructor(usrnme, email, pass) {
    this.usrnme = usrnme;
    this.email = email;
    this.pass = pass;
  }

  encryptedPss() {
    return `${this.pass}abc`
  }

  changeUSrname() {
    return `${this.usrnme.toUpperCase()}`
  }

}

const mst = new user('Microsoft', 'microsoft@abc.com', 1234);
console.log(mst.changeUSrname());
console.log(mst.encryptedPss());


function User(usrnme, email, pass) {
  this.usrnme = usrnme;
  this.email = email;
  this.pass = pass;
}

User.prototype.encryptedPss1 = function () {
  return `${this.pass}abx`
}

const mst1 = new User('Microsoft1', 'microsoft1@abc.com', 1234);
// console.log(mst1.changeUSrname());
console.log(mst1.encryptedPss1());


class User {
  constructor(username) {
    this.username = username;
  }

  logme() {
    console.log(`USERNAME : ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, pass) {
    super(username);
    this.email = email;
    this.pass = pass;
  }

  addCourse() {
    console.log(`A new course was added : ${this.username}`);
  }
}

const tea = new Teacher('Tea', 'tealover@gmail.com', 1234)
tea.addCourse();

const masaltea = new Teacher('Tea', 'tealover@gmail.com', 1234)
masaltea.logme();

console.log(tea instanceof Teacher);


