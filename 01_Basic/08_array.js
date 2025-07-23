// **************************Array**************************

const myarray = [1, 2, 3, 4, 5];
console.log(myarray); // [1, 2, 3, 4, 5]
console.log('---------------------indexing-----------------------');

// access value from indexing
console.log(myarray[0]); // 1
console.log(myarray[1]); // 2

console.log('----------------------push----------------------');

const arr1 = new Array(0,1,2,3,4,5,6,7,8,9,10); 

// push elements to the end of the array    
arr1.push(11);
arr1.push(12);

console.log(arr1); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log('-----------------------pop---------------------');


// pop elements from the end of the array
arr1.pop();
arr1.pop();

console.log(arr1); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('----------------------unshift----------------------');


// unshift elements to the beginning of the array
arr1.unshift(-2);
arr1.unshift(-1);

console.log(arr1); // [-1, -2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('-----------------------shift---------------------');


// shift elements from the beginning of the array
arr1.shift();
arr1.shift();

console.log(arr1); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('---------------------slice-----------------------');


// slice elements from the array
const slicedArray = arr1.slice(2, 5); // Slices from index 2 to index 5 (not inclusive)
console.log(slicedArray); // [2, 3, 4]
console.log(arr1); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('------------------------splice--------------------');


// splice elements from the array
const slicedArray1 = arr1.splice(2, 6); // Splices from index 2, removing 6 elements
console.log(slicedArray1); // [2, 3, 4, 5, 6, 7]
console.log(arr1); // [0, 1, 8, 9, 10]


console.log('------------------------isArray--------------------');
// isArray
console.log(Array.isArray(arr1)); // true

console.log('------------------------from--------------------');
// from
const arrayFromString = Array.from('Jitendra Devatwal'); // Converts a string to an array of characters
console.log(arrayFromString); // ['J', 'i', 't', 'e', 'n', 'd', 'r', ' ', 'D', 'e', 'v', 'a', 't', 'w', 'a', 'l']

const arrayFromString1 = Array.from({name: 'Jitendra Devatwal'}); // Converts an object to an array
console.log(arrayFromString1); 

console.log('------------------------of--------------------');
// of
const score1 = 100;
const score2 = 200;
const score3 = 300;
const score4 = 400;
const arrayOfNumbers = Array.of(score1,score2,score3,score4);
console.log(arrayOfNumbers); // [100, 200, 300, 400]


console.log('-----------------------array ---------------------');

const schoolBoys_friends = ['harshit', 'sujal', 'digu', 'vishu', 'sahil', 'kasim', 'rohit', ];
const schoolGirls_friends = ['maria', 'kulsum', 'urvashi', 'priya'];
const collegeBoys_friends = ['kunal', 'ridam', 'harish', 'preet'];
const collegeGirls_friends = ['kinjal', 'dimple', 'supriya', 'palak'];

console.log('schoolBoys_friends:', schoolBoys_friends);
console.log('schoolGirls_friends:', schoolGirls_friends);
console.log('collegeBoys_friends:', collegeBoys_friends);
console.log('collegeGirls_friends:', collegeGirls_friends);

console.log('---------------------Concat----------------------');
// Concatenating arrays
const allFriends = schoolBoys_friends.concat(schoolGirls_friends, collegeBoys_friends, collegeGirls_friends);
console.log('allFriends:', allFriends); // All friends from different groups

console.log('---------------------Join-----------------------');
// Joining array elements into a string
const friendsString = allFriends.join(', ');
console.log('friendsString:', friendsString); // "harshit, sujal, digu, vishu, sahil, kasim, rohit, maria, kulsum, urvashi, priya, kunal, ridam, harish, preet, kinjal, dimple, supriya, palak"

console.log('---------------------spread----------------------');
// Using spread operator to create a new array
const newFriends = [...schoolBoys_friends, ...schoolGirls_friends, ...collegeBoys_friends, ...collegeGirls_friends];
console.log('newFriends:', newFriends); // All friends from different groups using spread operator

console.log('---------------------forEach----------------------');
// Iterating over an array using forEach
allFriends.forEach((friend, index) => {
    console.log(`Friend ${index + 1}: ${friend}`);
});
console.log('---------------------map----------------------');
// Mapping over an array to create a new array
const upperCaseFriends = allFriends.map(friend => friend.toUpperCase());
console.log('upperCaseFriends:', upperCaseFriends); // All friends' names in uppercase

console.log('---------------------filter----------------------');

// Filtering an array to get friends with names longer than 5 characters
const longNameFriends = allFriends.filter(friend => friend.length > 5);
console.log('longNameFriends:', longNameFriends); // Friends with names longer than 5 characters

console.log('---------------------find----------------------');
// Finding a specific friend in the array
const foundFriend = allFriends.find(friend => friend === 'harshit');
console.log('foundFriend:', foundFriend); // 'harshit' if found, otherwise undefined

console.log('---------------------findIndex----------------------');
// Finding the index of a specific friend in the array
const foundFriendIndex = allFriends.findIndex(friend => friend === 'harshit');
console.log('foundFriendIndex:', foundFriendIndex); // Index of 'harshit' in the array

console.log('---------------------includes----------------------');
// Checking if a specific friend is in the array
const hasFriend = allFriends.includes('harshit');
console.log('hasFriend:', hasFriend); // true if 'harshit' is in the array, otherwise false 

console.log('---------------------reduce----------------------');
// Reducing the array to a single value (concatenating all names)
const allFriendsString = allFriends.reduce((acc, friend) => acc + ', ' + friend);
console.log('allFriendsString:', allFriendsString); // Concatenated string of all friends

console.log('---------------------sort----------------------');
// Sorting the array of friends alphabetically
const sortedFriends = allFriends.sort();
console.log('sortedFriends:', sortedFriends); // Friends sorted in alphabetical order

console.log('---------------------reverse----------------------');
// Reversing the order of the array
const reversedFriends = allFriends.reverse();
console.log('reversedFriends:', reversedFriends); // Friends in reverse order

console.log('---------------------length----------------------');
// Getting the length of the array
const friendsCount = allFriends.length;
console.log('friendsCount:', friendsCount); // Total number of friends in the array


console.log('---------------------indexOf----------------------');
// Finding the index of a specific friend
const indexOfFriend = allFriends.indexOf('harshit');
console.log('indexOfFriend:', indexOfFriend); // Index of 'harshit' in the array


console.log('---------------------lastIndexOf----------------------');
// Finding the last index of a specific friend
const lastIndexOfFriend = allFriends.lastIndexOf('harshit');
console.log('lastIndexOfFriend:', lastIndexOfFriend); // Last index of 'harshit' in the array


console.log('---------------------every----------------------');    
// Checking if every friend has a name longer than 3 characters
const allLongNames = allFriends.every(friend => friend.length > 3);
console.log('allLongNames:', allLongNames); // true if all names are longer than 3 characters, otherwise false


console.log('---------------------some----------------------');
// Checking if some friends have names longer than 5 characters
const someLongNames = allFriends.some(friend => friend.length > 5);
console.log('someLongNames:', someLongNames); // true if at least one name is longer than 5 characters, otherwise false

console.log('---------------------fill----------------------');
// Filling an array with a specific value
const filledArray = new Array(5).fill('empty');
console.log('filledArray:', filledArray); // ['empty', 'empty', 'empty', 'empty', 'empty']


console.log('---------------------copyWithin----------------------');
// Copying elements within the array
const copyWithinArray = [1, 2, 3, 4, 5];
copyWithinArray.copyWithin(0, 3); // Copies elements from index 3 to index 0
console.log('copyWithinArray:', copyWithinArray); // [4, 5, 3, 4, 5]


console.log('---------------------flat----------------------');
// Flattening a nested array
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = nestedArray.flat(2); // Flattens the array to depth
console.log('flatArray:', flatArray); // [1, 2, 3, 4, 5, 6]


console.log('---------------------flatMap----------------------');
// Mapping and flattening an array
const flatMappedArray = allFriends.flatMap(friend => [friend, friend.toUpperCase()]);
console.log('flatMappedArray:', flatMappedArray); // Each friend's name and its uppercase version







