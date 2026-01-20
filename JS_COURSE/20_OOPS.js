// const user = {
//     username: 'Deepak',
//     loginCount: 3,
//     signedIn: true,

//     getUserDetailed: function () {
//         console.log('Got userDetail from database');
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetailed());

function User(Username, loginCount, SignedIn) {
    this.Username = Username;
    this.loginCount = loginCount;
    this.SignedIn = SignedIn;

    // return this; //optional
}

const userOne = new User('Deepak', 12, true);
const userTwo = new User('Ram', 23, false);

console.log(userOne);
console.log(userTwo);

