var numberOne , numberTwo;
numberOne=10;
numberTwo=20;
console.log(numberOne+""+numberTwo);
console.log(typeof (numberOne+""+numberTwo));
console.log(`${numberOne}${numberTwo}`);
console.log( typeof `${numberOne}${numberTwo}`);
console.log(numberTwo+"\n"+numberOne);
console.log(`${numberTwo}
${numberOne}`);
// ===========================
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// ============================================
console.log("'I'm In\n\\\\\nLove \\\\ \"\"\" '''\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"'' ");
// =======================
let a = 21;
let b = 20;
console.log(`// _${a}`+`_${b}${a}`.repeat( ((a % b) + (b % a) + 1) - (a - b) - (b * 1) + 2)+`_${b}_`); // _21_2021_2021_2021_20_