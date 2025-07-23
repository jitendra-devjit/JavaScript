const date = new Date();

console.log(date); // Current date and time
console.log(date.getDate()); // Timestamp in milliseconds since January 1, 1970
console.log(date.getTime()); // Current date and time in milliseconds
console.log(date.getFullYear()); // Current year    
console.log(date.getMonth()); // Current month (0-11, where 0 is January)
console.log(date.getDay()); // Current day of the week (0-6, where 0 is Sunday)
console.log(date.getHours()); // Current hour (0-23)    
console.log(date.getMinutes()); // Current minutes (0-59)
console.log(date.getSeconds()); // Current seconds (0-59)
console.log(date.getMilliseconds()); // Current milliseconds (0-999)
console.log("---------------------------------------");


console.log(date.getUTCDate()); // Current UTC date
console.log(date.getUTCHours()); // Current UTC hour (0-23)
console.log(date.getUTCMinutes()); // Current UTC minutes (0-59)
console.log(date.getUTCSeconds()); // Current UTC seconds (0-59)
console.log(date.getUTCMilliseconds()); // Current UTC milliseconds (0-999)
console.log(date.getUTCFullYear()); // Current UTC year
console.log(date.getUTCMonth()); // Current UTC month (0-11, where 0 is January)
console.log(date.getUTCDay()); // Current UTC day of the week (0-6, where 0 is Sunday)
console.log("---------------------------------------");

console.log(date.toDateString()); // Date in a human-readable format
console.log(date.toTimeString()); // Time in a human-readable format
console.log(date.toISOString()); // Date in ISO format
console.log(date.toUTCString()); // Date in UTC format
console.log(date.toLocaleDateString()); // Date in local format
console.log(date.toLocaleTimeString()); // Time in local format
console.log(date.toLocaleString()); // Date and time in local format

