// // Note: Function to validate email address...!

// /*
// let userInput = prompt('Enter email address!');
// // console.log(userInput);

// let validEmailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// if (userInput.match(validEmailFormat)) {
//     console.log('Valid Format!');
// }

// else {
//     console.log('Invalid Format!');
// }
// */

// // Note: Function to validate saudii arabia mobile number...!

// /*
// let userInput = prompt('Enter mobile number!');
// console.log(userInput);

// var regex = new RegExp(/^(05)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/);

// if (userInput.match(regex)) {
//     console.log('Valid Number!');
// }

// else {
//     console.log('Invalid Number!');
// }
// */

// // let userInput = "Zdkjfghio";
// // let valueChecker = () => {
// //     if (userInput === "Z1") {
// //         return 'Request';
// //     }

// //     else if (userInput === "Z2") {
// //         return 'Installation';
// //     }

// //     else if (userInput === "Z3") {
// //         return 'Complaint';
// //     }

// //     else if (userInput === "Z4") {
// //         return 'Inquiry';
// //     }

// //     else {
// //         return undefined;
// //     }
// // }

// // let result = valueChecker();
// // console.log(result);

// /*
// // Note: 16 deigits credit card number...!
// const creditCard = '4111111111114324';
// // console.log(creditCard);

// // Note: Get last four digits...!
// const lastFourDigits = creditCard.slice(-4);
// // console.log(lastFourDigits);

// const maskedNumber = lastFourDigits.padStart(creditCard.length, '*');
// console.log(maskedNumber);
// */


// // Q: Program:

// // Solution:
// /*
// let word = 'saylani';

// let strToArr = word.split("");
// // console.log(strToArr);

// for (let i = 0; i < strToArr.length; i++) {
//     // console.log(strToArr[i]);

//     let lastItem = strToArr.pop();
//     strToArr.unshift(lastItem);
//     // console.log(strToArr);

//     let arrToStr = strToArr.join("");
//     console.log(arrToStr);
// }
// */

// // Note: Testing purpose...!
// // let name = "ahmed";
// // let has = name.includes('m');

// // console.log(has);

// // Testing local storage...!

// // let friends = ['ahmed', 'kashan', 'shahzaib', 'mehran', 'khurram'];
// // console.log(friends);

// // let dataInStringFormat = JSON.stringify(friends);
// // console.log(dataInStringFormat);

// // localStorage.setItem('Data', dataInStringFormat);

// // let header = document.getElementById("heading");
// // console.log('Testing!');

// // setTimeout(() => {
// //     header.style.display = "none";
// // }, 5000);

// // console.log('Testing!');

// // let nums = [1, 2, 3, 4, 5];
// // let count = 0;

// // for (let i = 0; i < nums.length; i++) {
// //     count = count + nums[i];
// // }

// // console.log(count);

// // Note: Testing!

// // let arr = [
// //     {
// //         price: 50,
// //         quantity: 3
// //     },

// //     {
// //         price: 20,
// //         quantity: 4
// //     },

// //     {
// //         price: 10,
// //         quantity: 6
// //     },
// // ];
// // // console.log(arr);
// // let count = 0;

// // for (let i = 0; i < arr.length; i++) {
// //     // console.log(arr[i]);

// //     arr[i].total = arr[i].quantity * arr[i].price;
// //     console.log(arr[i]);

// //     count = count + arr[i].total;
// // }

// // console.log(count);

// // Note: Learning class...!

// // class Company {
// //     constructor(title, department) {
// //         this.myTitle = title;
// //         this.myDep = department;
// //     };

// //     gender = "Male";
// //     intro() {
// //         console.log(`My gender is ${this.gender}, My title is ${this.myTitle}, my department is ${this.myDep}`);
// //     }
// // };

// // class NewCompany extends Company {
// //     constructor(title, department) {
// //         super(title, department);
// //     }
// // }

// // const myCompany = new Company('Software Engineer', 'IT');
// // console.log(myCompany);
// // myCompany.intro();
// // console.log(typeof (myCompany));

// // const hasnainCompany = new Company('Accountant', 'Finance');
// // console.log(hasnainCompany);
// // hasnainCompany.intro();

// // let ahmedNewCompany = new NewCompany('Kitchen', 'Chef');
// // let ahmedNewCompany = new NewCompany();
// // console.log(ahmedNewCompany);
// // ahmedNewCompany.intro();

// // slice() method in array...
// // let friends = ["ahmed", "bilal", "shahzil", "asghar", "ali", "hasnain"];
// // console.log(friends);

// // let updateList = friends.slice(0, 3);
// // console.log(updateList);

// // Question:
// /*
// let friends = ["ahmed", "bilal", "shahzil", "asghar", "ali", "hasnain"];
// // console.log(friends);

// let userInput = prompt("Enter your friend name ?").toLowerCase();
// // console.log(userInput);

// let friendFlag = false;

// for (let i = 0; i < friends.length; i++) {
//     // console.log(friends[i]);

//     if (friends[i] == userInput) {
//         friendFlag = true;
//         break;
//     }
// }

// if (!friendFlag) {
//     console.log('Friend Not Found!');
// }

// else {
//     console.log('Friend Found!');
// }
// */

// // Note: Another method...!

// /*
// let friends = ["ahmed", "bilal", "shahzil", "asghar", "ali", "hasnain"];
// // console.log(friends);

// let userInput = prompt("Enter your friend name ?").toLowerCase();
// // console.log(userInput);

// let result = friends.filter((item, index) => {
//     return item.includes(userInput);
// });

// // console.log(result);

// if (result.length > 0) {
//     console.log('Friend Found!');
// }

// else {
//     console.log('Friend Not Found!');
// }
// */

// // Note: Question: Find tghe largest number from an array...!

// // let numArr = [2, 16, 63, 9, 55];
// // console.log(numArr);

// // let largestNum = 0;

// // for (let i = 0; i <= largestNum; i++) {
// //     // console.log(largestNum);
// //     // console.log(i);
// //     // console.log(numArr[i]);

// //     if (numArr[i] > largestNum) {
// //         largestNum = numArr[i];
// //     }
// // }

// // console.log(largestNum);

// // Note: Question:

// // let userInput = 10;
// // // console.log(userInput);

// // for (let i = userInput; i >= 0; i = i - 0.5) { console.log(i) };

// // Note: Question:
// /*
// let count = 20;
// // console.log(count);

// for (let i = 0; i <= count; i++) {
//     // console.log(i);

//     if (i % 2 == 0) {
//         console.log(i, ' is even number.');
//     }

//     else {
//         console.log(i, ' is odd number.');
//     }
// }
// */

// // Note: Question:
// /*
// let usersArr = [];

// const addUser = () => {
//     let email = prompt("Enter your email!");
//     let password = prompt("Enter your password!");
//     // console.log(userInput);

//     let obj = {
//         email: email,
//         pass: password
//     };
//     // console.log(obj);

//     // Note: Saving data in array...!
//     usersArr.push(obj);
//     console.log(usersArr);

//     // Note: Saving data in Local Storage...!
//     let datatoStr = JSON.stringify(usersArr);
//     localStorage.setItem("Users List", datatoStr);
// };

// const getAllUser = () => {
//     let getData = localStorage.getItem("Users List");
//     let dataInJSON = JSON.parse(getData);
//     console.log(dataInJSON);
// }
// */

// // Note: Important question:
// /*
// let currentDate = new Date();
// // console.log(currentDate);

// let ramzanDate = new Date('June 05, 2015');
// // console.log(ramzanDate);

// // Note: Converting both dates in miliseconds...!
// const currentDateInMs = currentDate.getTime();
// // console.log(currentDateInMs);

// const ramzanDateInMs = ramzanDate.getTime();
// // console.log(ramzanDateInMs);

// const remainingValueInMS = currentDateInMs - ramzanDateInMs;
// // console.log(remainingValueInMS);

// let daysFormula = remainingValueInMS / (1000 * 60 * 60 * 24);
// // console.log(daysFormula);

// daysFormula = Math.floor(daysFormula);
// console.log(daysFormula);
// */

// // Note: Question!
// /*
// let arr = ['a', 'h', 'm', 'e', 'd'];

// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr);

//     let lastLetter = arr.pop();
//     arr.unshift(lastLetter);
//     console.log(arr);
// }*/

// // Note: Learning functions...!

// // function eatingTime(food) {
// //     // console.log(food);
// //     if (food !== "") {
// //         console.log('Shahzil is eating ', food);
// //     }
// // };

// // eatingTime('Halwa Poori');
// // eatingTime();
// // eatingTime('Chicken Biryani');

// // function addition(num1, num2) {
// //     let addValues = num1 + num2;
// //     console.log(addValues);
// // }

// // let value1 = Number(prompt("Enter number!"));
// // let value2 = Number(prompt("Enter another number!"));
// // addition(value1, value2);


// // let result = function greeting() {
// //     let userInput = prompt('Enter message');
// //     return userInput;
// // };

// // console.log(result);

// // function greeting() {
// //     return message;
// // };

// // let userInput = prompt('Enter message');
// // let result = greeting(userInput);
// // console.log(result);

// // Solve the equation: (a + b)2 = a2 + 2ab + b2;
// /*
// function squareFormula(value) {
//     return value * value;
// }

// function equation(a, b) {
//     // console.log(a, b);

//     let formula = squareFormula(a) + (2 * a * b) + squareFormula(b);
//     return formula;
// }

// let num1 = Number(prompt("Enter value 1"));
// let num2 = Number(prompt("Enter value 2"));

// let solution = equation(num1, num2);
// console.log(solution);
// */

// // let heading = document.getElementById("heading");
// // let style = window.getComputedStyle(heading, null).getPropertyValue('font-size');
// // let currentSize = parseFloat(style);
// // console.log(currentSize);

// // setInterval(() => {
// //     let heading = document.getElementById("heading");
// //     let style = window.getComputedStyle(heading, null).getPropertyValue('font-size');
// //     let currentSize = parseFloat(style);
// //     heading.style.fontSize = (currentSize + 1) + 'px';
// // }, 1000);

// // let friends = ['ahmed', 'mehran', 'kashan', 'khurram', 'shahzaib'];
// // let colors = ['blue', 'yellow', 'orange', 'green', 'lightblue'];

// // setInterval(() => {
// //     let randomPerson = Math.floor(Math.random() * 5);
// //     // console.log(friends[randomPerson]);
// //     heading.innerHTML = friends[randomPerson];

// //     // let style = window.getComputedStyle(heading, null).getPropertyValue('color');
// //     // let currentSize = parseFloat(style);
// //     // heading.style.fontSize = (currentSize + 1) + 'px';
// // }, 1000);


// // let friends = ["ahmed", "akbar", "asghar", "zeeshan", "umer"];

// // setInterval(() => {
// //     let randomPerson = Math.floor(Math.random() * friends.length);
// //     heading.innerHTML = friends[randomPerson];
// // }, 1000);

// // let numValue = 0;
// // // console.log(numValue);

// // let timeInterval = setInterval(() => {
// //     numValue++;
// //     heading.innerHTML = numValue;

// //     if (numValue == 404) {
// //         clearInterval(timeInterval);
// //     }
// // }, 1);

// // for (let i = 1; i <= 20; i++) {
// //     console.log(i);

// //     if (i == 10) {
// //         break;
// //     };
// // };

// // let vowels = ["a", "e", "i", "o", "u"];
// // // console.log(vowels);

// // const countVowel = (str) => {
// //     let count = 0;

// //     for (let letter of str.toLowerCase()) {
// //         // console.log(letter);

// //         if (vowels.includes(letter)) {
// //             count++;
// //         };
// //     };
// //     return count;
// // };

// // const string = "Ahmed";
// // let result = countVowel(string);
// // console.log(result);

// // let vowels = ["a", "e", "i", "o", "u"];

// // for (let i in vowels) {
// //     console.log(i);
// // }

// // const char = prompt("Enter any character!").toLowerCase();
// // const vowels = ["a", "e", "i", "o", "u"];

// // if (vowels.includes(char)) console.log(char, "is a vowel");
// // else console.log(char, "is not a vowel");

// // if ((char == "a") || (char == "e") || (char == "i") || (char == "o") || (char == "u")) console.log(char, "is a vowel");
// // else console.log(char, "is not a vowel");

// // if ((char == vowels[0]) || (char == vowels[1]) || (char == vowels[2]) || (char == vowels[3]) || (char == vowels[4])) console.log(char, "is a vowel");
// // else console.log(char, "is not a vowel");

// // const capitalizeFirstChar = (data) => {
// //     // console.log(data);

// //     let strToArr = data.split(" ");
// //     // console.log(strToArr);  // Converting string data into array data...!

// //     for (let i = 0; i < strToArr.length; i++) {
// //         // console.log(strToArr[i]);

// //         strToArr[i] = strToArr[i][0].toUpperCase() + strToArr[i].slice(1).toLowerCase();
// //         // console.log(strToArr[i]); // Get required data...!
// //     };

// //     let arrToStr = strToArr.join(" ");
// //     // console.log(arrToStr); // Converting array data into string data...!

// //     return arrToStr;
// // };

// // // const paragraph = prompt("Enter any text!").toLowerCase();
// // const paragraph = "my name is shahzada muhammad ahmed rana";
// // const result = capitalizeFirstChar(paragraph);
// // console.log(result);

// // let str = 'ahmed';
// // console.log(str);

// // str = str.split();
// // console.log(str);

// // str = str.split("");
// // console.log(str);

// // let nameArr = ["a", "h", "m", "e", "d"];
// // console.log(nameArr);

// // let arrToStr = nameArr.join();
// // console.log(arrToStr);

// // let arrToStr = nameArr.join("");
// // console.log(arrToStr);

// // let names = ["ahmed", "yousuf", "akbar", "asghar", "zeeshan"];
// // // console.log(names);

// // let officeMates = ["ahsan", "bilal", "aizaz", "sheroz", "shazil"];

// // for (let i = 0; i < names.length; i++) {
// //     // console.log("Names", names[i]);

// //     for (let j = 0; j < officeMates.length; j++) {
// //         console.log(names[i], officeMates[j]);
// //     };
// // };


// // const checkDuplicate = (data) => {
// //     // console.log(data);

// //     let duplicateFound = false;
// //     let userInput = prompt("What is your name ?");
// //     // console.log(userInput);

// //     if (data.includes(userInput)) return false
// //     else return true;
// // };

// // let names = ["ahmed", "yousuf", "akbar", "asghar", "zeeshan"];
// // // console.log(names);
// // let result = checkDuplicate(names);
// // console.log(result);

// // let names = ["ahmed", "yousuf", "akbar", "asghar", "zeeshan", "yousuf", "asad", "yousuf", "bisma", "faraz"];
// // console.log(names);

// // console.log(names.indexOf("yousuf")); // Return the index of the item in an array, First value will return if there are multiples, -1 will return if there are no value...!
// // console.log(names.lastIndexOf("yousuf"));

// // let name = "ahmed";
// // console.log(name);

// // console.log(name.indexOf("m"));
// // console.log(name.charAt(2));

// let myName = "shahzada ahmed";
// myName.replace("shahzada", "muhammad");
// console.log(myName);

// // Note: Spread or rest operators...!
// // let names = ["ahmed", "yousuf", "akbar", "asghar", "zeeshan"];
// // console.log(names);

// // names.push("bilal");
// // console.log(names);
// // console.log([...names]);

// // const testing = (name1, name2, ...restNames) => {
// //     console.log(name1, name2);
// //     console.log(...restNames);
// // };

// // testing("ahmed", "sheroz", "shahzil", "ahsan", "faraz", "hasnain", "rana");

// // Note: How to remove falsy values from an array...!
// // let arr = ["ahmed", true, "", null, "zeeshan", "", undefined, 1996];
// // console.log(arr.filter(Boolean));

// // let names = ["ahmed", "yousuf", "akbar", "asghar", "zeeshan", "yousuf", "akbar", "asghar", "zeeshan", "yousuf", "akbar", "asghar", "zeeshan", "ali"];
// // console.log(names[names.length - 1]);
// // console.log(names.at(5));

// // let userInput = prompt("Enter your number");
// // let validMobileFormat = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm;
// // let result = (userInput.match(validMobileFormat)) ? (true) : (false);

// // console.log(result);

// // Note: api call request practice...!
// /*
// let api = "https://jsonplaceholder.typicode.com/posts";
// console.log("API: ", api);

// fetch(api)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// */

// // Note: Code to check the internet status (MOST IMPORTANT)
// // if (navigator.onLine) console.log('online!');
// // else console.log('offline!');

// // Note: Code to check the internet status while it will change automatically (MOST IMPORTANT)
// // window.addEventListener("online", (e) => console.log('You are online', e));
// // window.addEventListener("offline", (e) => console.log('You are offline', e));

// // const oddNumbers = (arr) => {
// //     // console.log(arr);

// //     let filterOddnum = arr.filter(data => data % 2 == 0);
// //     console.log(filterOddnum);
// // };

// // let numArr = [1, 2, 3, 4, 5];
// // oddNumbers(numArr);

// // let myName = prompt("Enter your name!");

// // if (myName.includes(" ")) {
// //     let space = myName.indexOf(" ");
// //     let requiredName = myName.slice(0, space);
// //     console.log(requiredName);
// // }

// // else console.log(myName);

// // Note: API issue fixed...!
// /*
// let userId = "914030";
// let api = `https://crm.shaker.com.sa/api/customers/gethistory/${userId}`;

// const apiCall = async () => {
//     try {
//         let res = await fetch(api);
//         let dataInJson = await res.json();
//         console.log(dataInJson);
//     }

//     catch (error) {
//         console.log("Error: ", error);
//     };
// };

// const handleTimer = () => {
//     setInterval(() => {
//         apiCall();
//     }, 5000);
// };

// // handleTimer();

// // window.onload = handleTimer();
// */

// // Note: How to user .filter() method...!

// // const filterArr = (data) => {
// //     // console.log(data);

// //     let modifiedData = data.filter((item) => { return item.charAt(0) == "a" });
// //     return modifiedData;
// // };

// // let arr = ["ahmed", "kashan", "shahzaib", "arsalan qadri", "mehran", "khurram", "anees", "arsalan popa"];
// // let result = filterArr(arr);
// // console.log(result);

// // Note: Remove duplicates from an array...!
// // const removeDuplicates = (data) => {
// //     // console.log(data);

// //     let modifiedData = data.filter((item, index) => { return data.indexOf(item) == index });
// //     return modifiedData;
// // };

// // let arr = ["ahmed", "kashan", "shahzaib", "arsalan", "mehran", "ahmed", "khurram", "anees", "arsalan", "ahmed"];
// // let result = removeDuplicates(arr);
// // console.log(result);

// // Note: Function to shuffle an array...!
// // const shuffleArray = (data) => {
// //     // console.log(data);

// //     let modifiedData = data.slice(0).sort(() => Math.random() - 0.5); // Note: Formula to shuffle an array...!
// //     console.log(modifiedData);
// // };

// // let name = ["a", "h", "m", "e", "d"];
// // shuffleArray(name);

// // Note: API Testing!


// // Note: Function to hide or un hide name...!

// // let h1Tag = document.getElementById("username");
// // const hideName = () => {
// //     if (h1Tag.style.display == "none") {
// //         h1Tag.style.display = "block"
// //     }

// //     else {
// //         h1Tag.style.display = "none";
// //     };
// // };

// // Note: Generating random id...!

// // const id = Math.random().toString(36).slice(2);
// // console.log(id);

// // Note: Function to genrate random id...!
// // const generateRandomId = () => {
// //     let randomId = Math.random().toString(36).slice(2);
// //     console.log(randomId);
// // };
// // setInterval(() => {
// //     generateRandomId()
// // }, 1000);
// // let result = generateRandomId();
// // console.log(result);

// // Note: Testing purpose...!
// /*
// let lastOrder = [
//     {
//         id: 1,
//         quantity: 4
//     },

//     {
//         id: 3,
//         quantity: 7
//     },

//     {
//         id: 5,
//         quantity: 1
//     },
// ];

// let currentOrder = [
//     {
//         id: 1,
//         quantity: 2
//     },

//     {
//         id: 2,
//         quantity: 3
//     },

//     {
//         id: 3,
//         quantity: 2
//     }
// ];

// console.log('Last Order: ', lastOrder);
// console.log('Current Order: ', [...currentOrder]);

// const testing = () => {

//     // Note: looping on last order array...!
//     for (let i = 0; i < lastOrder.length; i++) {
//         // console.log("i", lastOrder[i]);

//         let isMatch = false;

//         // Note: looping on current order array...!
//         for (let j = 0; j < currentOrder.length; j++) {
//             // console.log("j", currentOrder[j]);

//             // Note: If last order item's id match with current order id then this condition will work...!
//             if (lastOrder[i].id == currentOrder[j].id) {
//                 currentOrder[j].quantity = currentOrder[j].quantity + lastOrder[i].quantity;
//                 isMatch = true;
//                 break;
//             };
//         };

//         // Note: If last order item's id  did not match with current order id then this condition will work...!
//         if (!isMatch) {
//             currentOrder.push(lastOrder[i]);
//         };
//     };

//     console.log('Update Order: ', currentOrder);
// };
// */

// // Note: Program...!

// /*
// const testing = (arr, val) => {
//     // console.log(arr);
//     // console.log(val);

//     let itemFound = false;

//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);

//         if (arr[i] == val) {
//             itemFound = true;
//             break;
//         };
//     };

//     let result = (itemFound) ? ("Item sound successfully!") : ("Item did not found!!");
//     return result;
// };

// let arr = [2, 4, 6, 8, 10];
// let val = 6;
// let result = testing(arr, val);
// console.log(result);
// */

// // const data = {
// //     name: "ahmed"
// // };
// // data.name = "shahzada ahmed";

// // console.log(data.name);

// // let name = "ahmed";
// // name = "shahzada ahmed";
// // console.log(name);

// for (let i = 1; i <= 5; i++) {
//     // console.log(i);

//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// };

// // const testing = () => {
// //     const customFunc = () => {
// //         console.log(name);
// //     };

// //     let name = "Shahzada Ahmed";
// //     customFunc();
// // };

// // testing();

// // x = 5;
// // console.log(x);

// // var x;

// // const user = {
// //     name: "ahmed"
// // };
// // user.name = "bilal";

// // console.log(user.name);

// // const name = "ahmed";
// // name = "bilal";
// // console.log(name);

// // for (let i = 1; i < 6; i++) {
// //     // console.log(i);

// //     setTimeout(() => {
// //     }, 1000);
// // };

// // Example # 01:
// // let userInput = prompt("Enter any number!");
// // // console.log(userInput);

// // if ((userInput > 8) && (userInput < 20)) {
// //     console.log(true);
// // }

// // else console.log(false);

// // Example # 02:
// // let userInput = Number(prompt("Enter any number!"));
// // console.log(typeof userInput);

// // if ((userInput > 10) && (typeof userInput == "number")) {
// //     console.log(true);
// // }

// // else console.log(false);
// /*
// // Example # 03:
// // Write a Program in JavaScript to Find the Factorial of a Number.

// // Solution:
// const findFactorial = (num) => {
//     console.log("Number: ", num);

//     // Note: Condition to check if number is less than 0...!
//     if (num < 0) console.log("Number should not be less than 0");

//     // Note: Condition to check if number is equal to 0...!
//     else if (num == 0) console.log(`Factorial of a ${num} is 0`);

//     // Note: Condition to find factorial of a number...!
//     else {
//         let factorialNum = 1;

//         for (let i = 1; i <= num; i++) {
//             // console.log(i);
//             factorialNum = factorialNum * i;
//         };

//         console.log(`Factorial of a ${num} is ${factorialNum}`);
//     };
// };

// let userInput = Number(prompt("Enter any number!"));
// findFactorial(userInput);
// */

// // Note: Program:

// /*
// var userInput = prompt("Enter any character or number!");
// // console.log(userInput);

// if (userInput >= "A" && userInput <= "Z") console.log(`${userInput} is an uppercase character!`);
// else if (userInput >= "a" && userInput <= "z") console.log(`${userInput} is an lowercase character!`);
// else if (userInput > 0 || userInput < -1) console.log(`${userInput} is a number!`);
// */

// /*
// // Note: Quiz logic program...!
// let arr = ["Ahmed", "Kashan", "Mehran", "Shahzaib", "Khurram"];
// let nextValue = 0;

// const testing = () => {
//     console.log(arr[nextValue++]);

//     if (nextValue == arr.length) {
//         nextValue = 0;
//     };
// };*/

// // let names = ["ahmed", "kashan", "mehran", "khurram", "shahzaib"];
// // let nextValue = 0;

// // const testing = () => {
// //     console.log(names[nextValue++]);

// //     if (nextValue == names.length) {
// //         nextValue = 0;
// //     };
// // };

// // Note: Array testing...!

// // let namesArr = ["ahmed", "mehran", "kashan", "shahzaib", "khurram", "ahmed"];
// // console.log(namesArr);

// // .indexOf()
// // let itemIndex = namesArr.indexOf("ahmed");
// // console.log(itemIndex);

// // .lastIndexOf()
// // let findLastIndex = namesArr.lastIndexOf("ahmed");
// // console.log(findLastIndex);
















// // let myName = "ahmed";

// // for (let i = myName.length - 1; i >= 0; i--) {
// //     console.log(myName[i]);
// // }

// // var randomNum = Math.floor(Math.random() * 10) + 1;
// // console.log(randomNum);

// // let uploadedAudio = "a/hmed/123";
// // let task = uploadedAudio.slice(uploadedAudio.lastIndexOf('/') + 1);
// // console.log(task);

// // Note: Print list using JS...!
// /*
// let containerEl = document.getElementById("container");
// let data = ["ahmed", "mohsin", "bilal", "shahzil", "harris"];
// // console.log(data);

// containerEl.innerHTML = data
//     .map((item, index) => {
//         return (
//             `<h3 key=${index}>
//                 ${item}
//             </h3>`
//         );
//     })
//     .join("");
// */
// // Note: Search bar functionality testing...!

// // Note: Program: 11

// // let userInput = prompt("Enter eny number!");
// // // console.log(userInput);
// // let total = 0;

// // for (let i = 0; i < userInput.length; i++) {
// //     // console.log(userInput[i]);
// //     total = total + Number(userInput[i]);
// // }

// // console.log(total);

// // Note: Date testing...!
// // Q: Calculate how many days have beens passed since you were born...!

// // let rightNow = new Date();
// // // console.log(rightNow);

// // let myBirthDay = "08 July 1995";
// // myBirthDay = new Date(myBirthDay);
// // // console.log(myBirthDay);

// // // Note: Converting both dates in mili seconds...!

// // let currentDateInMs = rightNow.getTime();
// // let birthDateInMs = myBirthDay.getTime();

// // let calculateDaysInMs = currentDateInMs - birthDateInMs;
// // // console.log(comparison);

// // let formulaForDays = calculateDaysInMs / (1000 * 60 * 60 * 24);
// // // console.log(formulaForDays);

// // formulaForDays = Math.floor(formulaForDays);
// // console.log(formulaForDays);

// // New Program...!
// // Q: Calculate how many years have beens passed since you were born...!
// /*
// let currentYear = new Date().getFullYear();
// // console.log(currentYear);

// let birthYear = new Date("08 July 1995").getFullYear();
// // console.log(birthYear);

// var yearPassed = currentYear - birthYear;
// console.log(yearPassed);
// */

// // Q: How many days left in a year...!

// /*
// let currentMonth = new Date().getMonth() + 1;
// // console.log(currentMonth);

// let lastMonth = new Date("31 December 2022").getMonth() + 1;
// // console.log(lastMonth);

// var monthsLeft = lastMonth - currentMonth;
// console.log(monthsLeft);
// */

// // Q: How manu hours left in next class...!
// /*
// let rightNow = new Date();
// // console.log(rightNow);

// let classTime = new Date("29 August 2022 19:00:00");
// // console.log(classTime);

// // Note: COnverting both dates in mili seconds...!

// let rightNowInMs = rightNow.getTime();
// let classTimeInMs = classTime.getTime();

// let calculateHours = classTimeInMs - rightNowInMs;
// // console.log(calculateHours);

// let hoursLeft = calculateHours / (1000 * 60 * 60);
// hoursLeft = Math.floor(hoursLeft);
// console.log(hoursLeft);
// */


// // let heading = document.getElementById("heading");
// let namesList = ["ahmed", "kashan", "mehran", "shahzaib", "khurram"];
// let startingPoint = 0;

// setInterval(() => {
//     console.log(namesList[startingPoint++]);

//     if (startingPoint == namesList.length) {
//         startingPoint = 0;
//     };
// }, 1000);

// // NOTE: Disable refresh from F5 or Ctrl + r

// // document.onkeydown = function () {
// //     switch (event.keyCode) {
// //         case 116: //F5 button
// //             console.log(event);
// //             event.returnValue = false;
// //             event.keyCode = 0;
// //             return false;

// //         case 82: //R button
// //             if (event.ctrlKey) {
// //                 console.log(event);
// //                 event.returnValue = false;
// //                 event.keyCode = 0;
// //                 return false;
// //             }
// //     }
// // }

// // let numArr = new Array(1, 2, 3, 4, 5);
// // let userInput = Number(prompt('Enter any number!'));

// // if (numArr.includes(userInput)) console.log(true);
// // else console.log(false);

// // let numArr = new Array(1, 2, 3, 4, 5);
// // let userInput = Number(prompt('Enter any number!'));
// // let numberFound = false;

// // for (let i = 0; i < numArr.length; i++) {
// //     // console.log(numArr[i]);

// //     if (userInput == numArr[i]) {
// //         numberFound = true;
// //         break;
// //     };
// // };

// // let result = (numberFound) ? ("Number found!") : ("Number not found!");
// // console.log(result);

// // Q: 14

// // let scores = ["12", "45", "3", "22", "34", "50"];
// // let userInput = "34";

// // if (scores.includes(userInput)) {
// //     for (let i = 0; i < scores.length; i++) {
// //         console.log(scores[i]);

// //         if (userInput == scores[i]) break;
// //     }
// // }

// // else {
// //     for (let i = 0; i < scores.length; i++) {
// //         console.log(scores[i]);
// //     };
// // };

// // Q:20 (c)

// // var strData = "12345"
// // var length = strData.length;

// // for (let i = 0; i < length; i++) {
// //     console.log(strData);
// //     strData = strData.slice(0, strData.length - 1);
// // }

// // Q:20 (b)
// // var strData = "1";

// // for (let i = 1; i <= 5; i++) {
// //     console.log(strData);
// //     strData = strData + i;
// // }

// // Q:6
// /*
// var numberOfItems = prompt("Enter no of items");
// // console.log(numberOfItems);
// let data = [];

// for (let i = 1; i <= numberOfItems; i++) {
//     // console.log(i);

//     let item = prompt(`Enter item no ${i}`);
//     data.push(item);
// };

// console.log(data);
// */

// // Program:
// /*
// let paragraph = "Developer who has passion for web and mobile technologies. Expert at MERN Mongo DB, Express JS, React JS, and Node JS Stack. Have good command on building Mobile applications with React Native.";

// const convertToCapitalize = (para) => {
//     // console.log(para);

//     let splitData = para.split(" ");
//     // console.log(splitData);

//     for (let i = 0; i < splitData.length; i++) {
//         // console.log(splitData[i]);

//         splitData[i] = splitData[i].charAt(0).toUpperCase() + splitData[i].slice(1).toLowerCase();
//         // console.log(splitData[i]);
//     };

//     return splitData.join(" ");
// };

// let result = convertToCapitalize(paragraph);
// console.log(result);
// */

// // let data = {
// //     myName: "mohsin",
// //     title: "software engr"
// // };

// // let encryptData = btoa(JSON.stringify(data));
// // console.log(encryptData);

// // let imgEl = document.getElementById("img-tag");

// // const abc = (el) => {
// //     // console.log(el);
// //     el.src = "./images/asghar.jpg";
// //     el.alt = "asghar";
// // }

// // const xyz = (el) => {
// //     // console.log(el);
// //     el.src = "./images/ahmed.jpeg";
// //     el.alt = "ahmed";
// // }

// // let myInfo = {
// //     name: "Ahmed",
// //     title: "Software Engineer",
// //     company: "QBS Co",
// //     myLocation: "Nazimabad # 01",
// //     hasLaptop: false
// // };
// // // console.log(myInfo);

// // let infoBucket = [];

// // for (var prop in myInfo) {
// //     console.log(prop);
// // };

// // let headingEl = document.getElementById("heading");
// // // console.log(headingEl);

// // setInterval(() => {
// //     let date = new Date();
// //     headingEl.innerHTML = date;
// // }, 1000);

// // Synchronus Example...!

// // testing();

// // console.log("1");

// // function testing() {
// //     console.log("Function called!");
// // }

// // console.log("2");

// // testing();

// // Note: Variables example...!

// // const testing = () => {
// //     var a = 'hello';

// //     if (a == "hello") {
// //         console.log("A success!");

// //         let b = "Yo";
// //         console.log(a, b);
// //     };

// //     console.log(b);
// // };

// // testing();

// // let apiUrl = "https://qbookqbs.herokuapp.com/api/login";
// // console.log(apiUrl);

// // fetch({
// //     method: "POST",
// //     url: apiUrl,
// //     body: userData
// // })
// //     .then((success) => {
// //         return success.json();
// //     })
// //     .then((getData) => {
// //         console.log(getData);
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     });


// // let apiUrl = "https://jsonplaceholder.typicode.com/users";

// // const apiCall = () => {
// //     fetch(apiUrl)
// //         .then((success) => {
// //             return success.json();
// //         })
// //         .then((successData) => {
// //             console.log(successData);
// //         })
// //         .catch((err) => {
// //             console.log(err);
// //         })
// // };

// // apiCall();


// // let userInput = prompt('Enter user name ?');

// // try {
// //     if (userInput == "ahmed") {
// //         console.log(userInput);
// //     }

// //     else {
// //         throw "Invalid name!";
// //     };
// // }

// // catch (error) {
// //     console.log(error);
// // };




// // for (let i = 1; i <= 10; i++) {
// //     setTimeout(() => {
// //         console.log(i);
// //     }, i * 1000);
// // };

// // for (let i = 1; i <= 10; i++) {
// //     setTimeout(() => {
// //         console.log(i);
// //     }, i * 1000);
// // };

// // let uniqueId = Math.random().toString(36).slice(2);
// // console.log(uniqueId);

// // let apiUrl = "https://crud-web-app-mern.herokuapp.com/user/save";
// // let formData = {
// //     name: "John",
// //     email: "john@gmail.com"
// // };

// // const apiCall = async () => {
// //     try {
// //         let response = await fetch({
// //             method: "POST",
// //             url: apiUrl,
// //             body: formData
// //         });
// //         let actualData = await response.json();
// //         console.log(actualData);
// //     }

// //     catch (error) {
// //         console.log('Error Found: ', error);
// //     };
// // };

// // apiCall();

// // let user = {
// //     name: "AHmed"
// // };

// // let userData = JSON.stringify(user);
// // localStorage.setItem("User", userData);

// // const removed = () => {
// //     let nullData = JSON.stringify(null);
// //     localStorage.setItem("User", nullData);
// // };

// // let arr = ['a', 'b', 'c', 'b', 'd', 'e', 'b', 'z'];
// // console.log(arr.indexOf('b'));
// // console.log(arr.lastIndexOf('b'));


// // const reloadScreen = () => location.reload();


// // var data = {
// //     prop1: "",
// //     prop2: {
// //         name: "ahmed"
// //     }
// // }

// // let test = data?.prop2.name;
// // console.log(test);

// // let dummyData = [
// //     {
// //         id: 1,
// //         name: 'ABC',
// //         area: 'Johar'
// //     },
// //     {
// //         id: 2,
// //         name: 'XYZ',
// //         area: 'Gulshan'
// //     },
// //     {
// //         id: 3,
// //         name: 'AAA',
// //         area: 'Nazimabad'
// //     },
// //     {
// //         id: 4,
// //         name: 'MNO',
// //         area: 'Nazimabad'
// //     },
// //     {
// //         id: 5,
// //         name: 'QRS',
// //         area: 'Nazimabad'
// //     },
// // ];
// // console.log(dummyData);

// // let findByArea = dummyData.filter((item, index) => { return item.area == "Johar" });
// // console.log(findByArea);


// // Note: How to get the last value from an array...!
// // let arr = ['ahmed', 'mehran', 'kashan', 'shahzaib', 'khurram'];
// // console.log(arr.at(-1));

// // var fourDigitCode = Math.floor(1000 + Math.random() * 9000);
// // console.log(fourDigitCode);








// // Note: Practice:

// // Example # 01:
// // name = "practice";
// // console.log(name);

// // var name = "test";
// // console.log(name);



// // Example # 02:
// // function test1(a, b) {
// //     // console.log(d);

// //     function test2(c, d) {
// //         console.log(a, d);
// //     };
// // };

// // test1('ahmed', 'mehran');

// // // test2('Engineer', "Sales Men");



// // Example # 03:
// // const arr = [1, 2, 3];
// // let result = arr.map((data) => data > 1);
// // console.log(result);



// // Example # 04:
// // var test = let;
// // console.log(test);



// // Example # 05:
// // var arr = [1, 2, 3, 6, 10];
// // arr.forEach((data) => {
// //     console.log(data);
// // });



// // Example # 06:
// // let logicText = 3 > 2 > 1 == false;
// // console.log(logicText);



// // Example # 07:
// // var obj = {
// //     name: "Shahzada Ahmed",
// //     title: "Software Engineer",
// //     qualification: {
// //         bachlor: true,
// //         skills: ['Html', 'Css3', 'JavaScript', 'BootStrap'],
// //         hobby : function () {
// //             console.log(this.name);
// //         }
// //     }
// // };
// // obj.qualification.hobby();



// // var str = "1,2,3,4,5";
// // console.log(str);

// // str = str.split(',');
// // console.log(str);




// // Note: Practice:


// // var sum = 0;
// // console.log(sum);

// // for (var i = 0; i < 5; i++) {
// //     console.log(i);
// //     sum = sum + i;
// // };

// // console.log(sum);


// // var arr = ['lion', 'tiger', 'leopard', 'elephant', 'zebra'];

// // for ( var i = 0; i < arr.length; i++ ) {
// //     console.log(arr[i]);
// // };


// // for (var i = arr.length - 1; i >= 0; i--) {
// //     console.log(arr[i]);
// // };


// // for (var i = 1; i <= 3; i++) {
// //     // console.log(`I: ${i}`);

// //     for (var j = 1; j <= 3; j++) {
// //         // console.log(`J: ${j}`);

// //         var k = i * j;
// //         console.log(`K: ${k}`);
// //     };
// // };



// // var message = "Hello\nworld";
// // alert(message);

// // function changeClass() {
// //     if (document.getElementById("mt-btn").className == "btn") {
// //         document.getElementById("mt-btn").className = "test";
// //     }

// //     else {
// //         document.getElementById("mt-btn").className = "btn";
// //     };
// // };


// // let arr = [1, 2, 3, 4, 5];
// // let test = arr.splice(0, arr.length);
// // console.log(test);




// // Note: Rest operators in JS...!

// // const sumOfValues = (a, b, ...params) => {
// //     console.log(a, b, params);
// // };

// // sumOfValues(1, 2, 3, 4, 5, 6);



// // const sumOfValues = (...params) => {
// //     console.log(params);
// // };

// // sumOfValues(1, 2, 3, 4, 5, 6);



// // Note: Spraed operators in JS...!

// // In JavaScript...!
// // const sum = (a, b, c) => {
// //     console.log(a + b + c);
// // }

// // const arr = [1, 2, 3];
// // sum.apply(null, arr);



// // In EcmaScript 6 or +...!
// // const sum = (a, b, c) => {
// //     console.log(a + b + c);
// // }

// // const arr = [1, 2, 3];
// // sum(...arr);


// // In JavaScript...!
// // const arr1 = [1, 2, 3];
// // const arr2 = [4, 5, 6];

// // const arr3 = arr1.concat(arr2);
// // console.log(arr3);



// // In EcmaScript 6 or +...!
// // const arr1 = [1, 2, 3];
// // const arr2 = [4, 5, 6];

// // const arr3 = [...arr1, ...arr2];
// // console.log(arr3);















// // In EcmaScript 6 or +...!
// // const arr1 = [1, 2, 3];
// // const arr2 = [...arr1];
// // arr2.push(4, 5);

// // console.log(arr1);



// // console.log('Testing!');



// // const friends = (a, b, ...params) => {
// //     console.log(a, b, params);
// // };


// // friends(1, 20, "ahmed", "bilal", "faraz", "hammad", "kamran");


// // var userInfo = {
// //     myName: "ahmed",
// //     company: "10 Pearls"
// // };
// // // console.log(userInfo);


// // var employees = {
// //     userInfo,
// //     title: "Software Eng",
// //     loc: "Karachi"
// // };

// // console.log(employees);



// // const testingProgram = (number) => {

// //     // Note: Checking the number is even or odd...!
// //     if (number % 2 == 0) {
// //         console.log(`${number} is even!`);

// //         let evenNumCondition = number / 2;
// //         console.log(evenNumCondition);
// //         number = evenNumCondition;
// //     }

// //     else {
// //         console.log(`${number} is odd!`);

// //         let oddNumCondition = number * 3 + 1;
// //         console.log(oddNumCondition);
// //         number = oddNumCondition;
// //     };
// // };

// // let num = 7;
// // setInterval(() => {
// //     testingProgram(7);
// // }, 1000);




// // let yesterday = new Date("23 November 2022");
// // // console.log(yesterday.getTime());

// // let res = yesterday.getTime();
// // let outPut = new Date(res).toLocaleTimeString();
// // console.log(outPut);



// // let resTime = new Date('2022-11-24T08:10:26.407+00:00');
// // console.log(resTime.toLocaleTimeString());


// // for (let i = 1; i <= 5; i++) {
// //     // console.log(i);

// //     setTimeout(() => {
// //         console.log(i);
// //         // document.write(i);
// //     }, i * 1000);
// // };




// // let str = "ahmed";
// // let reverseStr = ""

// // for (let i = str.length - 1; i >= 0; i--) {
// //     // console.log(str[i]);
// //     reverseStr = reverseStr + str[i];
// // };

// // if (reverseStr) console.log(reverseStr);




// // let str = ["a", "h", "m", "e", "d"]

// // for (let i = 0; i < str.length; i++) {
// //     // console.log(str[i]);

// //     let deleteLastEl = str.pop();
// //     str.unshift(deleteLastEl);
// //     console.log(str);
// // };




// // Program: How many days left in christmas 2022...!

// // let christmas = "25 December 2022";
// // let christmasDate = new Date(christmas);
// // let rightNow = new Date();

// // // console.log(rightNow);
// // // console.log(christmasDate);

// // // Note: Converting both dates in miliseconds...!
// // let rightNowInMS = rightNow.getTime();
// // let christmasDateInMS = christmasDate.getTime();

// // // console.log(rightNowInMS);
// // // console.log(christmasDateInMS);

// // // Note: Calculating time...!
// // let calculateMS = christmasDateInMS - rightNowInMS;
// // // console.log(calculateMS);

// // // Note: Applying day formula...!
// // let daysFormula = calculateMS / (1000 * 60 * 60 * 24);
// // daysFormula = Math.ceil(daysFormula);
// // console.log(`${daysFormula} days left in christmas 2022!`);




// // Program: How many months left in march 2023...!

// // let march_2023 = "01 March 2023";
// // let futureDate = new Date(march_2023);
// // let rightNow = new Date();

// // // Note: Converting both dates in miliseconds...!
// // let rightNowInMS = rightNow.getTime();
// // let futureDateInMS = futureDate.getTime();

// // // console.log(rightNowInMS);
// // // console.log(futureDateInMS);

// // // Note: Calculating time...!
// // let calculateMS = futureDateInMS - rightNowInMS;
// // // console.log(calculateMS);

// // // Note: Applying month formula...!
// // let monthFormula = calculateMS / (1000 * 60 * 60 * 24 * 30);
// // monthFormula = Math.floor(monthFormula);
// // console.log(`${monthFormula} months left in march 2023!`);



// // let id = "639071d3547c0f46543ccb3f"
// // console.log(id.slice(id.length - 5));



// // var date = new Date();
// // date.setHours(11, 30, 10)
// // console.log(date);


// // const subtractHours = (date, hours) => {
// //     // console.log("Date: ", date);
// //     // console.log("Hours: ", hours);

// //     date.setHours(date.getHours() - hours);
// //     return date;
// // };

// // // subtractHours(new Date(), 1)

// // let result = subtractHours(new Date(), 1);
// // console.log(result);




// // Note: Testing Program...!

// // (function () {
// //     console.log('Function is running!');
// // })

// // ();



// // Note: Testing Program...!

// // const testingProgram = () => {
// //     setTimeout(() => console.log("1"), 2000);
// //     console.log("2");
// //     setTimeout(() => console.log("3"), 0);
// //     console.log("4");
// // };

// // testingProgram();


// // Note: Testing program...!

// // const testingLogic = [2, , 4].includes(undefined);
// // console.log(testingLogic);




// // Note: JavaScript hack of the day...!

// // let isFound = true;

// // // Note: Instead of this...!
// // if (isFound) {
// //     console.log('Condition true!');
// // };

// // // Use this:
// // isFound && console.log('Condition true!');


// // var employees = [
// //     {
// //         id: 0,
// //         name: "Shahzada Ahmed",
// //         title: "Software Engineer"
// //     },

// //     {
// //         id: 1,
// //         name: "Bilal Khan",
// //         title: "Front-End Developer"
// //     },

// //     {
// //         id: 2,
// //         name: "Aizaz Hussain",
// //         title: "Ui Ux Designer"
// //     },
// // ];

// // console.log(employees);
// // console.table(employees);

// // let userInput = prompt('Enter 100 or 101');
// // let solveProblem = userInput - 201;
// // solveProblem = Math.abs(solveProblem);
// // console.log(solveProblem);




// // Note: How to find intersection in A and B array...!

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];

// // // console.table(arr1);
// // // console.table(arr2);

// let intersectionArr = arr1.filter((item) => {
//     return arr2.includes(item);
// });

// console.log(intersectionArr);




// // Note: How to find union in A and B array...!

// let mixedArr = [...arr1, ...arr2];
// // mixedArr = new Set([...mixedArr]);
// // console.log([...new Set([...mixedArr])]);

// let unionArr = mixedArr.filter((item, index) => {
//     // console.log(item, index);

//     return mixedArr.indexOf(item) == index;
// });

// console.log(unionArr);






// // let password = "<Shahzada_Muhammad_Ahmed />";
// // let securePassword = btoa(password);
// // console.log(securePassword);

// // let encodePassword = atob(securePassword);
// // console.log(encodePassword);



// // Note: How to find the power of a number in javascript:
// // Example: 2, 3 = 8, means 2 * 2 * 2 = 8



// // Note: JavaScript method...!
// // let powerValueInJS = Math.pow(2, 3);
// // console.log(powerValueInJS); // Ans: 8



// // // Note: Latest EcmaScript method...!
// // let powerValueInEs = 2 ** 3;
// // console.log(powerValueInEs); // Ans: 8


// // NOTE: JavaScript Hacks...!

// // Note: Hack # 01
// // Note: How to convert array into an object...!

// // const technicalBrands = ["Microsoft", "Google", "Facebook", "Apple", "Youtube"];
// // console.log(technicalBrands);
// // console.log(typeof technicalBrands);

// // const dataInObj = { ...technicalBrands };
// // console.log(dataInObj);
// // console.log(typeof dataInObj);



// // Note: Hack # 02: Fill array with data:
// // let newArr = new Array(5).fill("Hello JS");
// // console.log(newArr);



// // Note: Hack # 03:
// // var consoleHandler = console.log.bind(document);
// // consoleHandler("ahmed");
// // consoleHandler("Multiply 2 numbers: ", 2 * 5);



// // Note: .bind function in js...!
// // let person = {
// //     firstName: "Shahzada",
// //     lastName: "Ahmed",
// //     fullName: function () {
// //         return this;
// //     }
// // };

// // let person = {
// //     firstName: "Shahzada",
// //     lastName: "Ahmed",
// //     fullName: function () {
// //         return this.firstName + " " + this.lastName;
// //     }
// // };

// // let anotherPerson = {
// //     firstName: "John",
// //     lastName: "Smith"
// // };

// // let result = person.fullName.bind(anotherPerson);
// // console.log(result());





// // let divEl = document.getElementById("container");
// // const technicalBrands = ["Microsoft", "Google", "Facebook", "Apple", "Youtube"];
// // // console.log(technicalBrands);

// // divEl.innerHTML = technicalBrands.map((item, index) => {
// //     // console.log(item);
// //     return item;
// // });


// // JavaScript Tip of the day...!
// // const arr = [2 + 2, 4 * 2, 15 - 17, 10 > 9];
// // console.log(arr);



// // let rightNow = new Date();
// // let time = rightNow.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
// // console.log(time);

// // const techBrands = ["Microsoft", "Google", "Apple", "Facebook", "Youtube"];
// // console.log(techBrands);

// // let dummyData = [
// //     {
// //         id: 1,
// //         studentName: "Ahmed",
// //         marksObtained: 778,
// //         totalMarks: 850
// //     },

// //     {
// //         id: 2,
// //         studentName: "Bilal",
// //         marksObtained: 890,
// //         totalMarks: 850
// //     },

// //     {
// //         id: 3,
// //         studentName: "Aizaz",
// //         marksObtained: 550,
// //         totalMarks: 850
// //     },
// // ];

// // for (let brands of dummyData) {
// //     console.log("Percentage: ", (Number(brands.marksObtained) * 100) / Number(brands.totalMarks));
// // }



// // for (let keys in techBrands) console.log(keys);

// // Note: Way to declare variables in JavaScript...!
// // var name = "Ahmed";
// // var title = "Software Engineer";
// // var company = "QBS Tech"
// // console.log(title); Result: Software Engineer



// // Note: Advance ways to declare variables in EcmaScript...!
// // const [name, title, company] = ["Ahmed", "Software Engineer", "QBS Tech"];
// // // console.log(title); Result: Software Engineer

// // var val = 0;
// // let btn = document.getElementById("test-btn");
// // let h1El = document.getElementById("heading");
// // h1El.innerHTML = val;

// // btn.addEventListener("click", () => {
// //     val++;
// //     console.log(val);

// //     if (val == 5) {
// //         btn.removeEventListener("click", () => { console.log('Function stopped!') });
// //     };
// // });

// // const increamentVal = () => {
// //     setTimeout( () => );
// //     console.log(val);
// // };


// // if (val <= 5) btn.addEventListener("load", increamentVal);
// // else btn.removeEventListener("click", increamentVal);


// // h1El.addEventListener("load", () => val++);

// // let stopClock;

// // const handleClock = () => {
// //     stopClock = setInterval(() => {
// //         let date = new Date().toLocaleTimeString();
// //         h1El.innerHTML = date;
// //     }, 1000);
// // };

// // window.addEventListener("load", handleClock);

// // btn.addEventListener("click", () => {
// //     console.log('Wroking!');
// // });

// // function removeListener() {
// //     btn.removeEventListener("click", () => {
// //         clearInterval(stopClock);
// //     });
// // };


// // Note: Practicing class in JS...!

// // class Employee {
// //     constructor(name, title) {
// //         this.name = name;
// //         this.title = title;
// //     };

// //     department = "IT";
// //     employeeIntro = () => {
// //         console.log(`Hi, My name is ${this.name}, I work in ${this.department} department as a ${this.title}`)
// //     };
// // };

// // // Note: Another class...!
// // class AnotherEmployee extends Employee {
// //     company = "QBS Tech"
// // }

// // let newEmployee = new Employee("Ahmed", "Software Engineer");
// // console.log(newEmployee);
// // newEmployee.employeeIntro();



// // let newAnotherEmployee = new AnotherEmployee("Bilal", "Front-End Developer");
// // console.log(newAnotherEmployee);
// // newAnotherEmployee.employeeIntro();


// // const userData = {
// //     name: "Ahmed",
// //     email: "",
// //     password: "ahmed123"
// // };

// // let formValues = Object.values(userData);
// // // console.log(formValues);

// // let validator = formValues.includes("ahmed");
// // console.log(validator);





// // const userData = {
// //     name: "Ahmed",
// //     email: "",
// //     password: "ahmed123",
// //     contactNum: "03142117550",
// //     address: "Naziamabad # 01"
// // };



// // const emailTester = (el) => console.log(el);



// // var commentsList = document.getElementById('comments');
// // var tmpl = document.getElementById('comment-template').innerHTML;

// // function addit() {
// //     commentsList.innerHTML = commentsList.innerHTML + tmpl;
// // }

// // function deleteItem(e) {
// //     let targetEl = e.parentNode.parentNode;
// //     // console.log(targetEl);

// //     commentsList.removeChild(targetEl);
// // };



// // // Note: Way to remove decimal value in JavaScript...!
// // const numVal = 12.1234;
// // const removeDecPointsVal = Math.floor(numVal);
// // console.log(removeDecPointsVal); // Ans: 12



// // // Note: Way to remove decimal value in Advance EcmaScript...!
// // const _numVal = 12.1234;
// // const _removeDecPointsVal = ~~numVal;
// // console.log(_removeDecPointsVal); // Ans: 12

// // var firstName = "Muhammad";

// // function testing() {
// //     let lastName = "Ahmed";
// //     var fullName = firstName + " " + lastName;
// //     console.log(fullName);
// // }

// // console.log(fullName);
// // testing();

// // function diff() {
// //     var firstName = "Muhammad";
// //     let lastName = "Ahmed";

// //     // console.log(firstName, lastName);

// //     {
// //         var anotherFirstName = "Shaheen";
// //         let anotherLastName = "Ali";

// //         // console.log(anotherFirstName, anotherLastName);
// //     }

// //     console.log(anotherFirstName);
// //     console.log(anotherLastName);
// // };

// // diff();

// // console.log('1 is running');

// // var test = "Hello JS";

// // setTimeout(() => {
// //     console.log(test);
// //     num++;
// // }, 4000);

// // setTimeout(() => console.log('2 is running'), 3000);

// // setTimeout(() => {
// //     console.log(num);
// // }, 5000);

// // var num = 2;

// // let currentFilePath = window.location.pathname;
// // console.log(currentFilePath);

// // let targetArea = currentFilePath.slice(currentFilePath.lastIndexOf('/') + 1);
// // console.log(targetArea);




// // let userInput = prompt('Enter your gender!');

// // switch (userInput) {

// //     case "male":
// //         console.log(`Your gender is: ${userInput}`);
// //         break;

// //     case "female":
// //         console.log(`Your gender is: ${userInput}`);
// //         break;

// //     default:
// //         console.log('No match found!');
// // };
// /*
// let today = new Date().getDay().toString();
// // console.log(`Today: ${today}`);

// switch (today) {
//     case "0":
//         console.log("It's a Sunday");
//         break;

//     case "1":
//         console.log("It's a Monday");
//         break;

//     case "2":
//         console.log("It's a Tuesday");
//         break;

//     case "3":
//         console.log("It's a Wednesday");
//         break;

//     case "4":
//         console.log("It's a Thursday");
//         break;

//     case "5":
//         console.log("It's a Friday");
//         break;

//     case "6":
//         console.log("It's a Saturday");
//         break;

//     default:
//         console.log("Invalid Date!");
// };
// */
// /*
// let apiUrl = "https://jsonplaceholder.typicode.com/users";
// // console.log(apiUrl);

// const apiCall = () => {
//     fetch(apiUrl)
//         .then((res) => {
//             // console.log(success);
//             return res.json();
//         })
//         .then((actualData) => {
//             console.log("Data: ", actualData);
//         })
//         .catch((err) => {
//             console.log("Error occured while api integration: ", err);
//         });
// };

// apiCall();
// */

// /*
// let learningPromise = new Promise((resolve, reject) => {
//     let data = ["Tom and Jerry", "Pokemon", "Dragon Ball Z", "Beyblade", "Spieder Man"];
//     let age = prompt("Enter your age!");

//     if (age >= 18) {
//         resolve(data);
//     }

//     else {
//         reject("Sorry! You are not eligibale!");
//     };
// });

// learningPromise
//     .then((res) => {
//         console.log("Data: ", res);
//     })
//     .catch((err) => {
//         console.log("Promise rejected: ", err);
//     });
// */


// // const data = ["a", "b", "c"];
// // const objData = { ...data };
// // console.log(objData);


// // let user = "john";

// // try {
// //     if (user == "John") console.log('Name is correct');
// //     else throw "Invalid Name!";
// // }

// // catch (error) {
// //     console.log(error);
// // };

// // // NOTE: Use promise with async await instead of promise chain...!

// // const runAfterTwoSeconds = () => {
// //     return new Promise(resolve => {
// //         setTimeout(() => {
// //             resolve("Resolved Successfully!");
// //         }, 2000);
// //     });
// // };

// // // Note: Asynchronus handler...!
// // const asyncCall = async () => {
// //     console.log('Async calling!');

// //     const result = await runAfterTwoSeconds();
// //     console.log(result); // Output: Resolved Successfully!
// // };

// // asyncCall();

// // console.log(navigator.geolocation);

// // let inputEl = document.getElementById("input");

// // inputEl.addEventListener("keypress", (e) => {
// //     // console.log(e);

// //     if (e.key == "Enter") alert('Hello World!');
// // });


// // const handlePromise = () => {
// //     let users = [
// //         {
// //             id: 1,
// //             name: "John"
// //         },

// //         {
// //             id: 2,
// //             name: "Smith"
// //         },

// //         {
// //             id: 3,
// //             name: "Andrew"
// //         },
// //     ];

// //     return new Promise(resolve => {
// //         setTimeout(() => {
// //             resolve(JSON.stringify(users));
// //         }, 2000);
// //     });
// // };

// // const promiseCall = async () => {
// //     console.log('Promise calling!');

// //     let res = await handlePromise();
// //     let actualData = JSON.parse(res);
// //     console.log(actualData);
// // };

// // promiseCall();


// // let numArr = [2, 2, 3, 4, 6, 1, 5, 5, 5, 2];
// // // console.log(numArr);
// // let counts = {};

// // for (let num of numArr) {
// //     // console.log(num);

// //     counts[num] = counts[num] ? counts[num] + 1 : 1;
// // };

// // console.log(counts);


// // let namesArr = ["ahmed", "mehran", "kashan", "ahmed", "arsalan", "mehran", "ahmed", "amees"];
// // let counts = {};

// // for (let el of namesArr) {
// //     // console.log(el);

// //     counts[el] = counts[el] ? counts[el] + 1 : 1;
// // };

// // console.log(counts);

// // let str = "";
// // let i = 0;

// // while (i <= 10) {
// //     console.log(i);
// //     i++;

// //     if (i == 5) break;
// // };

// // const cars = ["BMW", "Volvo", "Saab", "Ford"];
// // let i = 0;

// // while (cars[i]) {
// //     console.log(cars[i]);
// //     i++;
// // };



// // let i = 1;
// // let table = 2;

// // while (i <= 10) {
// //     console.log(`${table} x ${i} = ${table * i}`);
// //     i++
// // };



// // let user = {
// //     firstName: "ahmed",
// //     firstName: "rana",
// //     firstName: "ali"
// // };

// // console.log(user);

// // const arr = [2, 2, 5, 1, 6, 5, 7, 3, 5, 1, 9];
// // console.log(arr);

// // const counts = {};
// // console.log(counts);

// // let aArr = ["a", "b", "c", "d"];
// // let bArr = ["c", "d", "e", "f"];

// // for (let i = 0; i < aArr.length; i++) {
// //     console.log('i: ', aArr[i]);

// //     for (let j = 0; j < bArr.length; j++) {
// //         console.log("j: ", bArr[j]);
// //     };
// // };

// // for (let i = 0; i < aArr.length; i++) {
// //     // console.log(aArr[i]);
// //     bArr.push(aArr[i]);
// // };

// // console.log(bArr);

// // let aArr = ["a", "b", "c", "d"];
// // let bArr = ["c", "d", "e", "f"];

// // console.log(aArr, bArr);

// // for (let i = 0; i < bArr.length; i++) {
// //     // console.log(bArr[i]);
// //     aArr.push(bArr[i]);
// // };

// // console.log(aArr);

// // let arr = ["a", "b", "c", "d"];
// // let initialVal = 0;

// // const nextVal = () => {
// //     console.log(arr[initialVal++]);

// //     if (initialVal == arr.length) {
// //         initialVal = 0;
// //     }
// // };


// // const arr = ["lion", "cat", "lion", "tiger", "zebra", "lion", "mouse", "cat"];
// // let counts = {};

// // console.log(counts);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // };

// // for (let key in arr) {
// //     console.log(key);
// // };

// // for (let elements of arr) {
// //     console.log(elements);
// // };



// // const arr = ["lion", "cat", "lion", "tiger", "zebra", "lion", "mouse", "cat"];
// // let counts = {};

// // for (let el of arr) {
// //     counts[el] = counts[el] ? counts[el] + 1 : 1;
// // };

// // console.log(counts);



// // const test = (val1, val2, ...restParameters) => {
// //     console.log(val1, val2);
// //     console.log(restParameters);
// // };

// // const test = (...restParameters) => {
// //     console.log(restParameters);
// // };

// // test("ahmed", "computer", "systems", "karachi", "ali", "lion");

// // let slots = [
// //     {
// //         "time": "11:00 AM",
// //         "isBooked": false,
// //         "userId": null,
// //         "dayId": "63e4a926ad68c7b8b8068fd4"
// //     },

// //     {
// //         "time": "11:30 AM",
// //         "isBooked": false,
// //         "userId": null,
// //         "dayId": "63e4a926ad68c7b8b8068fd4"
// //     },

// //     {
// //         "time": "12:00 PM",
// //         "isBooked": false,
// //         "userId": null,
// //         "dayId": "63e4a926ad68c7b8b8068fd4"
// //     },

// //     {
// //         "time": "12:30 PM",
// //         "isBooked": false,
// //         "userId": null,
// //         "dayId": "63e4a926ad68c7b8b8068fd4"
// //     },

// //     {
// //         "time": "01:00 PM",
// //         "isBooked": false,
// //         "userId": null,
// //         "dayId": "63e4a926ad68c7b8b8068fd4"
// //     }
// // ];

// // let appointments = [
// //     {
// //         _id: "63e9fa8b448afaa6ca7caec1",
// //         userId: "63e608c69b1c98908047286c",
// //         serviceLeaderId: "63e4a926ad68c7b8b8068fd1",
// //         businessPartnerId: "63e4a926ad68c7b8b8068fd1",
// //         dayId: "63e4a926ad68c7b8b8068fd4",
// //         charges: '500',
// //         appointmentDate: '1676574000000',
// //         appointmentTime: '11:30 AM',
// //         bookedBy: "63e608c69b1c98908047286c",
// //         paymentType: 'cash',
// //         isPaid: false,
// //         bankDetails: null,
// //         ticket: null,
// //         swapTicket: null
// //     },

// //     {
// //         _id: "63ea149d8b75881a8a911fb1",
// //         userId: "63cfc69e2b2ee0460e486442",
// //         serviceLeaderId: "63e4a926ad68c7b8b8068fd1",
// //         businessPartnerId: "63e4a926ad68c7b8b8068fd1",
// //         dayId: "63e4a926ad68c7b8b8068fd4",
// //         charges: '500',
// //         appointmentDate: '1676574000000',
// //         appointmentTime: '12:00 PM',
// //         bookedBy: "63cfc69e2b2ee0460e486442",
// //         paymentType: 'cash',
// //         isPaid: false,
// //         bankDetails: null,
// //         ticket: null,
// //         swapTicket: null
// //     }
// // ];

// // console.log(slots);
// // console.log(appointments);

// // for (let appointmentsData of appointments) {
// //     // console.log(appointmentsData);

// //     for (let slotsData of slots) {
// //         // console.log(slotsData);

// //         if ((slotsData.dayId == appointmentsData.dayId) && (slotsData.time == appointmentsData.appointmentTime)) {
// //             slotsData.isBooked = true;
// //         };
// //     };
// // };

// // console.log("Required slots: ", slots);


// // let rightNow = new Date();
// // rightNow.setDate(rightNow.getDate() - 1);
// // console.log(rightNow);


// // let spanEl = document.getElementById("span-tag");
// // let defaultFontSize = spanEl.style.fontSize;
// // let extractNumber = Number(defaultFontSize.match(/\d/g).join(""));

// // const increaseFontSize = () => {
// //     extractNumber++;
// //     console.log(extractNumber);

// //     spanEl.style.fontSize = extractNumber + "px";
// // };

// // setInterval(increaseFontSize, 1000);


// // let h1 = document.getElementById("clock");

// // setInterval(() => {
// //     let date = new Date().toLocaleTimeString();
// //     h1.innerHTML = date;
// // }, 1000);


// // let rightNow = new Date("08 July 1996");
// // console.log(rightNow);
// // console.log(typeof rightNow);

// // let date = rightNow.getDate();
// // let month = rightNow.getMonth();
// // let year = rightNow.getFullYear();

// // let fullDate = date + ":" + month + ":" + year;
// // console.log(fullDate.getTime());
// // console.log(typeof fullDate);

// // let dateInMS = rightNow.getTime();
// // console.log(dateInMS);
// // console.log(typeof dateInMS);

// // let customDate = new Date("6/3/2023");
// // console.log(customDate);
// // console.log(typeof customDate);

// // let dateInMS = customDate.getTime();
// // console.log(dateInMS);
// // console.log(typeof dateInMS);

// // const apiCall = async () => {
// //     // let apiUrl = "https://web-production-5060.up.railway.app/api/appointments/fetch/all";
// //     let apiUrl = "http://localhost:3010/api/appointments/fetch/all";
// //     // let apiUrl = "http://192.168.0.102:3010/api/appointments/fetch/all";

// //     try {
// //         let response = await fetch(apiUrl);
// //         let jsonData = await response.json();
// //         console.log(jsonData);
// //     }

// //     catch (error) {
// //         console.log("Something went wrong while api integrating: ", error);
// //     };
// // };

// // apiCall();

// // console.log(myName);

// // let myName = "ahmed";

// // testing();

// // function testing() {
// //     console.log('Working!');
// // };

// // testing();

// // const testing = () => {
// //     console.log('Working!');
// // };

// // testing();

// // let testing = () => {
// //     console.log('Working!');
// // };

// // testing();

// // var testing = () => {
// //     console.log('Working!');
// // };



// // console.log(myName);
// // let myName = "ahmed";

// // console.log(myName);
// // var myName = "ahmed";

// // NOTE: Shallow Copy vs Deep Copy in JavaScript...!

// // Note: Example # 01: (Using Json.parse and Json.stringify)

// // let obj = {
// //     myName: "ahmed",
// //     title: "software engineer"
// // };

// // // let copyObj = obj; // Note: This is called shallow copy in javascript...!
// // // copyObj.title = "front-end developer";

// // let copyObj = JSON.parse(JSON.stringify(obj)); // Note: This is called deep copy in javascript...!
// // copyObj.title = "front-end developer";

// // console.log(obj);
// // console.log(copyObj);



// // Note: Example # 02: (Using Spread Operator)

// // let employeeData = {
// //     name: "bilal",
// //     compnay: "QBS Co"
// // };

// // // let copyData = employeeData; // Note: Shallow copy...!
// // // copyData.compnay = "10 Pearls";

// // let copyData = { ...employeeData }; // Note: Deep copy...!
// // copyData.compnay = "10 Pearls";

// // console.log(employeeData);
// // console.log(copyData);



// // Note: Example # 03: (Using Object.assign)

// // let employeeData = {
// //     name: "Ahmed",
// //     compnay: "QBS Tech"
// // };

// // // let copyData = employeeData; // Note: Shallow copy in javascript...!

// // let copyData = Object.assign({}, employeeData); // Note: Deep copy in javascript...!
// // copyData.compnay = "Folio 3 Software";

// // console.log(employeeData);
// // console.log(copyData);


// // Note: Array example...!

// // let employees = ["ahmed", "bilal", "hammad", "faraz", "subhan"];

// // // let copyData = [...employees]; 
// // // Or
// // // let copyData = JSON.parse(JSON.stringify(employees));
// // copyData[2] = "fasih";

// // console.log(employees);
// // console.log(copyData);


// // console.log(myName);

// // var myName = "ahmed";

// // test();

// // function test() {
// //     console.log('Running!');
// // };

// // test();

// // var test = () => {
// //     console.log('Running!');
// // }



// // let employeeData = {
// //     myName: "ahmed",
// //     title: "software engineer"
// // }

// // let copyData = employeeData;
// // copyData.title = "front-end developer";

// // console.log(employeeData);
// // console.log(copyData);




// // NOTE: Program to shuffle keywords...!
// let keyword = "compiler";
// let strToArr = keyword.split("");
// // console.log(strToArr);

// let shuffleKeywords = strToArr.slice().sort(() => Math.random() - 0.5).join("");
// console.log(shuffleKeywords);



// let keyword = "compiler";
// let strToArr = keyword.split("");
// // console.log(strToArr);

// let shuffleData =
// strToArr.slice().sort(() => { return Math.random() - 0.5 }).join("");
// console.log(shuffleData);








// let arr = [1, 6, 1000, 12, 8, 10];
// let sortData = arr.sort((a, b) => { return b - a });
// console.log(sortData);


// // NOTE: JavsScript callback function example...!

// const h1El = document.getElementById("heading");

// // Note: Handler to display data...!
// const displayData = (data) => {
//     if (data) h1El.innerHTML = data;
// };



// // Note: handler to do some mathmatical operation...!
// const calculateValues = (num1, num2, showOutput) => {
//     let calculation = num1 * num2;
//     showOutput(calculation);
// };

// calculateValues(12, 6, displayData);

// /*
// Note:
// 1: In line no 18 displayData function as an argument.
// 2: In line no 13 showOutput is a third parameter whick will be consider as a callback function because it is a pure function.
// */


// let myName = "ahmed";

// const displayName = (name = myName) => console.log(name);
// displayName();



// let user = "ahmed"

// const displayData = (name = user) => console.log(name);
// displayData();






// let caluculation = eval(10 + 5);
// console.log(caluculation);


// let arr = ["ahmed", "faraz", "hammad", "fasih"];
// let searchUser = arr.includes("zafar");

// console.log(searchUser);

// console.log(navigator);


// let x = 1;
// console.log(x++ + ++x);

// x++ = post increament
// ++x = pre increament


// console.log(Number(false));



// let num = 1996;
// let x = num.toString().split("").reverse().join("")
// console.log(x);




// let sentense = "The quick brown fox jumps over the lazy dog";
// let newWay = sentense.toLowerCase().replaceAll("the", "a");
// console.log(newWay);


// const test = (num) => {
//     console.log(num);
// };

// let x = 3;
// test(x++);


// const testing = (param) => {
//     let x = param;
//     console.log("Parameter: ", x);

//     const innerHandler = () => {
//         setTimeout(() => console.log('I will come after  secs: ', x), 2000);

//         let x = 6;
//         console.log("Inner: ", x);
//     };

//     innerHandler();
// };

// testing(4);

// let btnEl = document.getElementById("btn");
// // console.log(btnEl);


// window.addEventListener("load", () => {
//     btnEl.setAttribute("class", "style-btn");

//     setTimeout(() => {
//         if ( btnEl.cla ) {
//         };
//     }, 5000);
// });

// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl();



// const arr = ["a", "b", "c", "d", "e"];
// arr.splice(2, 1, "z");
// console.log(arr);



// let str = "ahmed";
// let test = str.endsWith('d');
// console.log(test);



// let num = 1 + +"20";
// console.log(num);
// console.log(typeof num);










// let accNum = "1037078010732019";
// let last4Digits = accNum.slice(-4);
// let masked = last4Digits.padStart(accNum.length, "*");
// console.log(masked);











// let pwd = "ahmed123";
// let test = pwd.startsWith("ax");
// console.log(test);




// let num = "20";
// // num = Number(num);

// let test = 5 + +num;

// console.log(test);



// let accNum = "10380078010732123";
// let last4Digits = accNum.slice(-4);
// // console.log(accNum.length);

// let masked = last4Digits.padStart(accNum.length, "+");
// console.log(masked.length)


// document.write(`<h1> ${masked} </h1>`);

// console.log(navigator.userAgent);

// function fnBrowserDetect() {

//     let userAgent = navigator.userAgent;
//     let browserName;

//     if (userAgent.match(/chrome|chromium|crios/i)) {
//         browserName = "chrome";
//     } else if (userAgent.match(/firefox|fxios/i)) {
//         browserName = "firefox";
//     } else if (userAgent.match(/safari/i)) {
//         browserName = "safari";
//     } else if (userAgent.match(/opr\//i)) {
//         browserName = "opera";
//     } else if (userAgent.match(/edg/i)) {
//         browserName = "edge";
//     } else {
//         browserName = "No browser detection";
//     };

//     console.log("You are using " + browserName + " browser");
// };

// fnBrowserDetect();


// const handleCheckOutTime = (inTime, perPatient) => {
//     let checkOut = inTime;
//     checkOut.setMinutes(checkOut.getMinutes() + perPatient);
//     console.log(checkOut);
// };

// let perPatientTime = 30;
// let checkIn = new Date(1682485200000);
// let checkOut = checkIn.setMinutes(checkIn.getMinutes() + perPatientTime);
// checkOut = new Date(checkOut);

// handleCheckOutTime(checkIn, perPatientTime);


// console.log("Pateint Time: ", perPatientTime);
// console.log("Check In Time: ", checkIn);
// console.log("Check Out Time: ", checkOut);


// let perPatientTime = 30;
// let checkIn = "10:00 AM";
// checkIn = checkIn.replace("AM", "");
// checkIn = checkIn.replace(" ", "");
// checkIn = checkIn.replace(":", ".");
// checkIn = +checkIn;
// checkIn = checkIn + perPatientTime;

// console.log(checkIn);



// let customDate = moment();
// let perPatientTime = 30;
// let checkIn = "10:00 AM";

// let checkOut = moment(checkIn, "hh:mm A").add(perPatientTime, "minutes");
// console.log(checkOut.toString());



// let num = 7;

// const handler = (firstVal, secondsVal = num) => {
//     console.log(firstVal, secondsVal);
// };

// handler(3);



// let startingTime = new Date("2023-05-08T08:52:39.648Z");
// let finishingTime = new Date("2023-05-08T09:00:08.456Z");
// console.log(startingTime);
// console.log(finishingTime);

// let calculateTime = finishingTime.getTime() - startingTime.getTime();
// // console.log(calculateTime);

// let minutesFormula = calculateTime / (1000 * 60);
// minutesFormula = Math.floor(minutesFormula);
// console.log(minutesFormula);


// let day = new Date().getDay().toString();
// // console.log(day);

// switch (day) {

//     case "0":
//         console.log('Sunday');
//         break;

//     case "1":
//         console.log('Monday');
//         break

//     default:
//         console.log(undefined);
//         break;
// }




// const names = (...params) => {
//     console.log(params);
// };


// names("ahmed", "mehran", "kashan", "khurram", "anees");



// let usersData = [
//     {
//         id: 1,
//         userName: "ahmed",
//         title: "software engineer",
//         city: "karachi"
//     },

//     {
//         id: 2,
//         userName: "faraz",
//         title: "software engineer",
//         city: "karachi"
//     },

//     {
//         id: 3,
//         userName: "bilal",
//         title: "software engineer",
//         city: "karachi"
//     },

//     {
//         id: 4,
//         userName: "hammad",
//         title: "software engineer",
//         city: "karachi"
//     },

//     {
//         id: 5,
//         userName: "alexa",
//         title: "software engineer",
//         city: "karachi"
//     },
// ];

// console.log(usersData);

// Solution:

// let users = usersData.map((item) => { return item.userName });
// console.log(users);






// let numsArr = [2, 30, 7, 9, 15, 4, 9];
// let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let numsData = numsArr.map((item) => { return item % 2 == 0 });
// console.log(numsData);



// let chars = ["lion", "cat", "fox", "mouse", "elephant"];

// let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr = numsArr.forEach((item) => {
//     // let condition = item % 2 == 0;
//     // console.log(condition);
//     return item > 5;
// });
// console.log(arr);



// let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = numsArr.map((item) => {
//     return item + 2;
// });
// console.log(newArr);



















// Interview Question:
/*

@author Copyright RIKSOF(Private) Limited - All Rights Reserved.
Unauthorized copying of this file, via any medium is strictly prohibited Proprietary and confidential.

*/


/** This class model information on a single student. **/

// class StudentInformation {

//     //  Constructor sets the values for this model. Please note all member variables in this class are public and can be accessed directly.

//     constructor(n, a) {
//         this.name = n;
//         this.age = a;
//     }
// }

// The student group class contains a list of students that study together in a lesson.

// class StudentGroup {
//     constructor(students) {
//         console.log("Students: ", students);
//         this._students = students;
//     }

//     getAverageAge() {
//         let mean = 0;
//         for (let i = 0; i < this._students.length; i++) {
//             // console.log(this._students[i]);

//             mean = mean + this._students[i].age
//         };

//         let result = mean / this._students.length;
//         // console.log('Mean: ', formula);

//         return result;
//     }

//     // You are to complete this method to return the maximum age for this student group.
//     getMaxAge() {
//         let newAge = 0;
//         for (let i = 0; i < this._students.length; i++) {
//             // console.log(this._students[i].age);

//             if (newAge < this._students[i].age) {
//                 // console.log(newAge);
//                 newAge = this._students[i].age;
//             }
//         };

//         // console.log("Max age: ", newAge);
//         return newAge
//     }
// }



/**
* The test cases that need to pass for above code. This will typically
* be part of another file but has been placed here for simplicity.
*/

/**
* In this first test case, we compute the average age for a class.
*/

// Initialize a student group with existing students
// let maths = new StudentGroup([
//     { name: 'Adams', age: 16 },
//     { name: 'Baker', age: 15 },
//     { name: 'Clark', age: 15 },
//     { name: 'Davis', age: 16 },
//     { name: 'Evans', age: 14 }
// ]);
// maths.getAverageAge();

// Confirm user details have been updated
// document.write(`The average age for the Maths class is calculated correctly: ${maths.getAverageAge() === 15.2}<br />`);

// In this second test case, we compute the maximum age for this class.

// Initialize a student group with existing students

// let english = new StudentGroup([
//     { name: 'Frank', age: 16 },
//     { name: 'Ghosh', age: 15 },
//     { name: 'Hills', age: 17 },
//     { name: 'Irwin', age: 17 },
//     { name: 'Jones', age: 14 }
// ]);
// english.getMaxAge();

// Confirm user details have been updated
// document.write(`The maximum age for the English class is calculated correctly: ${english.getMaxAge() === 17}<br />`);

// Statements:
// The average age for the Maths class is calculated correctly: false
// The maximum age for the English class is calculated correctly: false

// Task:You have to apply the logic and make these 2 statements true
// PS:Donot use any buit in method of javascript










// class StudentInformation {
//     constructor(n, a) {
//         this.name = n
//         this.age = a
//     };
// };

// let studesntsInfo = new StudentInformation("ahmed", "26");
// // console.log(studesntsInfo);

// document.write(`My name is ${studesntsInfo.name}, And my age is ${studesntsInfo.age}`);











// class StudentGroup {
//     constructor(students) {
//         this._students = students;
//         // console.log("Students: " , this._students);
//     };

//     getAverageAge() {
//         let totalVal = 0;

//         for (let i = 0; i < this._students.length; i++) {
//             // console.log(this._students[i]);

//             totalVal = totalVal + this._students[i].age
//         };

//         // console.log("Total: ", totalVal);
//         let avgFormula = totalVal / this._students.length;
//         return avgFormula
//     }

//     getMaxAge() {
//         return 0;
//     }
// };

// let mathStudents = new StudentGroup([
//     { name: 'Adams', age: 16 },
//     { name: 'Baker', age: 15 },
//     { name: 'Clark', age: 15 },
//     { name: 'Davis', age: 16 },
//     { name: 'Evans', age: 14 }
// ]);

// mathStudents.getAverageAge();

// let englishStudents = new StudentGroup([
//     { name: 'Frank', age: 16 },
//     { name: 'Ghosh', age: 15 },
//     { name: 'Hills', age: 17 },
//     { name: 'Irwin', age: 17 },
//     { name: 'Jones', age: 14 }
// ]);

// document.write(`The average age for the Maths class is calculated correctly: ${mathStudents.getAverageAge() === 15.2}<br />`);
// document.write(`The maximum age for the English class is calculated correctly: ${englishStudents.getMaxAge() === 17}<br />`);



// (function () {
//     var x, y;

//     try {
//         throw new Error();
//     }

//     catch (x) {
//         x = 1
//         y = 2
//         console.log('a', x);
//     }
//     console.log("b", x);
//     console.log("c", y);
// })();













// (function () {
//     var x, y;

//     try {
//         throw new Error();
//     }

//     catch (x) {
//         x = 1;
//         y = 2;

//         console.log('First console: ', x);
//     };

//     console.log('Second console: ', x);
//     console.log('Third console: ', y);
// })();

// 1 1 un bilal zaid
// 1 un un aman
// 1 undefined undefined marium kau



// console.log(x);
// x = 1;
// let x;

// console.log(x);
// x = 1;
// var x;

// let obj = {
//     name: "ahmed",
//     title: "software engineer"
// }

// let arr = ["ahmed", "bilal", "shahzil", "shoaib", "subhan"];
// console.log(Array.isArray(obj));

// let startTime = new Date(1686326400928);
// let endTime = new Date(1686315889929);

// console.log(startTime);
// console.log(endTime);

// const calculateDifference = () => {
//     console.log(startTime.getHours());
//     console.log(endTime.getHours());

//     let calculateHours = startTime.getHours() - endTime.getHours();
//     let calculateMins = startTime.getMinutes - endTime.getMinutes();
//     console.log("Hours: ", calculateHours);
//     console.log("Minutes: ", calculateMins);
// }

// calculateDifference();



// let names = [
//     {
//         id: 1,
//         name: "john",
//         company: "google"
//     },

//     {
//         id: 2,
//         name: "smith",
//         company: "google"
//     },

//     {
//         id: 3,
//         name: "george",
//         company: "google"
//     },

//     {
//         id: 4,
//         name: "alex",
//         company: "google"
//     },

//     {
//         id: 5,
//         name: "trish",
//         company: "google"
//     },
// ];
// console.log(names.reverse());


// let names = ["ahmed", "yousuf", "akbar", "asghar", "zeeshan"];
// console.log(names);
// console.log(names.with(1, "ali"));

// console.log(names.indexOf('akbar'));


// let id = "642be4ba28986e561bb30346"
// let arr = ["642be4ba28986e561bb30346"];
// let index = arr.indexOf(id);
// arr.splice(index, 1);

// console.log(arr);




// var timevalue = "16 June 2023, 07:00 PM";
// var time = moment(timevalue);
// // console.log(time);
// var newTime = moment(time).add('m', 10);
// let result = newTime.format("dddd, MMMM Do YYYY, h:mm a")
// console.log(result);

// // console.log(moment(result).format("h:mm a"));

// let target = result.slice(-7);
// console.log(target);


// let uniqueId = Math.floor(Math.random()*90000) + 10000;
// console.log(uniqueId);
// console.log(uniqueId.toString().length);




// let nums = [4, 1, 3, 5, 2]
// console.log(nums.sort());


// let mystery = ['🥚', '🐔']
// console.log(mystery.sort());



// const apiCall = async () => {

//     let apiUrl = "https://jsonplaceholder.typicode.com/users";

//     try {
//         let response = await axios({
//             method: "POST",
//             url: apiUrl,
//             data : {}
//         });
//         console.log(response);
//     }

//     catch (error) {
//         console.log("SOmething went wrong while integrating api: ", error);
//     };
// };

// apiCall();

// Note: Function to shuffle an array...!
// const generateTandomValue = () => {
//     let name = ["a", "h", "m", "e", "d"];
//     let modifiedData = [...name].slice(0).sort(() => Math.random() - 0.5); // Note: Formula to shuffle an array...!
//     // console.log(modifiedData);

//     console.log(modifiedData[Math.floor(Math.random()) * modifiedData.length])
// };






// const businessLeadersArr = [
//     {
//         leaderId: 1,
//         leaderName: "Agha Khan University",
//         associateId: ['Bilal', 'Ahmed', 'Mishra']
//     },
//     {
//         leaderId: 2,
//         leaderName: "Liaquat National",
//         associateId: ['Bilal', 'Asghar', 'Mishra']
//     },
//     {
//         leaderId: 3,
//         leaderName: "DOW Hospital",
//         associateId: ['Bilal', 'Ahmed', 'Shahzil']
//     },
//     {
//         leaderId: 4,
//         leaderName: "Patel Hospital",
//         associateId: ['Shahzil', 'Asghar', 'Sheroz']
//     }
// ];

// // console.log(businessLeadersArr);

// let targetData = [...businessLeadersArr].filter(items => {
//     // console.log(items);

//     for (let data of items?.associateId) {
//         // console.log(data)

//         if (data == "Ahmed") {
//             return true;
//         };
//     };

//     return false;
// });
// console.log(targetData);



// const apiCall = async () => {
//     try {
//         let response = await axios({
//             method: "GET",
//             url: "http://localhost:3020/data"
//         });
//         console.log(response);
//     }

//     catch (error) {
//         console.log('Something went wrong while integrating api: ', error);
//     };
// };

// apiCall();




// let date = new Date("2023-07-16T19:00:00.000+00:00");
// let time = "10:30 AM";
// let amOrPm = time.slice(-2);
// let handleHours = amOrPm == "AM" ? time.slice(0, 2) : Number(time.slice(0, 2)) + 12;

// // console.log(handleHours);

// date.setHours(handleHours);
// date.setMinutes(time.slice(3, 5));

// console.log(date);










// let userCreatedOn = new Date("2023-07-13T08:30:22.645+00:00");
// // console.log(userCreatedOn);
// let rightNow = Date.now() - userCreatedOn.getTime();
// // console.log(rightNow);

// let formula = rightNow / (1000 * 60);
// formula = Math.floor(formula);
// console.log(formula);



// let arr1 = [
//     {
//         businessPartnerId: "63ff48502e6c575c18c87ce5",
//         day: "monday",
//         endTime: "08:00 PM",
//         startTime: "05:00 PM"
//     },

//     {
//         businessPartnerId: "63ff48502e6c575c18c87ce5",
//         day: "wednesday",
//         endTime: "07:00 PM",
//         startTime: "10:00 PM"
//     },

//     {
//         businessPartnerId: "63ff48502e6c575c18c87ce5",
//         day: "friday",
//         endTime: "08:00 PM",
//         startTime: "11:00 PM"
//     }
// ];

// let arr2 = [
//     {
//         businessPartnerId: "63ff48502e6c575c18c87ce5",
//         day: "monday",
//         endTime: "06:00 PM",
//         startTime: "10:00 PM"
//     },

//     {
//         businessPartnerId: "63ff57f02e6c575c18c87d05",
//         day: "monday",
//         endTime: "05:00 PM",
//         startTime: "04:00 PM"
//     },

//     {
//         businessPartnerId: "63ff48502e6c575c18c87ce5",
//         day: "wednesday",
//         endTime: "04:00 PM",
//         startTime: "11:00 PM"
//     }
// ];

// console.log("Arr 1: ", JSON.parse(JSON.stringify(arr1)));
// console.log("Arr 2: ", JSON.parse(JSON.stringify(arr2)));



// const champion = () => {
//     let arr1Clone = [...arr1];
//     let arr2Clone = [...arr2];

//     let unknownValuesArr = []

//     // console.log("Arr 1: ", arr1Clone);
//     // console.log("Arr 2: ", arr2Clone);

//     for (items of arr1Clone) {
//         // console.log("Arr 1 item: ", items);

//         for (elements of arr2Clone) {
//             // console.log("Arr 2 elements: ", elements);

//             if (
//                 (elements.businessPartnerId == items.businessPartnerId) &&
//                 (elements.day == items.day)
//             ) {
//                 elements.startTime = items.startTime;
//                 elements.endTime = items.endTime;
//             }
//         };
//     };

//     console.log("Modified Arr: ", arr2Clone);
//     console.log("Unknown values arr: ", unknownValuesArr);
// };

// champion();


// let employees = [
//     {
//         id: "1",
//         name: "Ahmed",
//         title: "Software Engineer (MERN Stack)"
//     },

//     {
//         id: "2",
//         name: "Mohsin",
//         title: "Software Engineer (React with Php)"
//     },

//     {
//         id: "3",
//         name: "Rafay",
//         title: "Software Engineer (React with Asp.Net)"
//     },

//     {
//         id: "2",
//         name: "Mohsin",
//         title: "Software Engineer (React with Php)"
//     },

//     {
//         id: "1",
//         name: "Ahmed",
//         title: "Software Engineer (MERN Stack)"
//     },
// ];

// // console.log('Employees: ', employees);

// // Note: Function to check duplicate...!
// const duplicateChecker = (employeeId) => {
//     // console.log('Employee Id: ', employeeId);
//     let isDuplicateFound = false;

//     for (let items of employees) {
//         console.log("Data: ", items);
//         // if (items.id.toString() == employeeId.toString()) {
//         //     // If found, set flag and break out the loop...!
//         //     isDuplicateFound = true;
//         //     break;
//         // };
//     };

//     // return isDuplicateFound;
// };

// // Note: Function to get unique array...!
// const uniqueArrHandler = () => {
//     let uniqueItems = [];

//     for (let items of employees) {
//         // console.log("Employee Data: ", items);

//         let isDuplicate = duplicateChecker(items.id);
//         // console.log(isDuplicate);

//         // if (!isDuplicate) {
//         //     uniqueItems.push(items);
//         // };
//     };

//     // console.log("Unique Items: ", uniqueItems);
// };

// uniqueArrHandler();


// let password = "ahmed123";
// // console.log(password);

// let encodePassword = btoa(password);
// // console.log(encodePassword);

// let decodePassword = atob(encodePassword);
// console.log(decodePassword);



// const apiCall = () => {
//     let apiUrl = "http://localhost:5050/api/users/fetch-all";

//     fetch(apiUrl)
//         .then(res => { return res.json() })
//         .then(data => console.log(data))
//         .catch(err => console.log("Error: ", err));
// };

// apiCall();




// const getMonthData = (rightNow, remainingDays) => {
//     console.log(rightNow);

//     let last30Days = new Date();
//     last30Days.setDate(last30Days.getDate() - remainingDays);
//     console.log(last30Days);
// };

// let today = new Date();
// getMonthData(today, 30);



// let password = 'ahmed123';
// password = btoa(password);
// console.log(password);


// var animals = ["cat", "dog", "elephant", "donkey", "kangaroo"];
// animals.splice(2, 1, "lion", "tiger");
// console.log(animals);










// var animals = ["cat", "dog", "elephant", "donkey", "kangaroo"];
// var userInput = prompt("Enter the name of your favourite animal!");

// if (animals.indexOf(userInput) != -1) console.log(userInput, "exist in the animals array!");
// else console.log(userInput, "does not exist in the animals array! :cry:");




// var arr = ['lion', 'tiger', 'leopard', 'zebra'];
// arr.fill('dinosaur', 1, 3);
// console.log(arr);





// var url = "https://jsonplaceholder.typicode.com/users";
// var extract = url.slice(url.lastIndexOf('/') + 1);
// console.log(extract);


// console.log(document);




// let num = 5;
// num++;
// console.log(num);


// let num = 5;
// ++num
// console.log(num);


// let num = 5;
// num++;
// console.log(num + 2);

// var myName = "Shahzada Ali"
// myName = myName.replace("Ali", 'Ahmed');
// console.log(myName);







// const initialCharUperCaseHandler = (data) => {
//     // console.log("Paragraph: ", data);

//     // Note: Converting string data to array...!
//     let strToArr = paragraph.split(" ");
//     // console.log(strToArr);

//     for (let i = 0; i < strToArr.length; i++) {
//         // console.log(strToArr[i]);

//         let initialChar = strToArr[i].charAt(0).toUpperCase();
//         // console.log(initialChar);

//         let remainingChars = strToArr[i].slice(1).toLowerCase();
//         // console.log(remainingChars);

//         strToArr[i] = initialChar + remainingChars;
//     };

//     // console.log(strToArr);

//     // Note: Converting array data to string...!
//     let arrToStr = strToArr.join(" ");
//     return arrToStr;
// };

// let paragraph = "hi my name is shahzada muhammad ahmed i am a software engineer mern stack at qbs tech";
// let result = initialCharUperCaseHandler(paragraph);
// console.log(result);


// for (let i = 1; i <= 3; i++) {
//     console.log(i, " time recite bismillah!");

//     for (let j = 1; j <= 2; j++) {
//         console.log("Drink " + j + " glass of water!");

//         for (let k = 1; k <= 5; k++) {
//             console.log("Do " + k + " times push ups!");
//         };
//     };
// };



// var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
// var vowels = [];

// for (var i = 0; i < alphabets.length; i++) {
//     // console.log(alphabets[i]);

//     if (alphabets[i] == "a" || alphabets[i] == "e" || alphabets[i] == "i" || alphabets[i] == "o" || alphabets[i] == "u") {
//         vowels.push(alphabets[i]);
//     };
// };

// console.log(vowels);


// let star = "";

// for (let i = 1; i <= 5; i++) {
//     // console.log('i', i);

//     for (let j = 1; j <= i; j++) {
//         // console.log('j', j);

//         star = star + "*";
//     };

//     star = star + "\n";
// };

// console.log(star);



// let star = "*****";

// for (let i = star.length; i >= 1; i--) {
//     console.log(star);

//     star = star.slice(0, star.length - 1);
// };


// let wordsArr = ['ahmed', 'mehran', 'muhammad', 'rehmatullah', 'shahrukh'];
// let longestWord = "a";

// for (let i = 0; i < wordsArr.length; i++) {
//     // console.log(wordsArr[i]);

//     if (wordsArr[i].length > longestWord.length) {
//         longestWord = wordsArr[i];
//     };
// };

// console.log('Longest word: ', longestWord);



// for (let i = 5; i >= 0; i = i - 0.5) {
//     console.log(i);
// };




// var userInput = +prompt("How many items do you want to add ?");
// var items = [];

// for (let i = 1; i <= userInput; i++) {
//     let item = prompt('Enter item: ' + i);
//     items.push(item);
// };

// console.log(items);


// let stars = "";

// for (let i = 1; i <= 5; i++) {

//     for (let j = 1; j <= 5; j++) {
//         stars = stars + "🌙";
//     };

//     stars = stars + "\n";
// };

// console.log(stars);

// var squareRootOf = 4;
// var squareRootvalue;

// for (let i = 1; i <= squareRootOf; i++) {
//     // console.log(i);

//     squareRootvalue = squareRootOf * i;
//     // console.log(squareRootvalue);
// };

// console.log("Square root value: ", squareRootvalue);


// var arr = ["a", "h", "m", "e", "d"];
// // console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr);

//     var lastItem = arr.pop();
//     arr.unshift(lastItem);
// };



// let appointmentTime = 10;
// console.log("Appointment time: ", appointmentTime);

// let currentTime = new Date().getMinutes();
// console.log("Current time: ", currentTime);

// let calculateTime = currentTime - appointmentTime;
// console.log('Calculated time: ', calculateTime);


// let rightNow = new Date();
// let targetDate = new Date("01 December 2023");

// let rightNowinMS = rightNow.getTime();
// let targetDateInMS = targetDate.getTime();

// let calculateMS = targetDateInMS - rightNowinMS
// let applyMonthFormula = calculateMS / (1000 * 60 * 60 * 24 * 30);
// applyMonthFormula = Math.ceil(applyMonthFormula);
// console.log(applyMonthFormula + " months left till december!");








// let rightNow = new Date();
// let targetDate = new Date();
// targetDate.setHours(targetDate.getHours() - 1);
// console.log('Current date: ' , rightNow);
// console.log('1 hour ago, it was: ' , targetDate);
















// this.myName = "ahmed";
// console.log(window.myName);

// var rightNow = new Date();
// rightNow.setDate('28');
// console.log(rightNow);

// console.log(Math.max('5', '2', '10'));


// var userInput = prompt("Write anything");
// var result = userInput || "Data not available!";
// console.log(result);


// var h1 = document.getElementById("header");
// console.log(h1); 

// const changeClassHandler = () => {
//     h1.setAttribute("class", "aaammm");
//     console.log(h1);
// };


// var inputTag = document.getElementById("inputField");

// inputTag.addEventListener("keypress", (e) => {
//     // console.log(e);

//     if (e.key == "Backspace") {
//         return false;
//     };
// });

// var input = document.getElementById('inputField');

// input.onkeydown = function() {
//     var key = event.keyCode || event.charCode;

//     if( key == 8 || key == 46 )
//         return false;
// };









// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [3, 4, 5, 6, 7];

// var intersection =
//     arr1.filter((eachItem) => {
//         // console.log(eachItem);

//         return arr2.includes(eachItem);
//     });

// console.log(intersection);








// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];

// var mixedArr = [...arr1, ...arr2];
// // console.log(mixedArr);

// var unionArr =
//     mixedArr.filter((item, index) => {
//         // console.log(item);
//         return mixedArr.indexOf(item) == index;
//     });
// console.log(unionArr);




// const computerTurn = () => {

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             let diceValue = Math.floor((Math.random() * 6)) + 1;
//             resolve(diceValue);
//         }, 3000);
//     });
// };

// const playDice = async () => {
//     let diceValue = Math.floor((Math.random() * 6)) + 1;
//     console.log("user turn: ", diceValue);

//     if (diceValue) {
//         let systemTurn = await computerTurn();
//         console.log('System turn: ', systemTurn);
//     };
// };

// let h1 = document.getElementById("header");

// const apiCall = () => {
//     let apiUrl = "http://color-names.herokuapp.com/v1/";

//     fetch(apiUrl)
//         .then(res => { return res.json() })
//         .then(colorsData => {
//             console.log(colorsData?.colors);
//             h1.style.color = colorsData?.colors[2000]?.hex;
//         })
//         .catch(err => { console.log("Something went wrong while integrating colors api: ", err) });
// };

// apiCall();

// let videoEl = document.getElementById("video-tag");

// const playVideo = () => {
//     // console.log(videoEl);
//     videoEl.play();
// };


// function greetUser() {
//     console.log("Hello Ahmed!");
// };

// console.log(typeof greetUser);

// setTimeout(greetUser, 2000);
// // console.log(tagsData);

// let update1 = {
//     previousUrl: "http://res.cloudinary.com/dbhhjzp1n/image/upload/v1693917236/pkve4dxl9slc6abajcj1.jpg",
//     updatedValue: "http://res.cloudinary.com/dbhhjzp1n/image/upload/v1693919061/ex8kj9nemjxbsoghrmsv.jpg"
// };
// console.log('Updated One: ', update1);

// let update3 = {
//     previousUrl: "http://res.cloudinary.com/dbhhjzp1n/image/upload/v1693917344/zcvlevdp9u6ocwfqukbl.jpg",
//     updatedValue: "http://res.cloudinary.com/dbhhjzp1n/image/upload/v1693919090/qfr9pkpkobv2i2crqebu.jpg"
// };

// let updatedData = tagsData.replace(update1.previousUrl, update1.updatedValue);
// console.log(updatedData);

// let paragraph = "Employment-based visas, or work visas as they are commonly known, are one of the most popular visa categories. With the rise in employment opportunities for skilled individuals across the globe, more and more talented and qualified individuals are seeking employment opportunities globally.";
// console.log(paragraph);

// let dataInArr = paragraph.split(" ");
// console.log(dataInArr);


// let seeMoreBtn = document.getElementById("see-more-btn");
// let seeLessBtn = document.getElementById("see-less-btn");
// let pEl = document.getElementById("para");
// let text = pEl.innerText;
// let fullText = JSON.stringify(text);
// let dataInArr = text.split(" ");
// // console.log(dataInArr);

// if (dataInArr.length >= 25) {
//     let arrClone = dataInArr.slice(0, 25);
//     arrClone.push("see more...");
//     // console.log(arrClone);

//     let dataInStr = arrClone.join(" ");
//     // console.log(dataInStr);

//     pEl.innerText = dataInStr;
//     seeLessBtn.disabled = true;
// };

// const seeMore = () => {
//     pEl.innerText = fullText;
//     seeMoreBtn.disabled = true;
//     seeLessBtn.disabled = false;
// };

// const seeLess = () => {
//     let arrClone = dataInArr.slice(0, 25);
//     arrClone.push("see more...");
//     // console.log(arrClone);

//     let dataInStr = arrClone.join(" ");
//     // console.log(dataInStr);

//     pEl.innerText = dataInStr;
//     seeLessBtn.disabled = true;
//     seeMoreBtn.disabled = false;
// };

// var inputField = document.getElementById("input");

// const timeIn = () => {
//     let userValue = inputField.value;
//     let requiredFormat = new Date(userValue);
//     console.log(requiredFormat);
//     // if (requiredFormat.getDate() == new Date().getDate()) {
//     //     console.log('Pichla allow nahi hy');
//     // }

//     // else console.log('Go ahead!');
// };


// var userCreatedAt = new Date("2023-09-08T12:06:37.507+00:00")
// console.log(userCreatedAt);

// var rightNow = new Date();
// console.log(rightNow);

// var calculatedMs = rightNow.getTime() - userCreatedAt.getTime();
// var applyFormula = calculatedMs / (1000 * 60);
// applyFormula = Math.floor(applyFormula);
// console.log(applyFormula);

// let arr = [2, 4, 6, 8, 10];
// // console.log(arr);

// let updatedArr = arr.map((item) => {
//     // console.log(item);
//     return item + 3;
// });

// console.log(updatedArr);


// var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// console.log(days);

// var rightNow = new Date().getDay();
// console.log(rightNow);

// if (days.indexOf(days[rightNow]) != -1) console.log('Today is your day: ' , days[rightNow]);
// else console.log('Today is not your day!');

// if (days.includes(days[rightNow])) console.log('Today is your day: ', days[rightNow]);
// else console.log('Today is not your day!');


// function testing() {
//     var x = 'abc';
//     console.log(x);
// };

// setTimeout(testing, 1000);




let standardSchedule = [
    {
        day: "monday",
        startTime: "6:00 PM",
        endTime: "8:00 PM",
        _id: "650c2fe6ebf2528d9ec7e22c"
    },

    {
        day: "tuesday",
        startTime: "5:00 PM",
        endTime: "7:00 PM",
        _id: "650c2fe6ebf2528d9ec7e22d"
    },

    {
        day: "wednesday",
        startTime: "4:00 PM",
        endTime: "6:00 PM",
        _id: "650c2fe6ebf2528d9ec7e22e"
    }
];
console.log(standardSchedule);

let currentSchedule = [
    {
        day: "monday",
        startTime: "6:00 PM",
        endTime: "10:00 PM",
        standardScheduleDayId: "650c2fe6ebf2528d9ec7e22c",
        _id: "651510521e96c472e90d7133"
    },

    {
        day: "wednesday",
        startTime: "5:30 PM",
        endTime: "8:30 PM",
        standardScheduleDayId: "650c2fe6ebf2528d9ec7e22e",
        _id: "651510521e96c472e90d7133"
    }
];

console.log(currentSchedule);

for (let schedules of standardSchedule) {
    // console.log('Standard: ', schedules);

    for (let updatedSchedules of currentSchedule) {
        // console.log('Current: ', updatedSchedules);

        if (updatedSchedules.standardScheduleDayId == schedules._id) {
            schedules.startTime = updatedSchedules.startTime;
            schedules.endTime = updatedSchedules.endTime;
        }
    };
};

console.log('Modified standard schedule: ', standardSchedule);