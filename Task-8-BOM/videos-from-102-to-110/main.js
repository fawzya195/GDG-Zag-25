// Task 1

// let num=window.prompt("Print Number From – To","Example: 5-20");
// let newnum=num.split("-").map(Number);
// console.log(newnum);
// let start=Math.min(newnum[0] , newnum[1]);
// let end=Math.max(newnum[0] , newnum[1]);
// for(let i=start ; i<=end; ++i)
// {
//     console.log(i)
// }

///////////////////////////////////////////////////////////////////////////

// Task 2

// let content=window.setTimeout(
//     function (){
//         let popup = document.createElement('div');
//         popup.className='pop_style';
//         popup.innerHTML = `
//           <h2>Welcome</h2>
//           <p>welcome To Elzero Web School</p>
//           <button id="closeBtn">❌</button>
//         `;
//         document.body.appendChild(popup);
    
    
//     let close_btn=document.querySelector('#closeBtn');
//    close_btn.onclick=
//        function (){
//            popup.remove();
//            clearTimeout(content);
//        }}
// ,5000)

///////////////////////////////////////////////////////////

// Task 3
// let counter = document.createElement('div');
// counter.innerHTML = 10;
// document.body.appendChild(counter);
// let curr_value = parseInt(counter.innerHTML); 
// let interval = window.setInterval(function () {
//     if (curr_value> 0) {
//         curr_value-=1;
//         counter.innerHTML=curr_value;
//     } else {
//         clearInterval(interval); 
//     }
// },1000); 
/////////////////////////////////////////////

// Task 4

// let counter = document.createElement('div');
// counter.innerHTML = 10;
// document.body.appendChild(counter);
// let curr_value = parseInt(counter.innerHTML); 
// let interval = window.setInterval(function () {
//     if (curr_value> 0) {
//         curr_value-=1;
//         counter.innerHTML=curr_value;
//     } else {
//         location.href="https://elzero.org" 
//     }
// },1000);
//////////////////////////////////////////////////
// Task 5

// let counter = document.createElement('div');
// counter.innerHTML = 10;
// document.body.appendChild(counter);
// let curr_value = parseInt(counter.innerHTML); 
// let interval = window.setInterval(function () {
//     if (curr_value> 0) {
//         curr_value-=1;
//         counter.innerHTML=curr_value;
//         if(curr_value==5)
//             {
//                 window.open("https://elzero.org","","width=300 , height=300")
//             }
//     }
//     else {
//         clearInterval(interval); 
//     }
// },1000); 