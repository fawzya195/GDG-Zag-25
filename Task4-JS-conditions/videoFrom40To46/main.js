let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice((myFriends.indexOf("Ahmed")),num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice((myFriends.indexOf("Ahmed")),num)); // ["Ahmed", "Elham", "Osama"];


// ==========================
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends.splice(friends.indexOf("Eman"),friends.indexOf("Osama"))); // ["Eman", "Osama"]

// =============================================
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr=(arrOne.concat(arrTwo)).sort().reverse()

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]


// ================================
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.reverse()[0][0].slice(website.length).toUpperCase());  // ZERO

//=================================================

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
console.log(haystack.indexOf(needle)?"Found":null);
console.log(haystack.includes(needle)?"Found":null);
haystack.forEach(element =>{(element===needle)?console.log("Found"):null});

// ========================================
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs=(arr1.concat(arr2).sort().join("")).slice(-arr1.length).toLowerCase();

console.log(allArrs); // fxy
