console.log("------------------------object-destructuring--------------------");

// Object destructuring
const person1 = {
    name: 'Jitendra Devatwal',
    age: 21,
    location: 'India',
    email: 'jitendradev123@google.com',
    hobbies: ['coding', 'reading', 'gaming'],
};

const { name, age, location, email, hobbies } = person1;
console.log(name); // Jitendra Devatwal
console.log(age); // 21
console.log(location); // India
console.log(email); //jitendradev123@google.com
console.log(hobbies); // ['coding', 'reading', 'gaming']

console.log("------------------------nested-object-destructuring--------------------");
// Nested object destructuring
const user1 = {
    name: 'Jitendra Devatwal',
    age: 21,
    location: 'India',
    hobbies: ['coding', 'reading', 'gaming'],
    address: {
        city: 'jaipur',
        state: 'Rajasthan',
        country: 'India',
    },
}
const { name: userName, address: { city, state, country } } = user1;
console.log(userName); // Jitendra Devatwal
console.log(city); // Delhi
console.log(state); // Delhi
console.log(country); // India


console.log("------------------------array-destructuring--------------------");
// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, third, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(rest); // [4, 5]
console.log("------------------------nested-array-destructuring--------------------");
// Nested array destructuring
const nestedArray = [1, [2, 3], 4, 5];
const [one, [two, three], four, five] = nestedArray;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
console.log(four); // 4
console.log(five); // 5
console.log("------------------------function-parameter-destructuring--------------------");
// Function parameter destructuring
function displayUser({ name, age, location }) {
    console.log(`Name: ${name}, Age: ${age}, Location: ${location}`);
}
displayUser({ name: 'Jitendra Devatwal', age: 21, location: 'India' });

console.log("------------------------function-parameter-nested-destructuring--------------------");
// Function parameter nested destructuring
function displayUserDetails({ name, address: { city, state } }) {
    console.log(`Name: ${name}, City: ${city}, State: ${state}`);
}
displayUserDetails({
    name: 'Jitendra Devatwal',
    address: {
        city: 'jaipur',
        state: 'Rajasthan',
        country: 'India',
    },
});


console.log("------------------------json data handling--------------------");
// JSON data handling
const jsonData = `{
    "name": "Jitendra Devatwal",
    "age": 21,
    "location": "India",
    "hobbies": ["coding", "reading", "gaming"],
    "address": {
        "city": "jaipur",
        "state": "Rajasthan",
        "country": "India"
    }
}`;
const parsedData = JSON.parse(jsonData);
const { name: jsonName, address: { city: jsonCity, state: jsonState } } = parsedData;
console.log(jsonName); // Jitendra Devatwal
console.log(jsonCity); // jaipur
console.log(jsonState); // Rajasthan


