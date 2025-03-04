// ==========================================
// Task 1
// ==========================================

// function sayHello(theName, theGender) {
//   document.write(`<div>`);
//   if (theGender === "Male") {
//     document.write(`<h1>Hello Mr ${theName}</h1>`);
//   } else if (theGender === "Female") {
//     document.write(`<h1>Hello Miss ${theName}</h1>`);
//   } else document.write(`<h1>Hello ${theName}</h1>`);
//   document.write(`</div>`);
// }

// ==========================================
// Task 2
// ==========================================
// function calculate(firstNum, secondNum, operation) {
//   if (secondNum==undefined) {
//     console.log("Second Number Not Found");
//   } else if (operation === "subtract") {
//     console.log(firstNum - secondNum);
//   } else if (operation === "multiply") {
//     console.log(firstNum * secondNum);
//   } else {
//     console.log(firstNum + secondNum);
//   }
// }

// ==========================================
// Task 3
// ==========================================

// function ageInTime(theAge) {
//   if (theAge > 10 && theAge < 100) {
//     console.log(`Months Example => ${theAge * 12} Months`);
//     console.log(`Weeks Example => ${theAge * 12 * 4} Weeks`);
//     console.log(`Days Example => ${theAge * 12 * 4 * 7} Days`);
//     console.log(` Hours Example => ${theAge * 12 * 4 * 7 * 24} Hours`);
//     console.log(`Minuts Example => ${theAge * 12 * 4 * 7 * 24 * 60} Minuts`);
//     console.log(
//       `Seconds Example => ${theAge * 12 * 4 * 7 * 24 * 60 * 60} Seconds`
//     );
//   } else {
//     console.log("Age Out Of Range");
//   }
// }

// ==========================================
// Task 4
// ==========================================

// const checkStatus = (a, b, c) => {
//   let strvalue = typeof a == "string" ? a : typeof b == "string" ? b : c;
//   let numvalue = typeof a == "number" ? a : typeof b == "number" ? b : c;
//   let bolvalue = typeof a == "boolean" ? a : typeof b == "boolean" ? b : c;
//   console.log(
//     `Hello ${strvalue},Your age Is ${numvalue}, ${bolvalue ? `You Are Available For Hire` : `You Are Not Available For Hire`}`
//   );
// };
// Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// ==========================================
// Task 5
// ==========================================

// function createSelectBox(startYear, endYear) {
//     document.write(`<select>`)
//     for(let i=startYear ; i<=endYear ; ++i)
//     {
//         document.write(`<option value=${i}>${i}</option>`)
//     }
//     document.write(`</select>`)
//   }

//createSelectBox(2000, 2021);

// ==========================================
// Task 6
// ==========================================
// const multiply=(...data)=>{
//     let result=1;
//     for(let i=0; i<data.length ; ++i)
//     {
//         if( typeof data[i]=="number")
//         {
//             result*=Math.trunc(data[i]);
//         }
//     }
//     console.log(result);
// }
// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000