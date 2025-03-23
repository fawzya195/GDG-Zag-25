let number = document.querySelector("[name='elements']");
let content = document.querySelector("[name='texts']");
let type = document.querySelector("[name='type']");

document.forms[0].onsubmit = function (e) {
  e.preventDefault();

  let elementType = type.value;
  let container = document.createElement("div");

  for (let i = 0; i < parseInt(number.value); i++) {
    let element = document.createElement(elementType);
    let txt = document.createTextNode(content.value);
    element.appendChild(txt);
    container.appendChild(element);
  }

  document.body.appendChild(container);
};
