const PromiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Task 1');
        resolve();
    }, 1000)
})

PromiseOne.then(() => {
    console.log('Promise Consumed');
})

//2nd ----------------------------------

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Task 2 ');
        resolve();
    }, 1000);
}).then(() => {
    console.log('Task 2 consumed');
})


//3rd ----------------------------------

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ Username: "Deepak", email: "dc7897@gmail.com" });
    }, 1000);
}).then((user) => {
    console.log(user);
})

//4th ----------------------------------

new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: 'Deepak', password: "1234" });
        } else {
            reject("ERORR : Something went wrong");
        }
    }, 1000);
})
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('FInally Completed or not ');
    })


//5th ----------------------------------

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: 'Javascript', password: "1234" });
        } else {
            reject("ERORR : JS went wrong");
        }
    }, 1000);
})
async function ConsumePromFive() {
    try {

        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);

    }
}
ConsumePromFive()

//6th ----------------------------------


async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('E : error');
    }
};

getAllUsers();

//7th ----------------------------------

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((Error) => {
    console.log("E : Error");
})