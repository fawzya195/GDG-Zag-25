// task 1

// Create Your Object Here
// let member={
//     name:"Elzero",
//     age:36,
//     country:"Egypt",
//     fullDetails:()=>{
//         return `My Name Is ${member.name},My Age Is ${member.age}, I Live in ${member.country}`
//     }
// }
// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// // My Name Is Elzero, My Age Is 38, I Live in Egypt




// task 2

// // Method One
// // Create Your Object Here
// let objMethodOne={
//     property:"Method One"
// }
// console.log(objMethodOne.property); // "Method One"

// // Method Two
// let objMethodTwo= new Object({property:"Method Two"})
// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// let objMethodThree=Object.create(objMethodTwo);
// objMethodThree.property="Method Three"

// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// let objMethodFour=Object.assign({},{property:"Method Four"})

// console.log(objMethodFour.property); // "Method Four"



// task 3

// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// let finalObject=Object.assign({a},threeNums,twoNums)

// console.log(finalObject);

// /*
//   a: 1
//   b: 2
//   c: 3
//   d: 4
//   e: 5
//   f: 6
// */




// taask 4

// let myFavGames = {
//     "Trinity Universe": {
//       publisher: "NIS America",
//       price: 40,
//     },
//     "Titan Quest": {
//       publisher: "THQ",
//       bestThree: {
//         one: "Immortal Throne",
//         two: "Ragnarök",
//         three: "Atlantis",
//       },
//       price: 50,
//     },
//     YS: {
//       publisher: "Falcom",
//       bestThree: {
//         one: "Oath in Felghana",
//         two: "Ark Of Napishtim",
//         three: "origin",
//       },
//       price: 40,
//     },
//   };
  
//   let objectLength = Object.keys(myFavGames).length;
  
//   for (let i = 0; i < objectLength; i++) {
//     console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
//     console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]]["publisher"]}`);
//     console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

//     if ("bestThree" in myFavGames[Object.keys(myFavGames)[i]]) {
//       console.log("- Game Has Releases");
//       console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"]["one"]}`);
//       console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree["two"]}`);
//       console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"].three}`);
//     }
//     console.log("#".repeat(20));
//   }
  