
//===============================================
//task 1
//============================

// function getDetails(zName, zAge, zCountry) {
//     function namePattern(zName) {
//       return `${zName.split(" ")[0]} ${zName.split(" ")[1][0].toUpperCase()}.`
//       // Osama Mohamed => Osama M.
//       // Ahmed ali => Ahmed A.
//     }
//     function ageWithMessage(zAge) {
//       return `Your Age Is ${parseInt(zAge)}`
//       // 38 Is My Age => Your Age Is 38
//       // 32 Is The Age => Your Age Is 32
//     }
//     function countryTwoLetters(zCountry) {
//      return `You Live In ${zCountry[0].toUpperCase()}${zCountry[1].toUpperCase()}`
//       // Egypt => You Live In EG
//       // Syria => You Live In SY
//     }
//     function fullDetails() {
//       return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)},${countryTwoLetters(zCountry)}`
//     }
//     return fullDetails(); // Do Not Edit This
//   }
  
//   console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
//   // Hello Osama M., Your Age Is 38, You Live In EG
  
//   console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
//   // Hello Ahmed A., Your Age Is 32, You Live In SY




//===============================================
//task 2
//============================

    //    =====function 1=====
//   let itsMe=_=>`Iam A Normal Function`
//   console.log(itsMe()); 

    //    =====function 2=====
//     let urlCreate=(protocol, web, tld)=>`${protocol}://www.${web}.${tld}`;
//   console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


//===============================================
//task 3
//============================

// let checker=(zName)=>(status)=>(salary)=>{
//     return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//   }
//   console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
//   console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//===============================================
//task 4
//============================
// function specialMix(...data) {
//     let result=0;
//     let num=false;
//    for(let i=0;i<data.length ; ++i)
//    {
//         if(!isNaN(parseInt(data[i])))
//         {
//             result+=parseInt(data[i]);
//             num=true;
//         }
//    }
//    return (num)?result:"All Is Strings";
//   }
  
//   console.log(specialMix(10, 20, 30)); // 60
//   console.log(specialMix("10Test", "Testing", "20Cool")); // 30
//   console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
//   console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
