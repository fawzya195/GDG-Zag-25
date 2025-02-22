// //Task 1
// function currencyFormatter(num) {
//   console.log(`${Number(num.toFixed(2))}$`);
// }
// currencyFormatter(3.568);

// ==============

// Task 2
// function prime(num) {
//   let prime = true;
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         prime = false;
//         break;
//       }
//   }
//   if(num===1 || num===0){
//     prime=false;
//   }

//   console.log(prime);
// }
// prime(17);

// ============================

// Task 3
// function reversNumber(num) {
//     console.log(Number(num.toString().split("").reverse().join("")));
// }
// reversNumber(165);

// ===================================

// Task 4
// function randomRange(min, max) {
//     console.log(Math.floor(Math.random() * (max - min + 1) + min));
// }
// randomRange(5, 19);
// ==========================

// // Task 5
// function captialWord( statment){
// console.log(statment.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));
// }
// captialWord("hallo everyone in gDG")

// ====================

// Task 6
// function gradeCalculator(score)
// {
//      let grad;
//     if(score>=90 && score <=100)
//     {
//         grad="A";
//     }
//     else
//     if(score>=80 && score <=89)
//         {
//              grad="B";
//         }
//     else
//     if(score>=70 && score <=79)
//         {
//              grad="C";
//         }
//     else
//     if(score>=60 && score <=69)
//         {
//              grad="D";
//         }
//     else
//     if(score>=0 && score <=59)
//         {
//              grad="F";
//         }
//     else
//      grad="unknowen value ,Enter value from 0 to 100"

// console.log( grad);
// }
// gradeCalculator(40);
// ==============================

// Task 7
// function tempAdviser(temperature) {
//     let temp=parseInt(temperature);
//     let recommend;
//   if (temp < 10) {
//     recommend="wearing a coat";
//   }
//   else
//   if(temp>=10 && temp<=20)
//   {
//     recommend="wearing a sweater";
//   }
//   else
//   if(temp>20)
//   {
//     recommend="wearing a T-shirt";
//   }

// console.log(recommend);
// }
// tempAdviser("10`C");

//===================================================

// Task 8
// function calculator(num1, num2, operator) {
//   let result;
//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;

//     case "-":
//       result = num1 - num2;
//       break;
    
//     case "*":
//         result=num1 *num2;
//         break;
    
//     case "/":
//         result=num1/num2;
//         break;
//     defult:
//     result="Invalid Operator";
//   }
//   console.log(result);
// }
// calculator(12,2,'*');
