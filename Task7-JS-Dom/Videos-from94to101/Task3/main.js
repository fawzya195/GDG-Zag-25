let removed=document.querySelector("p");
removed.remove();

let divElement=document.querySelector(".our-element");
let preElement=document.createElement("div");
let preText=document.createTextNode("Start");
preElement.title="Start Element";
preElement.className="start";
preElement.setAttribute("data-value","Start");
preElement.append(preText);
divElement.before(preElement);

let postElement=document.createElement("div");
let postText=document.createTextNode("End");
postElement.title="End Element";
postElement.className="end";
postElement.setAttribute("data-value","End");
postElement.append(postText);
divElement.after(postElement);

