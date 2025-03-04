// Task 1

// let start = 10;
// let end = 100;
// let exclude = 40;

// for(let i=start ; i<=end ; i+=start)
// {
//     if(i!==exclude)
//     {
//            console.log(i);
//     }
// }

//==================================================================
// Task 2

// let start = 10;
// let end = 0;
// let stop = 3;
//  for(let i=start ; i>end ; i--)
//     {
//         if(i<start)
//         {
//             console.log(`0${i}`);
//         }
//         else{
//             console.log(`${i}`);
//         }
//         if(i===stop )
//         {
//                break;
//         }
       
//     }

//==================================================================
// Task 3

// let start = 1;
// let end = 6;
// let breaker = 2;

// for(let i=start ; i<=end ;++i)
// {
//  console.log(`${i}`);
//  for(let j=1; j<=breaker ; ++j)
//  {
//    console.log(`-- ${j*breaker}`)
//  }
// }
//==================================================================
// Task 4
// let index = 10;
// let jump = 2;
// for (;;) {
//   if(index>jump)
//   {
//     console.log(index);
//     index-=jump;
//   }
// }

//==================================================================
// Task 5

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let j=letter.length;
// for(let i=j; i<friends.length;++i)
// {
//     if(friends[i].split("").shift()!==letter.toUpperCase())
//     {
//         console.log(`"${j++} => ${friends[i]}"`)
//     }
// }

//==================================================================
//Task 6

// let start = 0;
// let swappedName = "elZerO";
// let newName="";
// for(let i=start; i<swappedName.length ; ++i)
// {
//    if( swappedName[i]===swappedName[i].toLowerCase())
//    {
//     newName+=swappedName[i].toUpperCase();    
//    }
//    else{
//     newName+=swappedName[i].toLowerCase();
//    }
  
// }
// console.log(newName);
//===================================================================
// Task 7

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];
// mix.shift();
// for(let i=start ; i<mix.length ; ++i)
// {
//     if(typeof mix[i] ==="number")
//     {
//         console.log(mix[i]);
//     }
// }

