
const Name = new String("  Jitendra Devatwal  ");
// console.log(Name);

// trim()
const nameTrim = Name.trim();
console.log(nameTrim);

// charAt()
const At1 = nameTrim.charAt(5);
console.log(At1);

// charCodeAt()
const TestCharCodeAt= nameTrim.charCodeAt(4);
console.log(TestCharCodeAt);

// concat()
const testConcat = nameTrim.concat(" is a good developer");
console.log(testConcat);


// indexof
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1,
  )}`,
);


// Masking a credit card number
// padStart()
const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-5);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber);

// padEnd()
const paddedString = "Hello";
const paddedWithZeros = paddedString.padEnd(10, "0");
console.log(paddedWithZeros); // "Hello00000"

// repeat()
const repeatedString = "Hello".repeat(3);
console.log(repeatedString); // "HelloHelloHello"

// split()
const sentence = "Hello, how are you?";
const words = sentence.split(" */ ");
console.log(words); // ["Hello,", "how", "are", "you?"]

// slice()
const slicedString = "Hello, World!".slice(0, 5);
console.log(slicedString); // "Hello"

// toLowerCase() and toUpperCase()
const lowerCaseString = "Hello, World!".toLowerCase();
console.log(lowerCaseString); // "hello, world!"

const upperCaseString = "Hello, World!".toUpperCase();
console.log(upperCaseString); // "HELLO, WORLD!"

// toString()
const num = 123;
const numToString = num.toString();
console.log(numToString); // "123"

// valueOf()
const strObj = new String("Hello, World!");
const strValue = strObj.valueOf();
console.log(strValue); // "Hello, World!"

// includes()
const text = "Hello, how are you?";
const containsHello = text.includes("Hello");
console.log(containsHello); // true
const containsWorld = text.includes("World");
console.log(containsWorld); // false

// startsWith() and endsWith()
const startsWithHello = text.startsWith("Hello");
console.log(startsWithHello); // true
const endsWithYou = text.endsWith("you?");
console.log(endsWithYou); // true

// search()
const searchResult = text.search("how");
console.log(searchResult); // 7 (index of "how")
// match()
const matchResult = text.match(/how/);
console.log(matchResult); // ["how", index: 7, input: "Hello, how are you?", groups: undefined]
// matchAll()
const matchAllResult = text.matchAll(/o/g);
for (const match of matchAllResult) {
  console.log(match); // ["o", index: 4, input: "Hello, how are you?", groups: undefined]
}
// replace()
const replacedText = text.replace("Hello", "Hi");
console.log(replacedText); // "Hi, how are you?"
// replaceAll()
const replacedAllText = text.replaceAll("o", "0");
console.log(replacedAllText); // "Hell0, h0w are y0u?"


// search()
const searchText = "Hello, how are you?";
const searchIndex = searchText.search("how");
console.log(searchIndex); // 7 (index of "how")


// localeCompare()
const str1 = "apple";
const str2 = "banana";
const comparisonResult = str1.localeCompare(str2);
console.log(comparisonResult); // -1 (str1 comes before str2 in lexicographic order)

// substring()
const substringExample = "Hello, World!";
const substringResult = substringExample.substring(0, 5);
console.log(substringResult); // "Hello"