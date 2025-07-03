// variables declaration

const accId = 10101;
let email = "jitendra@gmail.com";
var password = "123456";
city = "jaipur";

console.table([accId,email,password,city]);

// accId = 20202; it is constant value that why its value not change
email = "jitu@gmail.com";
password = "01234";
city = "banglore";

console.table([accId,email,password,city]);

// note:- never prefer var keyword to define the variable because of issue in block scope and functional scope problem