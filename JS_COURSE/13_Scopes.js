{ } //scope

// let a = 30;
// if (true) {
//     let a = 20;
//     const b = 30;
//     var c = 40;
//     console.log("INNER :", a)
// }
// console.log(a);
// // console.log(b);
// console.log(c);


function one() {
    const username = "Deepak";
    function two() {
        const web = "google";
        console.log(username);
    }
    // console.log(web) //error
    two();
};
// one();


if (true) {
    const username = "Deepak";
    if (username === "Deepak") {
        const website = " Google"
        console.log(username + website);
    }
    // console.log(website); //erorr
}
// console.log(username); // error



console.log(addone(3));
function addone(num) {
    return num + 1;
}

//Hoisting-----------------------------------

addTwo(3)
const addTwo = function (num) {
    return num + 1;
}


