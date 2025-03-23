let item = document.querySelector("[name='dollar']");
let container = document.querySelector(".result");

item.oninput = function () {
    let value = parseFloat(item.value)||0;
    let res = value * 15.6; 
    container.innerHTML = `${value} USD Dollar = ${res.toFixed(2)} Egyptian Pound`; 
};
