// Task 1

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let newarr=mix.map(
//     (e)=>{
//         return (isNaN(e))?e:"";
//     }
// ).reduce(
//     (acc,curr)=>{
//         return `${acc}${curr}`
//     }
// )
// document.write(`<h1>${newarr}</h1>`)

//===========================================================
// Task 2

// let myString = "EElllzzzzzzzeroo";

// let newarr = myString.split("").filter((e, i, arr) => {
//     return arr.indexOf(e) === i;
// }).join("");

// document.write(`<h1>${newarr}</h1>`);

//===========================================================
// Task 3

// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let newarr=myArray.reduce(
//     (acc ,curr)=>{
//         return  `${acc}${curr}`
//     }
// ).split("").filter(
//     (e)=>{
//         return (e!==",")
//     }
// ).reduce((acc,curr)=>{return `${acc}${curr}`})
// document.write(`<h1>${newarr}</h1>`);

//===========================================================
// Task 4

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let newarr=numsAndStrings.filter(
//     (e)=>{
//         return( ! isNaN(e))
//     }
// ).map(
//     (e)=>{
//         return -e;
//     }
// )
// document.write(`<h1>[${newarr}]</h1>`);

//===========================================================
// Task 5

// let nums = [2, 12, 11, 5, 10, 1, 99];
// let newarr=nums.reduce(
//     (acc,curr)=>{
//         if(curr%2==0)
//         {
//             return acc*curr;
//         }else
//         {
//             return acc+curr;
//         }
//     }
// ,1)

// document.write(`<h1>${newarr}</h1>`);