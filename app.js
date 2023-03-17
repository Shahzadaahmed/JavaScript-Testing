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

// class Company {
//     constructor(title, department) {
//         this.myTitle = title;
//         this.myDep = department;
//     };

//     gender = "Male";
//     intro() {
//         console.log(`My gender is ${this.gender}, My title is ${this.myTitle}, my department is ${this.myDep}`);
//     }
// };

// class NewCompany extends Company {
//     constructor(title, department) {
//         super(title, department);
//     }
// }

// const myCompany = new Company('Software Engineer', 'IT');
// console.log(myCompany);
// myCompany.intro();
// console.log(typeof (myCompany));

// const hasnainCompany = new Company('Accountant', 'Finance');
// console.log(hasnainCompany);
// hasnainCompany.intro();

// let ahmedNewCompany = new NewCompany('Kitchen', 'Chef');
// let ahmedNewCompany = new NewCompany();
// console.log(ahmedNewCompany);
// ahmedNewCompany.intro();

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

// Example # 01:
// let userInput = prompt("Enter any number!");
// // console.log(userInput);

// if ((userInput > 8) && (userInput < 20)) {
//     console.log(true);
// }

// else console.log(false);

// Example # 02:
// let userInput = Number(prompt("Enter any number!"));
// console.log(typeof userInput);

// if ((userInput > 10) && (typeof userInput == "number")) {
//     console.log(true);
// }

// else console.log(false);
/*
// Example # 03:
// Write a Program in JavaScript to Find the Factorial of a Number.

// Solution:
const findFactorial = (num) => {
    console.log("Number: ", num);

    // Note: Condition to check if number is less than 0...!
    if (num < 0) console.log("Number should not be less than 0");

    // Note: Condition to check if number is equal to 0...!
    else if (num == 0) console.log(`Factorial of a ${num} is 0`);

    // Note: Condition to find factorial of a number...!
    else {
        let factorialNum = 1;

        for (let i = 1; i <= num; i++) {
            // console.log(i);
            factorialNum = factorialNum * i;
        };

        console.log(`Factorial of a ${num} is ${factorialNum}`);
    };
};

let userInput = Number(prompt("Enter any number!"));
findFactorial(userInput);
*/

// Note: Program:

/*
var userInput = prompt("Enter any character or number!");
// console.log(userInput);

if (userInput >= "A" && userInput <= "Z") console.log(`${userInput} is an uppercase character!`);
else if (userInput >= "a" && userInput <= "z") console.log(`${userInput} is an lowercase character!`);
else if (userInput > 0 || userInput < -1) console.log(`${userInput} is a number!`);
*/

/*
// Note: Quiz logic program...!
let arr = ["Ahmed", "Kashan", "Mehran", "Shahzaib", "Khurram"];
let nextValue = 0;

const testing = () => {
    console.log(arr[nextValue++]);

    if (nextValue == arr.length) {
        nextValue = 0;
    };
};*/

// let names = ["ahmed", "kashan", "mehran", "khurram", "shahzaib"];
// let nextValue = 0;

// const testing = () => {
//     console.log(names[nextValue++]);

//     if (nextValue == names.length) {
//         nextValue = 0;
//     };
// };

// Note: Array testing...!

// let namesArr = ["ahmed", "mehran", "kashan", "shahzaib", "khurram", "ahmed"];
// console.log(namesArr);

// .indexOf()
// let itemIndex = namesArr.indexOf("ahmed");
// console.log(itemIndex);

// .lastIndexOf()
// let findLastIndex = namesArr.lastIndexOf("ahmed");
// console.log(findLastIndex);
















// let myName = "ahmed";

// for (let i = myName.length - 1; i >= 0; i--) {
//     console.log(myName[i]);
// }

// var randomNum = Math.floor(Math.random() * 10) + 1;
// console.log(randomNum);

// let uploadedAudio = "a/hmed/123";
// let task = uploadedAudio.slice(uploadedAudio.lastIndexOf('/') + 1);
// console.log(task);

// Note: Print list using JS...!
/*
let containerEl = document.getElementById("container");
let data = ["ahmed", "mohsin", "bilal", "shahzil", "harris"];
// console.log(data);

containerEl.innerHTML = data
    .map((item, index) => {
        return (
            `<h3 key=${index}>
                ${item}
            </h3>`
        );
    })
    .join("");
*/
// Note: Search bar functionality testing...!

// Note: Program: 11

// let userInput = prompt("Enter eny number!");
// // console.log(userInput);
// let total = 0;

// for (let i = 0; i < userInput.length; i++) {
//     // console.log(userInput[i]);
//     total = total + Number(userInput[i]);
// }

// console.log(total);

// Note: Date testing...!
// Q: Calculate how many days have beens passed since you were born...!

// let rightNow = new Date();
// // console.log(rightNow);

// let myBirthDay = "08 July 1995";
// myBirthDay = new Date(myBirthDay);
// // console.log(myBirthDay);

// // Note: Converting both dates in mili seconds...!

// let currentDateInMs = rightNow.getTime();
// let birthDateInMs = myBirthDay.getTime();

// let calculateDaysInMs = currentDateInMs - birthDateInMs;
// // console.log(comparison);

// let formulaForDays = calculateDaysInMs / (1000 * 60 * 60 * 24);
// // console.log(formulaForDays);

// formulaForDays = Math.floor(formulaForDays);
// console.log(formulaForDays);

// New Program...!
// Q: Calculate how many years have beens passed since you were born...!
/*
let currentYear = new Date().getFullYear();
// console.log(currentYear);

let birthYear = new Date("08 July 1995").getFullYear();
// console.log(birthYear);

var yearPassed = currentYear - birthYear;
console.log(yearPassed);
*/

// Q: How many days left in a year...!

/*
let currentMonth = new Date().getMonth() + 1;
// console.log(currentMonth);

let lastMonth = new Date("31 December 2022").getMonth() + 1;
// console.log(lastMonth);

var monthsLeft = lastMonth - currentMonth;
console.log(monthsLeft);
*/

// Q: How manu hours left in next class...!
/*
let rightNow = new Date();
// console.log(rightNow);

let classTime = new Date("29 August 2022 19:00:00");
// console.log(classTime);

// Note: COnverting both dates in mili seconds...!

let rightNowInMs = rightNow.getTime();
let classTimeInMs = classTime.getTime();

let calculateHours = classTimeInMs - rightNowInMs;
// console.log(calculateHours);

let hoursLeft = calculateHours / (1000 * 60 * 60);
hoursLeft = Math.floor(hoursLeft);
console.log(hoursLeft);
*/


// let heading = document.getElementById("heading");
// let namesList = ["ahmed", "kashan", "mehran", "shahzaib", "khurram"];
// let startingPoint = 0;

// setInterval(() => {
//     heading.innerHTML = namesList[startingPoint++];

//     if (startingPoint == namesList.length) {
//         startingPoint = 0;
//     };
// }, 1000);

// NOTE: Disable refresh from F5 or Ctrl + r

// document.onkeydown = function () {
//     switch (event.keyCode) {
//         case 116: //F5 button
//             console.log(event);
//             event.returnValue = false;
//             event.keyCode = 0;
//             return false;

//         case 82: //R button
//             if (event.ctrlKey) {
//                 console.log(event);
//                 event.returnValue = false;
//                 event.keyCode = 0;
//                 return false;
//             }
//     }
// }

// let numArr = new Array(1, 2, 3, 4, 5);
// let userInput = Number(prompt('Enter any number!'));

// if (numArr.includes(userInput)) console.log(true);
// else console.log(false);

// let numArr = new Array(1, 2, 3, 4, 5);
// let userInput = Number(prompt('Enter any number!'));
// let numberFound = false;

// for (let i = 0; i < numArr.length; i++) {
//     // console.log(numArr[i]);

//     if (userInput == numArr[i]) {
//         numberFound = true;
//         break;
//     };
// };

// let result = (numberFound) ? ("Number found!") : ("Number not found!");
// console.log(result);

// Q: 14

// let scores = ["12", "45", "3", "22", "34", "50"];
// let userInput = "34";

// if (scores.includes(userInput)) {
//     for (let i = 0; i < scores.length; i++) {
//         console.log(scores[i]);

//         if (userInput == scores[i]) break;
//     }
// }

// else {
//     for (let i = 0; i < scores.length; i++) {
//         console.log(scores[i]);
//     };
// };

// Q:20 (c)

// var strData = "12345"
// var length = strData.length;

// for (let i = 0; i < length; i++) {
//     console.log(strData);
//     strData = strData.slice(0, strData.length - 1);
// }

// Q:20 (b)
// var strData = "1";

// for (let i = 1; i <= 5; i++) {
//     console.log(strData);
//     strData = strData + i;
// }

// Q:6
/*
var numberOfItems = prompt("Enter no of items");
// console.log(numberOfItems);
let data = [];

for (let i = 1; i <= numberOfItems; i++) {
    // console.log(i);

    let item = prompt(`Enter item no ${i}`);
    data.push(item);
};

console.log(data);
*/

// Program:
/*
let paragraph = "Developer who has passion for web and mobile technologies. Expert at MERN Mongo DB, Express JS, React JS, and Node JS Stack. Have good command on building Mobile applications with React Native.";

const convertToCapitalize = (para) => {
    // console.log(para);

    let splitData = para.split(" ");
    // console.log(splitData);

    for (let i = 0; i < splitData.length; i++) {
        // console.log(splitData[i]);

        splitData[i] = splitData[i].charAt(0).toUpperCase() + splitData[i].slice(1).toLowerCase();
        // console.log(splitData[i]);
    };

    return splitData.join(" ");
};

let result = convertToCapitalize(paragraph);
console.log(result);
*/

// let data = {
//     myName: "mohsin",
//     title: "software engr"
// };

// let encryptData = btoa(JSON.stringify(data));
// console.log(encryptData);

// let imgEl = document.getElementById("img-tag");

// const abc = (el) => {
//     // console.log(el);
//     el.src = "./images/asghar.jpg";
//     el.alt = "asghar";
// }

// const xyz = (el) => {
//     // console.log(el);
//     el.src = "./images/ahmed.jpeg";
//     el.alt = "ahmed";
// }

// let myInfo = {
//     name: "Ahmed",
//     title: "Software Engineer",
//     company: "QBS Co",
//     myLocation: "Nazimabad # 01",
//     hasLaptop: false
// };
// // console.log(myInfo);

// let infoBucket = [];

// for (var prop in myInfo) {
//     console.log(prop);
// };

// let headingEl = document.getElementById("heading");
// // console.log(headingEl);

// setInterval(() => {
//     let date = new Date();
//     headingEl.innerHTML = date;
// }, 1000);

// Synchronus Example...!

// testing();

// console.log("1");

// function testing() {
//     console.log("Function called!");
// }

// console.log("2");

// testing();

// Note: Variables example...!

// const testing = () => {
//     var a = 'hello';

//     if (a == "hello") {
//         console.log("A success!");

//         let b = "Yo";
//         console.log(a, b);
//     };

//     console.log(b);
// };

// testing();

// let apiUrl = "https://qbookqbs.herokuapp.com/api/login";
// console.log(apiUrl);

// fetch({
//     method: "POST",
//     url: apiUrl,
//     body: userData
// })
//     .then((success) => {
//         return success.json();
//     })
//     .then((getData) => {
//         console.log(getData);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// let apiUrl = "https://jsonplaceholder.typicode.com/users";

// const apiCall = () => {
//     fetch(apiUrl)
//         .then((success) => {
//             return success.json();
//         })
//         .then((successData) => {
//             console.log(successData);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// };

// apiCall();


// let userInput = prompt('Enter user name ?');

// try {
//     if (userInput == "ahmed") {
//         console.log(userInput);
//     }

//     else {
//         throw "Invalid name!";
//     };
// }

// catch (error) {
//     console.log(error);
// };




// for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// };

// for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// };

// let uniqueId = Math.random().toString(36).slice(2);
// console.log(uniqueId);

// let apiUrl = "https://crud-web-app-mern.herokuapp.com/user/save";
// let formData = {
//     name: "John",
//     email: "john@gmail.com"
// };

// const apiCall = async () => {
//     try {
//         let response = await fetch({
//             method: "POST",
//             url: apiUrl,
//             body: formData
//         });
//         let actualData = await response.json();
//         console.log(actualData);
//     }

//     catch (error) {
//         console.log('Error Found: ', error);
//     };
// };

// apiCall();

// let user = {
//     name: "AHmed"
// };

// let userData = JSON.stringify(user);
// localStorage.setItem("User", userData);

// const removed = () => {
//     let nullData = JSON.stringify(null);
//     localStorage.setItem("User", nullData);
// };

// let arr = ['a', 'b', 'c', 'b', 'd', 'e', 'b', 'z'];
// console.log(arr.indexOf('b'));
// console.log(arr.lastIndexOf('b'));


// const reloadScreen = () => location.reload();


// var data = {
//     prop1: "",
//     prop2: {
//         name: "ahmed"
//     }
// }

// let test = data?.prop2.name;
// console.log(test);

// let dummyData = [
//     {
//         id: 1,
//         name: 'ABC',
//         area: 'Johar'
//     },
//     {
//         id: 2,
//         name: 'XYZ',
//         area: 'Gulshan'
//     },
//     {
//         id: 3,
//         name: 'AAA',
//         area: 'Nazimabad'
//     },
//     {
//         id: 4,
//         name: 'MNO',
//         area: 'Nazimabad'
//     },
//     {
//         id: 5,
//         name: 'QRS',
//         area: 'Nazimabad'
//     },
// ];
// console.log(dummyData);

// let findByArea = dummyData.filter((item, index) => { return item.area == "Johar" });
// console.log(findByArea);


// Note: How to get the last value from an array...!
// let arr = ['ahmed', 'mehran', 'kashan', 'shahzaib', 'khurram'];
// console.log(arr.at(-1));

// var fourDigitCode = Math.floor(1000 + Math.random() * 9000);
// console.log(fourDigitCode);








// Note: Practice:

// Example # 01:
// name = "practice";
// console.log(name);

// var name = "test";
// console.log(name);



// Example # 02:
// function test1(a, b) {
//     // console.log(d);

//     function test2(c, d) {
//         console.log(a, d);
//     };
// };

// test1('ahmed', 'mehran');

// // test2('Engineer', "Sales Men");



// Example # 03:
// const arr = [1, 2, 3];
// let result = arr.map((data) => data > 1);
// console.log(result);



// Example # 04:
// var test = let;
// console.log(test);



// Example # 05:
// var arr = [1, 2, 3, 6, 10];
// arr.forEach((data) => {
//     console.log(data);
// });



// Example # 06:
// let logicText = 3 > 2 > 1 == false;
// console.log(logicText);



// Example # 07:
// var obj = {
//     name: "Shahzada Ahmed",
//     title: "Software Engineer",
//     qualification: {
//         bachlor: true,
//         skills: ['Html', 'Css3', 'JavaScript', 'BootStrap'],
//         hobby : function () {
//             console.log(this.name);
//         }
//     }
// };
// obj.qualification.hobby();



// var str = "1,2,3,4,5";
// console.log(str);

// str = str.split(',');
// console.log(str);




// Note: Practice:


// var sum = 0;
// console.log(sum);

// for (var i = 0; i < 5; i++) {
//     console.log(i);
//     sum = sum + i;
// };

// console.log(sum);


// var arr = ['lion', 'tiger', 'leopard', 'elephant', 'zebra'];

// for ( var i = 0; i < arr.length; i++ ) {
//     console.log(arr[i]);
// };


// for (var i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// };


// for (var i = 1; i <= 3; i++) {
//     // console.log(`I: ${i}`);

//     for (var j = 1; j <= 3; j++) {
//         // console.log(`J: ${j}`);

//         var k = i * j;
//         console.log(`K: ${k}`);
//     };
// };



// var message = "Hello\nworld";
// alert(message);

// function changeClass() {
//     if (document.getElementById("mt-btn").className == "btn") {
//         document.getElementById("mt-btn").className = "test";
//     }

//     else {
//         document.getElementById("mt-btn").className = "btn";
//     };
// };


// let arr = [1, 2, 3, 4, 5];
// let test = arr.splice(0, arr.length);
// console.log(test);




// Note: Rest operators in JS...!

// const sumOfValues = (a, b, ...params) => {
//     console.log(a, b, params);
// };

// sumOfValues(1, 2, 3, 4, 5, 6);



// const sumOfValues = (...params) => {
//     console.log(params);
// };

// sumOfValues(1, 2, 3, 4, 5, 6);



// Note: Spraed operators in JS...!

// In JavaScript...!
// const sum = (a, b, c) => {
//     console.log(a + b + c);
// }

// const arr = [1, 2, 3];
// sum.apply(null, arr);



// In EcmaScript 6 or +...!
// const sum = (a, b, c) => {
//     console.log(a + b + c);
// }

// const arr = [1, 2, 3];
// sum(...arr);


// In JavaScript...!
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = arr1.concat(arr2);
// console.log(arr3);



// In EcmaScript 6 or +...!
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);















// In EcmaScript 6 or +...!
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// arr2.push(4, 5);

// console.log(arr1);



// console.log('Testing!');



// const friends = (a, b, ...params) => {
//     console.log(a, b, params);
// };


// friends(1, 20, "ahmed", "bilal", "faraz", "hammad", "kamran");


// var userInfo = {
//     myName: "ahmed",
//     company: "10 Pearls"
// };
// // console.log(userInfo);


// var employees = {
//     userInfo,
//     title: "Software Eng",
//     loc: "Karachi"
// };

// console.log(employees);



// const testingProgram = (number) => {

//     // Note: Checking the number is even or odd...!
//     if (number % 2 == 0) {
//         console.log(`${number} is even!`);

//         let evenNumCondition = number / 2;
//         console.log(evenNumCondition);
//         number = evenNumCondition;
//     }

//     else {
//         console.log(`${number} is odd!`);

//         let oddNumCondition = number * 3 + 1;
//         console.log(oddNumCondition);
//         number = oddNumCondition;
//     };
// };

// let num = 7;
// setInterval(() => {
//     testingProgram(7);
// }, 1000);




// let yesterday = new Date("23 November 2022");
// // console.log(yesterday.getTime());

// let res = yesterday.getTime();
// let outPut = new Date(res).toLocaleTimeString();
// console.log(outPut);



// let resTime = new Date('2022-11-24T08:10:26.407+00:00');
// console.log(resTime.toLocaleTimeString());


// for (let i = 1; i <= 5; i++) {
//     // console.log(i);

//     setTimeout(() => {
//         console.log(i);
//         // document.write(i);
//     }, i * 1000);
// };




// let str = "ahmed";
// let reverseStr = ""

// for (let i = str.length - 1; i >= 0; i--) {
//     // console.log(str[i]);
//     reverseStr = reverseStr + str[i];
// };

// if (reverseStr) console.log(reverseStr);




// let str = ["a", "h", "m", "e", "d"]

// for (let i = 0; i < str.length; i++) {
//     // console.log(str[i]);

//     let deleteLastEl = str.pop();
//     str.unshift(deleteLastEl);
//     console.log(str);
// };




// Program: How many days left in christmas 2022...!

// let christmas = "25 December 2022";
// let christmasDate = new Date(christmas);
// let rightNow = new Date();

// // console.log(rightNow);
// // console.log(christmasDate);

// // Note: Converting both dates in miliseconds...!
// let rightNowInMS = rightNow.getTime();
// let christmasDateInMS = christmasDate.getTime();

// // console.log(rightNowInMS);
// // console.log(christmasDateInMS);

// // Note: Calculating time...!
// let calculateMS = christmasDateInMS - rightNowInMS;
// // console.log(calculateMS);

// // Note: Applying day formula...!
// let daysFormula = calculateMS / (1000 * 60 * 60 * 24);
// daysFormula = Math.ceil(daysFormula);
// console.log(`${daysFormula} days left in christmas 2022!`);




// Program: How many months left in march 2023...!

// let march_2023 = "01 March 2023";
// let futureDate = new Date(march_2023);
// let rightNow = new Date();

// // Note: Converting both dates in miliseconds...!
// let rightNowInMS = rightNow.getTime();
// let futureDateInMS = futureDate.getTime();

// // console.log(rightNowInMS);
// // console.log(futureDateInMS);

// // Note: Calculating time...!
// let calculateMS = futureDateInMS - rightNowInMS;
// // console.log(calculateMS);

// // Note: Applying month formula...!
// let monthFormula = calculateMS / (1000 * 60 * 60 * 24 * 30);
// monthFormula = Math.floor(monthFormula);
// console.log(`${monthFormula} months left in march 2023!`);



// let id = "639071d3547c0f46543ccb3f"
// console.log(id.slice(id.length - 5));



// var date = new Date();
// date.setHours(11, 30, 10)
// console.log(date);


// const subtractHours = (date, hours) => {
//     // console.log("Date: ", date);
//     // console.log("Hours: ", hours);

//     date.setHours(date.getHours() - hours);
//     return date;
// };

// // subtractHours(new Date(), 1)

// let result = subtractHours(new Date(), 1);
// console.log(result);




// Note: Testing Program...!

// (function () {
//     console.log('Function is running!');
// })

// ();



// Note: Testing Program...!

// const testingProgram = () => {
//     setTimeout(() => console.log("1"), 2000);
//     console.log("2");
//     setTimeout(() => console.log("3"), 0);
//     console.log("4");
// };

// testingProgram();


// Note: Testing program...!

// const testingLogic = [2, , 4].includes(undefined);
// console.log(testingLogic);




// Note: JavaScript hack of the day...!

// let isFound = true;

// // Note: Instead of this...!
// if (isFound) {
//     console.log('Condition true!');
// };

// // Use this:
// isFound && console.log('Condition true!');


// var employees = [
//     {
//         id: 0,
//         name: "Shahzada Ahmed",
//         title: "Software Engineer"
//     },

//     {
//         id: 1,
//         name: "Bilal Khan",
//         title: "Front-End Developer"
//     },

//     {
//         id: 2,
//         name: "Aizaz Hussain",
//         title: "Ui Ux Designer"
//     },
// ];

// console.log(employees);
// console.table(employees);

// let userInput = prompt('Enter 100 or 101');
// let solveProblem = userInput - 201;
// solveProblem = Math.abs(solveProblem);
// console.log(solveProblem);




// Note: How to find intersection in A and B array...!

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];

// console.table(arr1);
// console.table(arr2);

// let intersectionArr = arr1.filter((item) => {
//     return arr2.includes(item);
// });

// console.log(intersectionArr);




// Note: How to find union in A and B array...!

// let mixedArr = [...arr1, ...arr2];
// // mixedArr = new Set([...mixedArr]);
// // console.log([...new Set([...mixedArr])]);

// let unionArr = mixedArr.filter((item, index) => {
//     // console.log(item, index);

//     return mixedArr.indexOf(item) == index;
// });

// console.log(unionArr);






// let password = "<Shahzada_Muhammad_Ahmed />";
// let securePassword = btoa(password);
// console.log(securePassword);

// let encodePassword = atob(securePassword);
// console.log(encodePassword);



// Note: How to find the power of a number in javascript:
// Example: 2, 3 = 8, means 2 * 2 * 2 = 8



// Note: JavaScript method...!
// let powerValueInJS = Math.pow(2, 3);
// console.log(powerValueInJS); // Ans: 8



// // Note: Latest EcmaScript method...!
// let powerValueInEs = 2 ** 3;
// console.log(powerValueInEs); // Ans: 8


// NOTE: JavaScript Hacks...!

// Note: Hack # 01
// Note: How to convert array into an object...!

// const technicalBrands = ["Microsoft", "Google", "Facebook", "Apple", "Youtube"];
// console.log(technicalBrands);
// console.log(typeof technicalBrands);

// const dataInObj = { ...technicalBrands };
// console.log(dataInObj);
// console.log(typeof dataInObj);



// Note: Hack # 02: Fill array with data:
// let newArr = new Array(5).fill("Hello JS");
// console.log(newArr);



// Note: Hack # 03:
// var consoleHandler = console.log.bind(document);
// consoleHandler("ahmed");
// consoleHandler("Multiply 2 numbers: ", 2 * 5);



// Note: .bind function in js...!
// let person = {
//     firstName: "Shahzada",
//     lastName: "Ahmed",
//     fullName: function () {
//         return this;
//     }
// };

// let person = {
//     firstName: "Shahzada",
//     lastName: "Ahmed",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };

// let anotherPerson = {
//     firstName: "John",
//     lastName: "Smith"
// };

// let result = person.fullName.bind(anotherPerson);
// console.log(result());





// let divEl = document.getElementById("container");
// const technicalBrands = ["Microsoft", "Google", "Facebook", "Apple", "Youtube"];
// // console.log(technicalBrands);

// divEl.innerHTML = technicalBrands.map((item, index) => {
//     // console.log(item);
//     return item;
// });


// JavaScript Tip of the day...!
// const arr = [2 + 2, 4 * 2, 15 - 17, 10 > 9];
// console.log(arr);



// let rightNow = new Date();
// let time = rightNow.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
// console.log(time);

// const techBrands = ["Microsoft", "Google", "Apple", "Facebook", "Youtube"];
// console.log(techBrands);

// let dummyData = [
//     {
//         id: 1,
//         studentName: "Ahmed",
//         marksObtained: 778,
//         totalMarks: 850
//     },

//     {
//         id: 2,
//         studentName: "Bilal",
//         marksObtained: 890,
//         totalMarks: 850
//     },

//     {
//         id: 3,
//         studentName: "Aizaz",
//         marksObtained: 550,
//         totalMarks: 850
//     },
// ];

// for (let brands of dummyData) {
//     console.log("Percentage: ", (Number(brands.marksObtained) * 100) / Number(brands.totalMarks));
// }



// for (let keys in techBrands) console.log(keys);

// Note: Way to declare variables in JavaScript...!
// var name = "Ahmed";
// var title = "Software Engineer";
// var company = "QBS Tech"
// console.log(title); Result: Software Engineer



// Note: Advance ways to declare variables in EcmaScript...!
// const [name, title, company] = ["Ahmed", "Software Engineer", "QBS Tech"];
// // console.log(title); Result: Software Engineer

// var val = 0;
// let btn = document.getElementById("test-btn");
// let h1El = document.getElementById("heading");
// h1El.innerHTML = val;

// btn.addEventListener("click", () => {
//     val++;
//     console.log(val);

//     if (val == 5) {
//         btn.removeEventListener("click", () => { console.log('Function stopped!') });
//     };
// });

// const increamentVal = () => {
//     setTimeout( () => );
//     console.log(val);
// };


// if (val <= 5) btn.addEventListener("load", increamentVal);
// else btn.removeEventListener("click", increamentVal);


// h1El.addEventListener("load", () => val++);

// let stopClock;

// const handleClock = () => {
//     stopClock = setInterval(() => {
//         let date = new Date().toLocaleTimeString();
//         h1El.innerHTML = date;
//     }, 1000);
// };

// window.addEventListener("load", handleClock);

// btn.addEventListener("click", () => {
//     console.log('Wroking!');
// });

// function removeListener() {
//     btn.removeEventListener("click", () => {
//         clearInterval(stopClock);
//     });
// };


// Note: Practicing class in JS...!

// class Employee {
//     constructor(name, title) {
//         this.name = name;
//         this.title = title;
//     };

//     department = "IT";
//     employeeIntro = () => {
//         console.log(`Hi, My name is ${this.name}, I work in ${this.department} department as a ${this.title}`)
//     };
// };

// // Note: Another class...!
// class AnotherEmployee extends Employee {
//     company = "QBS Tech"
// }

// let newEmployee = new Employee("Ahmed", "Software Engineer");
// console.log(newEmployee);
// newEmployee.employeeIntro();



// let newAnotherEmployee = new AnotherEmployee("Bilal", "Front-End Developer");
// console.log(newAnotherEmployee);
// newAnotherEmployee.employeeIntro();


// const userData = {
//     name: "Ahmed",
//     email: "",
//     password: "ahmed123"
// };

// let formValues = Object.values(userData);
// // console.log(formValues);

// let validator = formValues.includes("ahmed");
// console.log(validator);





// const userData = {
//     name: "Ahmed",
//     email: "",
//     password: "ahmed123",
//     contactNum: "03142117550",
//     address: "Naziamabad # 01"
// };



// const emailTester = (el) => console.log(el);



// var commentsList = document.getElementById('comments');
// var tmpl = document.getElementById('comment-template').innerHTML;

// function addit() {
//     commentsList.innerHTML = commentsList.innerHTML + tmpl;
// }

// function deleteItem(e) {
//     let targetEl = e.parentNode.parentNode;
//     // console.log(targetEl);

//     commentsList.removeChild(targetEl);
// };



// // Note: Way to remove decimal value in JavaScript...!
// const numVal = 12.1234;
// const removeDecPointsVal = Math.floor(numVal);
// console.log(removeDecPointsVal); // Ans: 12



// // Note: Way to remove decimal value in Advance EcmaScript...!
// const _numVal = 12.1234;
// const _removeDecPointsVal = ~~numVal;
// console.log(_removeDecPointsVal); // Ans: 12

// var firstName = "Muhammad";

// function testing() {
//     let lastName = "Ahmed";
//     var fullName = firstName + " " + lastName;
//     console.log(fullName);
// }

// console.log(fullName);
// testing();

// function diff() {
//     var firstName = "Muhammad";
//     let lastName = "Ahmed";

//     // console.log(firstName, lastName);

//     {
//         var anotherFirstName = "Shaheen";
//         let anotherLastName = "Ali";

//         // console.log(anotherFirstName, anotherLastName);
//     }

//     console.log(anotherFirstName);
//     console.log(anotherLastName);
// };

// diff();

// console.log('1 is running');

// var test = "Hello JS";

// setTimeout(() => {
//     console.log(test);
//     num++;
// }, 4000);

// setTimeout(() => console.log('2 is running'), 3000);

// setTimeout(() => {
//     console.log(num);
// }, 5000);

// var num = 2;

// let currentFilePath = window.location.pathname;
// console.log(currentFilePath);

// let targetArea = currentFilePath.slice(currentFilePath.lastIndexOf('/') + 1);
// console.log(targetArea);




// let userInput = prompt('Enter your gender!');

// switch (userInput) {

//     case "male":
//         console.log(`Your gender is: ${userInput}`);
//         break;

//     case "female":
//         console.log(`Your gender is: ${userInput}`);
//         break;

//     default:
//         console.log('No match found!');
// };
/*
let today = new Date().getDay().toString();
// console.log(`Today: ${today}`);

switch (today) {
    case "0":
        console.log("It's a Sunday");
        break;

    case "1":
        console.log("It's a Monday");
        break;

    case "2":
        console.log("It's a Tuesday");
        break;

    case "3":
        console.log("It's a Wednesday");
        break;

    case "4":
        console.log("It's a Thursday");
        break;

    case "5":
        console.log("It's a Friday");
        break;

    case "6":
        console.log("It's a Saturday");
        break;

    default:
        console.log("Invalid Date!");
};
*/
/*
let apiUrl = "https://jsonplaceholder.typicode.com/users";
// console.log(apiUrl);

const apiCall = () => {
    fetch(apiUrl)
        .then((res) => {
            // console.log(success);
            return res.json();
        })
        .then((actualData) => {
            console.log("Data: ", actualData);
        })
        .catch((err) => {
            console.log("Error occured while api integration: ", err);
        });
};

apiCall();
*/

/*
let learningPromise = new Promise((resolve, reject) => {
    let data = ["Tom and Jerry", "Pokemon", "Dragon Ball Z", "Beyblade", "Spieder Man"];
    let age = prompt("Enter your age!");

    if (age >= 18) {
        resolve(data);
    }

    else {
        reject("Sorry! You are not eligibale!");
    };
});

learningPromise
    .then((res) => {
        console.log("Data: ", res);
    })
    .catch((err) => {
        console.log("Promise rejected: ", err);
    });
*/


// const data = ["a", "b", "c"];
// const objData = { ...data };
// console.log(objData);


// let user = "john";

// try {
//     if (user == "John") console.log('Name is correct');
//     else throw "Invalid Name!";
// }

// catch (error) {
//     console.log(error);
// };

// // NOTE: Use promise with async await instead of promise chain...!

// const runAfterTwoSeconds = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Resolved Successfully!");
//         }, 2000);
//     });
// };

// // Note: Asynchronus handler...!
// const asyncCall = async () => {
//     console.log('Async calling!');

//     const result = await runAfterTwoSeconds();
//     console.log(result); // Output: Resolved Successfully!
// };

// asyncCall();

// console.log(navigator.geolocation);

// let inputEl = document.getElementById("input");

// inputEl.addEventListener("keypress", (e) => {
//     // console.log(e);

//     if (e.key == "Enter") alert('Hello World!');
// });


// const handlePromise = () => {
//     let users = [
//         {
//             id: 1,
//             name: "John"
//         },

//         {
//             id: 2,
//             name: "Smith"
//         },

//         {
//             id: 3,
//             name: "Andrew"
//         },
//     ];

//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(JSON.stringify(users));
//         }, 2000);
//     });
// };

// const promiseCall = async () => {
//     console.log('Promise calling!');

//     let res = await handlePromise();
//     let actualData = JSON.parse(res);
//     console.log(actualData);
// };

// promiseCall();


// let numArr = [2, 2, 3, 4, 6, 1, 5, 5, 5, 2];
// // console.log(numArr);
// let counts = {};

// for (let num of numArr) {
//     // console.log(num);

//     counts[num] = counts[num] ? counts[num] + 1 : 1;
// };

// console.log(counts);


// let namesArr = ["ahmed", "mehran", "kashan", "ahmed", "arsalan", "mehran", "ahmed", "amees"];
// let counts = {};

// for (let el of namesArr) {
//     // console.log(el);

//     counts[el] = counts[el] ? counts[el] + 1 : 1;
// };

// console.log(counts);

// let str = "";
// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;

//     if (i == 5) break;
// };

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;

// while (cars[i]) {
//     console.log(cars[i]);
//     i++;
// };



// let i = 1;
// let table = 2;

// while (i <= 10) {
//     console.log(`${table} x ${i} = ${table * i}`);
//     i++
// };



// let user = {
//     firstName: "ahmed",
//     firstName: "rana",
//     firstName: "ali"
// };

// console.log(user);

// const arr = [2, 2, 5, 1, 6, 5, 7, 3, 5, 1, 9];
// console.log(arr);

// const counts = {};
// console.log(counts);

// let aArr = ["a", "b", "c", "d"];
// let bArr = ["c", "d", "e", "f"];

// for (let i = 0; i < aArr.length; i++) {
//     console.log('i: ', aArr[i]);

//     for (let j = 0; j < bArr.length; j++) {
//         console.log("j: ", bArr[j]);
//     };
// };

// for (let i = 0; i < aArr.length; i++) {
//     // console.log(aArr[i]);
//     bArr.push(aArr[i]);
// };

// console.log(bArr);

// let aArr = ["a", "b", "c", "d"];
// let bArr = ["c", "d", "e", "f"];

// console.log(aArr, bArr);

// for (let i = 0; i < bArr.length; i++) {
//     // console.log(bArr[i]);
//     aArr.push(bArr[i]);
// };

// console.log(aArr);

// let arr = ["a", "b", "c", "d"];
// let initialVal = 0;

// const nextVal = () => {
//     console.log(arr[initialVal++]);

//     if (initialVal == arr.length) {
//         initialVal = 0;
//     }
// };


// const arr = ["lion", "cat", "lion", "tiger", "zebra", "lion", "mouse", "cat"];
// let counts = {};

// console.log(counts);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };

// for (let key in arr) {
//     console.log(key);
// };

// for (let elements of arr) {
//     console.log(elements);
// };



// const arr = ["lion", "cat", "lion", "tiger", "zebra", "lion", "mouse", "cat"];
// let counts = {};

// for (let el of arr) {
//     counts[el] = counts[el] ? counts[el] + 1 : 1;
// };

// console.log(counts);



// const test = (val1, val2, ...restParameters) => {
//     console.log(val1, val2);
//     console.log(restParameters);
// };

// const test = (...restParameters) => {
//     console.log(restParameters);
// };

// test("ahmed", "computer", "systems", "karachi", "ali", "lion");

// let slots = [
//     {
//         "time": "11:00 AM",
//         "isBooked": false,
//         "userId": null,
//         "dayId": "63e4a926ad68c7b8b8068fd4"
//     },

//     {
//         "time": "11:30 AM",
//         "isBooked": false,
//         "userId": null,
//         "dayId": "63e4a926ad68c7b8b8068fd4"
//     },

//     {
//         "time": "12:00 PM",
//         "isBooked": false,
//         "userId": null,
//         "dayId": "63e4a926ad68c7b8b8068fd4"
//     },

//     {
//         "time": "12:30 PM",
//         "isBooked": false,
//         "userId": null,
//         "dayId": "63e4a926ad68c7b8b8068fd4"
//     },

//     {
//         "time": "01:00 PM",
//         "isBooked": false,
//         "userId": null,
//         "dayId": "63e4a926ad68c7b8b8068fd4"
//     }
// ];

// let appointments = [
//     {
//         _id: "63e9fa8b448afaa6ca7caec1",
//         userId: "63e608c69b1c98908047286c",
//         serviceLeaderId: "63e4a926ad68c7b8b8068fd1",
//         businessPartnerId: "63e4a926ad68c7b8b8068fd1",
//         dayId: "63e4a926ad68c7b8b8068fd4",
//         charges: '500',
//         appointmentDate: '1676574000000',
//         appointmentTime: '11:30 AM',
//         bookedBy: "63e608c69b1c98908047286c",
//         paymentType: 'cash',
//         isPaid: false,
//         bankDetails: null,
//         ticket: null,
//         swapTicket: null
//     },

//     {
//         _id: "63ea149d8b75881a8a911fb1",
//         userId: "63cfc69e2b2ee0460e486442",
//         serviceLeaderId: "63e4a926ad68c7b8b8068fd1",
//         businessPartnerId: "63e4a926ad68c7b8b8068fd1",
//         dayId: "63e4a926ad68c7b8b8068fd4",
//         charges: '500',
//         appointmentDate: '1676574000000',
//         appointmentTime: '12:00 PM',
//         bookedBy: "63cfc69e2b2ee0460e486442",
//         paymentType: 'cash',
//         isPaid: false,
//         bankDetails: null,
//         ticket: null,
//         swapTicket: null
//     }
// ];

// console.log(slots);
// console.log(appointments);

// for (let appointmentsData of appointments) {
//     // console.log(appointmentsData);

//     for (let slotsData of slots) {
//         // console.log(slotsData);

//         if ((slotsData.dayId == appointmentsData.dayId) && (slotsData.time == appointmentsData.appointmentTime)) {
//             slotsData.isBooked = true;
//         };
//     };
// };

// console.log("Required slots: ", slots);


// let rightNow = new Date();
// rightNow.setDate(rightNow.getDate() - 1);
// console.log(rightNow);


// let spanEl = document.getElementById("span-tag");
// let defaultFontSize = spanEl.style.fontSize;
// let extractNumber = Number(defaultFontSize.match(/\d/g).join(""));

// const increaseFontSize = () => {
//     extractNumber++;
//     console.log(extractNumber);

//     spanEl.style.fontSize = extractNumber + "px";
// };

// setInterval(increaseFontSize, 1000);


// let h1 = document.getElementById("clock");

// setInterval(() => {
//     let date = new Date().toLocaleTimeString();
//     h1.innerHTML = date;
// }, 1000);


// let rightNow = new Date("08 July 1996");
// console.log(rightNow);
// console.log(typeof rightNow);

// let date = rightNow.getDate();
// let month = rightNow.getMonth();
// let year = rightNow.getFullYear();

// let fullDate = date + ":" + month + ":" + year;
// console.log(fullDate.getTime());
// console.log(typeof fullDate);

// let dateInMS = rightNow.getTime();
// console.log(dateInMS);
// console.log(typeof dateInMS);

// let customDate = new Date("6/3/2023");
// console.log(customDate);
// console.log(typeof customDate);

// let dateInMS = customDate.getTime();
// console.log(dateInMS);
// console.log(typeof dateInMS);

const apiCall = async () => {
    // let apiUrl = "https://web-production-5060.up.railway.app/api/appointments/fetch/all";
    let apiUrl = "http://localhost:3010/api/appointments/fetch/all";
    // let apiUrl = "http://192.168.0.102:3010/api/appointments/fetch/all";

    try {
        let response = await fetch(apiUrl);
        let jsonData = await response.json();
        console.log(jsonData);
    }

    catch (error) {
        console.log("Something went wrong while api integrating: ", error);
    };
};

apiCall();