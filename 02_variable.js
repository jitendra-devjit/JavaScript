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

var score1 = ()=>{
    var score = 100;
    console.log("Score is 1: " + score);

    if (true) {
        var score = 200; // this will change the value of score in the entire function scope
        console.log("Score is 2: " + score);
    }
    console.log("Score is 3: " + score);
}
score1();


let Marks = ()=>{
    let Marks = 100;
    console.log("Marks is 1:" + Marks);

    if (true) {
        let Marks = 200; // this will change the value of score in the entire function scope
        console.log("Marks is 2:" + Marks);
    }
    console.log("Marks is 3:" + Marks);
}
Marks();