

let bodyEL = document.querySelector("#body");
let x = document.createElement("button");

console.log(x);

x.setAttribute("class", "alert button");
x.innerHTML = "button";

bodyEL.append(x);
