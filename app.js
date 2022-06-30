// Note: Function to validate email address...!

/*
let userInput = prompt('Enter email address!');
// console.log(userInput);

let validEmailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

if (userInput.match(validEmailFormat)) {
    console.log('Valid Format!');
}

else {
    console.log('Invalid Format!');
}
*/

// Note: Function to validate saudii arabia mobile number...!

/*
let userInput = prompt('Enter mobile number!');
console.log(userInput);

var regex = new RegExp(/^(05)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/);

if (userInput.match(regex)) {
    console.log('Valid Number!');
}

else {
    console.log('Invalid Number!');
}
*/

// let userInput = "Zdkjfghio";
// let valueChecker = () => {
//     if (userInput === "Z1") {
//         return 'Request';
//     }

//     else if (userInput === "Z2") {
//         return 'Installation';
//     }

//     else if (userInput === "Z3") {
//         return 'Complaint';
//     }

//     else if (userInput === "Z4") {
//         return 'Inquiry';
//     }

//     else {
//         return undefined;
//     }
// }

// let result = valueChecker();
// console.log(result);

/*
// Note: 16 deigits credit card number...!
const creditCard = '4111111111114324';
// console.log(creditCard);

// Note: Get last four digits...!
const lastFourDigits = creditCard.slice(-4);
// console.log(lastFourDigits);

const maskedNumber = lastFourDigits.padStart(creditCard.length, '*');
console.log(maskedNumber);
*/


// Q: Program:

// Solution:
/*
let word = 'saylani';

let strToArr = word.split("");
// console.log(strToArr);

for (let i = 0; i < strToArr.length; i++) {
    // console.log(strToArr[i]);

    let lastItem = strToArr.pop();
    strToArr.unshift(lastItem);
    // console.log(strToArr);

    let arrToStr = strToArr.join("");
    console.log(arrToStr);
}
*/

// Note: Testing purpose...!
// let name = "ahmed";
// let has = name.includes('m');

// console.log(has);

// Testing local storage...!

// let friends = ['ahmed', 'kashan', 'shahzaib', 'mehran', 'khurram'];
// console.log(friends);

// let dataInStringFormat = JSON.stringify(friends);
// console.log(dataInStringFormat);

// localStorage.setItem('Data', dataInStringFormat);

// let header = document.getElementById("heading");
// console.log('Testing!');

// setTimeout(() => {
//     header.style.display = "none";
// }, 5000);

// console.log('Testing!');

// let nums = [1, 2, 3, 4, 5];
// let count = 0;

// for (let i = 0; i < nums.length; i++) {
//     count = count + nums[i];
// }

// console.log(count);

// Note: Testing!

// let arr = [
//     {
//         price: 50,
//         quantity: 3
//     },

//     {
//         price: 20,
//         quantity: 4
//     },

//     {
//         price: 10,
//         quantity: 6
//     },
// ];
// // console.log(arr);
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);

//     arr[i].total = arr[i].quantity * arr[i].price;
//     console.log(arr[i]);

//     count = count + arr[i].total;
// }

// console.log(count);

// Note: Learning class...!
/*
class Company {
    constructor(title, department) {
        this.myTitle = title;
        this.myDep = department;
    };

    gender = "Male";
    intro() {
        console.log(`My gender is ${this.gender}, My title is ${this.myTitle}, my department is ${this.myDep}`);
    }
};

class NewCompany extends Company {
    constructor(title, department) {
        super(title, department);
    }
}

const myCompany = new Company('Software Engineer', 'IT');
console.log(myCompany);
// myCompany.intro();
// console.log(typeof (myCompany));

const hasnainCompany = new Company('Accountant', 'Finance');
console.log(hasnainCompany);
// hasnainCompany.intro();

let ahmedNewCompany = new NewCompany('Kitchen', 'Chef');
console.log(ahmedNewCompany);
ahmedNewCompany.intro();
*/

// slice() method in array...
// let friends = ["ahmed", "bilal", "shahzil", "asghar", "ali", "hasnain"];
// console.log(friends);

// let updateList = friends.slice(0, 3);
// console.log(updateList);

// Question:
/*
let friends = ["ahmed", "bilal", "shahzil", "asghar", "ali", "hasnain"];
// console.log(friends);

let userInput = prompt("Enter your friend name ?").toLowerCase();
// console.log(userInput);

let friendFlag = false;

for (let i = 0; i < friends.length; i++) {
    // console.log(friends[i]);

    if (friends[i] == userInput) {
        friendFlag = true;
        break;
    }
}

if (!friendFlag) {
    console.log('Friend Not Found!');
}

else {
    console.log('Friend Found!');
}
*/

// Note: Another method...!

/*
let friends = ["ahmed", "bilal", "shahzil", "asghar", "ali", "hasnain"];
// console.log(friends);

let userInput = prompt("Enter your friend name ?").toLowerCase();
// console.log(userInput);

let result = friends.filter((item, index) => {
    return item.includes(userInput);
});

// console.log(result);

if (result.length > 0) {
    console.log('Friend Found!');
}

else {
    console.log('Friend Not Found!');
}
*/

// Note: Question: Find tghe largest number from an array...!

// let numArr = [2, 16, 63, 9, 55];
// console.log(numArr);

// let largestNum = 0;

// for (let i = 0; i <= largestNum; i++) {
//     // console.log(largestNum);
//     // console.log(i);
//     // console.log(numArr[i]);

//     if (numArr[i] > largestNum) {
//         largestNum = numArr[i];
//     }
// }

// console.log(largestNum);

// Note: Question:

// let userInput = 10;
// // console.log(userInput);

// for (let i = userInput; i >= 0; i = i - 0.5) { console.log(i) };

// Note: Question:
/*
let count = 20;
// console.log(count);

for (let i = 0; i <= count; i++) {
    // console.log(i);

    if (i % 2 == 0) {
        console.log(i, ' is even number.');
    }

    else {
        console.log(i, ' is odd number.');
    }
}
*/

// Note: Question:
/*
let usersArr = [];

const addUser = () => {
    let email = prompt("Enter your email!");
    let password = prompt("Enter your password!");
    // console.log(userInput);

    let obj = {
        email: email,
        pass: password
    };
    // console.log(obj);

    // Note: Saving data in array...!
    usersArr.push(obj);
    console.log(usersArr);

    // Note: Saving data in Local Storage...!
    let datatoStr = JSON.stringify(usersArr);
    localStorage.setItem("Users List", datatoStr);
};

const getAllUser = () => {
    let getData = localStorage.getItem("Users List");
    let dataInJSON = JSON.parse(getData);
    console.log(dataInJSON);
}
*/

// Note: Important question:
/*
let currentDate = new Date();
// console.log(currentDate);

let ramzanDate = new Date('June 05, 2015');
// console.log(ramzanDate);

// Note: Converting both dates in miliseconds...!
const currentDateInMs = currentDate.getTime();
// console.log(currentDateInMs);

const ramzanDateInMs = ramzanDate.getTime();
// console.log(ramzanDateInMs);

const remainingValueInMS = currentDateInMs - ramzanDateInMs;
// console.log(remainingValueInMS);

let daysFormula = remainingValueInMS / (1000 * 60 * 60 * 24);
// console.log(daysFormula);

daysFormula = Math.floor(daysFormula);
console.log(daysFormula);
*/

// Note: Question!
/*
let arr = ['a', 'h', 'm', 'e', 'd'];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr);

    let lastLetter = arr.pop();
    arr.unshift(lastLetter);
    console.log(arr);
}*/

// Note: Learning functions...!

// function eatingTime(food) {
//     // console.log(food);
//     if (food !== "") {
//         console.log('Shahzil is eating ', food);
//     }
// };

// eatingTime('Halwa Poori');
// eatingTime();
// eatingTime('Chicken Biryani');

// function addition(num1, num2) {
//     let addValues = num1 + num2;
//     console.log(addValues);
// }

// let value1 = Number(prompt("Enter number!"));
// let value2 = Number(prompt("Enter another number!"));
// addition(value1, value2);


// let result = function greeting() {
//     let userInput = prompt('Enter message');
//     return userInput;
// };

// console.log(result);

// function greeting() {
//     return message;
// };

// let userInput = prompt('Enter message');
// let result = greeting(userInput);
// console.log(result);

// Solve the equation: (a + b)2 = a2 + 2ab + b2;
/*
function squareFormula(value) {
    return value * value;
}

function equation(a, b) {
    // console.log(a, b);

    let formula = squareFormula(a) + (2 * a * b) + squareFormula(b);
    return formula;
}

let num1 = Number(prompt("Enter value 1"));
let num2 = Number(prompt("Enter value 2"));

let solution = equation(num1, num2);
console.log(solution);
*/

// let heading = document.getElementById("heading");
// let style = window.getComputedStyle(heading, null).getPropertyValue('font-size');
// let currentSize = parseFloat(style);
// console.log(currentSize);

// setInterval(() => {
//     let heading = document.getElementById("heading");
//     let style = window.getComputedStyle(heading, null).getPropertyValue('font-size');
//     let currentSize = parseFloat(style);
//     heading.style.fontSize = (currentSize + 1) + 'px';
// }, 1000);

// let friends = ['ahmed', 'mehran', 'kashan', 'khurram', 'shahzaib'];
// let colors = ['blue', 'yellow', 'orange', 'green', 'lightblue'];

// setInterval(() => {
//     let randomPerson = Math.floor(Math.random() * 5);
//     // console.log(friends[randomPerson]);
//     heading.innerHTML = friends[randomPerson];

//     // let style = window.getComputedStyle(heading, null).getPropertyValue('color');
//     // let currentSize = parseFloat(style);
//     // heading.style.fontSize = (currentSize + 1) + 'px';
// }, 1000);


// let friends = ["ahmed", "akbar", "asghar", "zeeshan", "umer"];

// setInterval(() => {
//     let randomPerson = Math.floor(Math.random() * friends.length);
//     heading.innerHTML = friends[randomPerson];
// }, 1000);

// let numValue = 0;
// // console.log(numValue);

// let timeInterval = setInterval(() => {
//     numValue++;
//     heading.innerHTML = numValue;

//     if (numValue == 404) {
//         clearInterval(timeInterval);
//     }
// }, 1);

// for (let i = 1; i <= 20; i++) {
//     console.log(i);

//     if (i == 10) {
//         break;
//     };
// };

// let vowels = ["a", "e", "i", "o", "u"];
// // console.log(vowels);

// const countVowel = (str) => {
//     let count = 0;

//     for (let letter of str.toLowerCase()) {
//         // console.log(letter);

//         if (vowels.includes(letter)) {
//             count++;
//         };
//     };
//     return count;
// };

// const string = "Ahmed";
// let result = countVowel(string);
// console.log(result);

// let vowels = ["a", "e", "i", "o", "u"];

// for (let i in vowels) {
//     console.log(i);
// }

// const char = prompt("Enter any character!").toLowerCase();
// const vowels = ["a", "e", "i", "o", "u"];

// if (vowels.includes(char)) console.log(char, "is a vowel");
// else console.log(char, "is not a vowel");

// if ((char == "a") || (char == "e") || (char == "i") || (char == "o") || (char == "u")) console.log(char, "is a vowel");
// else console.log(char, "is not a vowel");

// if ((char == vowels[0]) || (char == vowels[1]) || (char == vowels[2]) || (char == vowels[3]) || (char == vowels[4])) console.log(char, "is a vowel");
// else console.log(char, "is not a vowel");

// const capitalizeFirstChar = (data) => {
//     // console.log(data);

//     let strToArr = data.split(" ");
//     // console.log(strToArr);  // Converting string data into array data...!

//     for (let i = 0; i < strToArr.length; i++) {
//         // console.log(strToArr[i]);

//         strToArr[i] = strToArr[i][0].toUpperCase() + strToArr[i].slice(1).toLowerCase();
//         // console.log(strToArr[i]); // Get required data...!
//     };

//     let arrToStr = strToArr.join(" ");
//     // console.log(arrToStr); // Converting array data into string data...!

//     return arrToStr;
// };

// // const paragraph = prompt("Enter any text!").toLowerCase();
// const paragraph = "my name is shahzada muhammad ahmed rana";
// const result = capitalizeFirstChar(paragraph);
// console.log(result);

// let str = 'ahmed';
// console.log(str);

// str = str.split();
// console.log(str);

// str = str.split("");
// console.log(str);

// let nameArr = ["a", "h", "m", "e", "d"];
// console.log(nameArr);

// let arrToStr = nameArr.join();
// console.log(arrToStr);

// let arrToStr = nameArr.join("");
// console.log(arrToStr);

// let names = ["ahmed", "yousuf", "akbar", "asghar", "zeeshan"];
// // console.log(names);

// let officeMates = ["ahsan", "bilal", "aizaz", "sheroz", "shazil"];

// for (let i = 0; i < names.length; i++) {
//     // console.log("Names", names[i]);

//     for (let j = 0; j < officeMates.length; j++) {
//         console.log(names[i], officeMates[j]);
//     };
// };


// const checkDuplicate = (data) => {
//     // console.log(data);

//     let duplicateFound = false;
//     let userInput = prompt("What is your name ?");
//     // console.log(userInput);

//     if (data.includes(userInput)) return false
//     else return true;
// };

// let names = ["ahmed", "yousuf", "akbar", "asghar", "zeeshan"];
// // console.log(names);
// let result = checkDuplicate(names);
// console.log(result);

// let names = ["ahmed", "yousuf", "akbar", "asghar", "zeeshan", "yousuf", "asad", "yousuf", "bisma", "faraz"];
// console.log(names);

// console.log(names.indexOf("yousuf")); // Return the index of the item in an array, First value will return if there are multiples, -1 will return if there are no value...!
// console.log(names.lastIndexOf("yousuf"));

// let name = "ahmed";
// console.log(name);

// console.log(name.indexOf("m"));
// console.log(name.charAt(2));

// let name = "shahzada ahmed";
// let updateName = name.replace("shahzada", "muhammad");
// console.log(updateName);

// Note: Spread or rest operators...!
// let names = ["ahmed", "yousuf", "akbar", "asghar", "zeeshan"];
// console.log(names);

// names.push("bilal");
// console.log(names);
// console.log([...names]);

// const testing = (name1, name2, ...restNames) => {
//     console.log(name1, name2);
//     console.log(...restNames);
// };

// testing("ahmed", "sheroz", "shahzil", "ahsan", "faraz", "hasnain", "rana");

// Note: How to remove falsy values from an array...!
// let arr = ["ahmed", true, "", null, "zeeshan", "", undefined, 1996];
// console.log(arr.filter(Boolean));

// let names = ["ahmed", "yousuf", "akbar", "asghar", "zeeshan", "yousuf", "akbar", "asghar", "zeeshan", "yousuf", "akbar", "asghar", "zeeshan", "ali"];
// console.log(names[names.length - 1]);
// console.log(names.at(5));

// let userInput = prompt("Enter your number");
// let validMobileFormat = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm;
// let result = (userInput.match(validMobileFormat)) ? (true) : (false);

// console.log(result);

// Note: api call request practice...!
/*
let api = "https://jsonplaceholder.typicode.com/posts";
console.log("API: ", api);

fetch(api)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
*/

// Note: Code to check the internet status (MOST IMPORTANT)
// if (navigator.onLine) console.log('online!');
// else console.log('offline!');

// Note: Code to check the internet status while it will change automatically (MOST IMPORTANT)
// window.addEventListener("online", (e) => console.log('You are online', e));
// window.addEventListener("offline", (e) => console.log('You are offline', e));

// const oddNumbers = (arr) => {
//     // console.log(arr);

//     let filterOddnum = arr.filter(data => data % 2 == 0);
//     console.log(filterOddnum);
// };

// let numArr = [1, 2, 3, 4, 5];
// oddNumbers(numArr);

// let myName = prompt("Enter your name!");

// if (myName.includes(" ")) {
//     let space = myName.indexOf(" ");
//     let requiredName = myName.slice(0, space);
//     console.log(requiredName);
// }

// else console.log(myName);

// Note: API issue fixed...!
/*
let userId = "914030";
let api = `https://crm.shaker.com.sa/api/customers/gethistory/${userId}`;

const apiCall = async () => {
    try {
        let res = await fetch(api);
        let dataInJson = await res.json();
        console.log(dataInJson);
    }

    catch (error) {
        console.log("Error: ", error);
    };
};

const handleTimer = () => {
    setInterval(() => {
        apiCall();
    }, 5000);
};

// handleTimer();

// window.onload = handleTimer();
*/

// Note: How to user .filter() method...!

// const filterArr = (data) => {
//     // console.log(data);

//     let modifiedData = data.filter((item) => { return item.charAt(0) == "a" });
//     return modifiedData;
// };

// let arr = ["ahmed", "kashan", "shahzaib", "arsalan qadri", "mehran", "khurram", "anees", "arsalan popa"];
// let result = filterArr(arr);
// console.log(result);

// Note: Remove duplicates from an array...!
// const removeDuplicates = (data) => {
//     // console.log(data);

//     let modifiedData = data.filter((item, index) => { return data.indexOf(item) == index });
//     return modifiedData;
// };

// let arr = ["ahmed", "kashan", "shahzaib", "arsalan", "mehran", "ahmed", "khurram", "anees", "arsalan", "ahmed"];
// let result = removeDuplicates(arr);
// console.log(result);

// Note: Function to shuffle an array...!
// const shuffleArray = (data) => {
//     // console.log(data);

//     let modifiedData = data.slice(0).sort(() => Math.random() - 0.5); // Note: Formula to shuffle an array...!
//     console.log(modifiedData);
// };

// let name = ["a", "h", "m", "e", "d"];
// shuffleArray(name);

// Note: API Testing!


// Note: Function to hide or un hide name...!

// let h1Tag = document.getElementById("username");
// const hideName = () => {
//     if (h1Tag.style.display == "none") {
//         h1Tag.style.display = "block"
//     }

//     else {
//         h1Tag.style.display = "none";
//     };
// };

// Note: Generating random id...!

// const id = Math.random().toString(36).slice(2);
// console.log(id);

// Note: Function to genrate random id...!
// const generateRandomId = () => {
//     let randomId = Math.random().toString(36).slice(2);
//     console.log(randomId);
// };
// setInterval(() => {
//     generateRandomId()
// }, 1000);
// let result = generateRandomId();
// console.log(result);

// Note: Testing purpose...!
/*
let lastOrder = [
    {
        id: 1,
        quantity: 4
    },

    {
        id: 3,
        quantity: 7
    },

    {
        id: 5,
        quantity: 1
    },
];

let currentOrder = [
    {
        id: 1,
        quantity: 2
    },

    {
        id: 2,
        quantity: 3
    },

    {
        id: 3,
        quantity: 2
    }
];

console.log('Last Order: ', lastOrder);
console.log('Current Order: ', [...currentOrder]);

const testing = () => {

    // Note: looping on last order array...!
    for (let i = 0; i < lastOrder.length; i++) {
        // console.log("i", lastOrder[i]);

        let isMatch = false;

        // Note: looping on current order array...!
        for (let j = 0; j < currentOrder.length; j++) {
            // console.log("j", currentOrder[j]);

            // Note: If last order item's id match with current order id then this condition will work...!
            if (lastOrder[i].id == currentOrder[j].id) {
                currentOrder[j].quantity = currentOrder[j].quantity + lastOrder[i].quantity;
                isMatch = true;
                break;
            };
        };

        // Note: If last order item's id  did not match with current order id then this condition will work...!
        if (!isMatch) {
            currentOrder.push(lastOrder[i]);
        };
    };

    console.log('Update Order: ', currentOrder);
};
*/

// Note: Program...!

/*
const testing = (arr, val) => {
    // console.log(arr);
    // console.log(val);

    let itemFound = false;

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);

        if (arr[i] == val) {
            itemFound = true;
            break;
        };
    };

    let result = (itemFound) ? ("Item sound successfully!") : ("Item did not found!!");
    return result;
};

let arr = [2, 4, 6, 8, 10];
let val = 6;
let result = testing(arr, val);
console.log(result);
*/

// const data = {
//     name: "ahmed"
// };
// data.name = "shahzada ahmed";

// console.log(data.name);

// let name = "ahmed";
// name = "shahzada ahmed";
// console.log(name);

// for (let i = 1; i <= 5; i++) {
//     // console.log(i);

//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// };

// const testing = () => {
//     const customFunc = () => {
//         console.log(name);
//     };

//     let name = "Shahzada Ahmed";
//     customFunc();
// };

// testing();

// x = 5;
// console.log(x);

// var x;

// const user = {
//     name: "ahmed"
// };
// user.name = "bilal";

// console.log(user.name);

// const name = "ahmed";
// name = "bilal";
// console.log(name);

// for (let i = 1; i < 6; i++) {
//     // console.log(i);

//     setTimeout(() => {
//     }, 1000);
// };