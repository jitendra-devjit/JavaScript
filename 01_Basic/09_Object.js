// Singleton  
const array2 = new Array(1, 2, 3, 4, 5);
console.log(array2); // [1, 2, 3, 4, 5]
// Object.create({
//   name: 'harshit',
//     age: 25,
// });

console.log("---------------------------------------");


// literal object

// symbol datatype use in object for interview

const mysymbol = Symbol('mySymbol');


const person = {
  name: 'Jitendra Devatwal',
  "Nicknmae": 'Jitu',
  age: 21,
  location: 'India',
    [mysymbol]: 'This is a symbol property',             // symbol property in square brackets
  'email': 'jitendradevatwal@google.com',
  hobbies: ['coding', 'reading', 'gaming'],
};

// Accessing properties
console.log(person.name); // Jitendra Devatwal  
console.log(person['age']); // 21
console.log(person.location); // India
console.log(person[mysymbol]); // This is a symbol property
console.log(person.hobbies[0]); // coding
console.log(person["email"]); //
console.log(person['Nicknmae']); // Jitu


person.email = 'jitendrachatgpt.com'; // Updating email property
console.log(person.email); // jitendrachatgpt.com

console.log("---------------------freeze------------------");
// Freezing the object to prevent modifications
// Object.freeze(person);

person.email = 'jitendramicrosoft.com'; // Attempting to change email property after freeze
console.log(person.email); // jitendrachatgpt.com (remains unchanged)

console.log("---------------------function------------------");
// Function as a property
person.greet = function() {
  console.log(`Hello person`);
};

person.greet = function() {
  console.log(`Hello, ${this.name}`);
};

console.log(person.greet);  
console.log(person.greet()); // Hello, Jitendra Devatwal

console.log("---------------------assign------------------");
// Object.assign to copy properties from one object to another
const user1 = {
    name1: 'John',
    age1: 30,
    email1: 'john@gmail.com',
    location1: 'USA',
};
const user2 = {
    name2: 'Jane',
    age2: 25,
    email2: 'jane123@gmail.com',
    location2: 'Canada',
};  
const user3 = {
    name3: 'Doe',
    age3: 28,
    email3: 'Doeabc@gmail.com',
    location3: 'UK',
};

const mergedUser = Object.assign({}, user1, user2, user3); // Merging user1, user2, and user3 into a new object
console.log(mergedUser); 


console.log("---------------------spread------------------");
// Using spread operator to merge objects
const mergedUserSpread = {...user1, ...user2, ...user3}; // Merging user1, user2, and user3 using spread operator
console.log(mergedUserSpread); 


console.log("---------------------keys------------------");
// Object.keys to get an array of property names
const keys = Object.keys(person);
console.log(keys); // ['name', 'Nicknmae', 'age', 'location', Symbol(mySymbol), 'email', 'hobbies', 'greet']



console.log("---------------------values------------------");
// Object.values to get an array of property values
const values = Object.values(person);
console.log(values); // ['Jitendra Devatwal', 'Jitu', 21, 'India', 'This is a symbol property', 'jitendrachatgpt.com', ['coding', 'reading', 'gaming'], [Function: greet]]



console.log("---------------------entries------------------");
// Object.entries to get an array of key-value pairs
const entries = Object.entries(person);
console.log(entries); // [['name', 'Jitendra Devatwal'], ['Nicknmae', 'Jitu'], ['age', 21], ['location', 'India'], [Symbol(mySymbol), 'This is a symbol property'], ['email', 'jitendrachatgpt.com'], ['hobbies', ['coding', 'reading', 'gaming']], ['greet', [Function: greet]]]



console.log("---------------------hasOwnProperty------------------");
// Checking if the object has a specific property
console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty(' address')); // false


console.log("---------------------delete------------------");
// Deleting a property from the object
delete person.age; // Deleting the 'age' property
console.log(person.age); // undefined (property is deleted)



console.log("---------------------toString------------------");
// Converting the object to a string
console.log(person.toString()); // [object Object] (default string representation of an object)



console.log("---------------------JSON.stringify------------------");
// Converting the object to a JSON string
console.log(JSON.stringify(person)); // '{"name":"Jitendra Devatwal","Nicknmae":"Jitu","location":"India","email":"jitendrachatgpt.com","hobbies":["coding","reading","gaming"],"greet":{}}' (stringified JSON representation of the object)



console.log("---------------------JSON.parse------------------");
// Parsing a JSON string back to an object
const jsonString = '{"name":"Jitendra Devatwal","Nicknmae":"Jitu","age":21,"location":"India","email":"jitendrachatgpt.com","hobbies":["coding","reading","gaming"]}';

const parsedObject = JSON.parse(jsonString);
console.log(parsedObject); 
console.log(parsedObject.name); // Jitendra Devatwal
console.log(parsedObject.age); // 21
console.log(parsedObject.hobbies[0]); // coding
console.log(parsedObject['email']); // jitendrachatgpt.com
console.log(parsedObject.Nicknmae); // Jitu
console.log(parsedObject['Nicknmae']); // Jitu
console.log(parsedObject.location); // India
console.log(parsedObject['location']); // India
console.log(parsedObject.hobbies.length); // 3 (length of the hobbies array)
console.log(parsedObject.hobbies[1]); // reading
console.log(parsedObject.hobbies[2]); // gaming
console.log(parsedObject.hobbies[3]); // undefined (index out of bounds)
console.log(parsedObject.hobbies[parsedObject.hobbies.length - 1]); // gaming (last element of the hobbies array)
console.log(parsedObject.hobbies[0].toUpperCase()); // CODING (uppercase first hobby)
console.log(parsedObject.hobbies.join(', ')); // coding, reading, gaming (joining hobbies with a comma)
console.log(parsedObject.hobbies.map(hobby => hobby.toUpperCase())); // ['CODING', 'READING', 'GAMING'] (mapping hobbies to uppercase)
console.log(parsedObject.hobbies.filter(hobby => hobby.length > 5)); // ['reading', 'gaming'] (filtering hobbies with length > 5)
console.log(parsedObject.hobbies.find(hobby => hobby === 'coding')); // coding (finding a specific hobby)
console.log(parsedObject.hobbies.findIndex(hobby => hobby === 'reading')); // 1 (index of 'reading' in the hobbies array)
console.log(parsedObject.hobbies.includes('gaming')); // true (checking if 'gaming' is in the hobbies array)
console.log(parsedObject.hobbies.sort()); // ['coding', 'gaming', 'reading'] (sorting hobbies alphabetically)
console.log(parsedObject.hobbies.reverse()); // ['gaming', 'reading', 'coding'] (reversing the order of hobbies)
console.log(parsedObject.hobbies.length); // 3 (length of the hobbies array)
console.log(parsedObject.hobbies.indexOf('coding')); // 0 (index of 'coding' in the hobbies array)
console.log(parsedObject.hobbies.lastIndexOf('gaming')); // 2 (last index of 'gaming' in the hobbies array)
console.log(parsedObject.hobbies.every(hobby => hobby.length > 3)); // false (not all hobbies have length > 3)
console.log(parsedObject.hobbies.some(hobby => hobby.length > 5)); // true (some hobbies have length > 5)
console.log(parsedObject.hobbies.reduce((acc, hobby) => acc + ', ' + hobby)); // coding, reading, gaming (reducing hobbies to a single string)
console.log(parsedObject.hobbies.slice(0, 2)); // ['coding', 'reading'] (slicing the first two hobbies)
console.log(parsedObject.hobbies.splice(1, 1)); // ['reading'] (removing 'reading' from the hobbies array)
console.log(parsedObject.hobbies); // ['coding', 'gaming'] (hobbies after splice)
console.log(parsedObject.hobbies.concat(['swimming', 'running'])); // ['coding', 'gaming', 'swimming', 'running'] (concatenating new hobbies)
console.log(parsedObject.hobbies.join(' - ')); // coding - gaming (joining hobbies with a hyphen)
console.log(parsedObject.hobbies.map(hobby => hobby.length)); // [6, 6] (length of each hobby)
console.log(parsedObject.hobbies.filter(hobby => hobby.startsWith('c'))); // ['coding'] (filtering hobbies that start with 'c')
console.log(parsedObject.hobbies.find(hobby => hobby.endsWith('g'))); // gaming (finding a hobby that ends with 'g')
console.log(parsedObject.hobbies.findIndex(hobby => hobby.includes('a'))); // -1 (no hobby includes 'a', so returns -1)
console.log(parsedObject.hobbies.includes('swimming')); // false (checking if 'swimming' is in the hobbies array)
console.log(parsedObject.hobbies.sort((a, b) => a.length - b.length)); // ['coding', 'gaming'] (sorting hobbies by length)
console.log(parsedObject.hobbies.reverse()); // ['gaming', 'coding'] (reversing the order of hobbies)
console.log(parsedObject.hobbies.length); // 2 (length of the hobbies array after modifications)    

