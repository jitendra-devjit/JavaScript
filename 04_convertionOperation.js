// for string to number
let score = "7abc";

console.log(typeof score);


let convertValue = Number(score);
console.log(typeof convertValue);

console.log(convertValue);
console.log("--------------------------------");
// for null to number
let score1 = null;

console.log(typeof score1);


let convertValue1 = Number(score1);
console.log(typeof convertValue1);

console.log(convertValue1);

console.log("--------------------------------");

// for undefined value to no.

let score2 = undefined;

console.log(typeof score2);


let convertValue2 = Number(score2);
console.log(typeof convertValue2);

console.log(convertValue2);
console.log("--------------------------------");

// for boolean value to no.

let score3 = true;

console.log(typeof score3);


let convertValue3 = Number(score3);
console.log(typeof convertValue3);

console.log(convertValue3);
console.log("--------------------------------");

// for number to bool

let loggedNum = 1;
console.log(typeof loggedNum);


let loggedbool = Boolean(loggedNum);
console.log(typeof loggedbool);
console.log(loggedbool);

console.log("--------------------------------");

// if sting is empty

let loggedNum1 = "";


let loggedbool1 = Boolean(loggedNum1);
console.log(loggedbool1);

console.log("--------------------------------");

// if sting is not empty

let loggedNum2 = "jitu";

let loggedbool2 = Boolean(loggedNum2);
console.log(loggedbool2);

// 1 => "true" or 0 => "false"
// "" => false
// "jitu" => true

console.log("--------------------------------");

// convert number to string

let num = 10;
console.log(typeof num);

let convertString = String(num);

console.log(typeof convertString);
console.log(convertString);
