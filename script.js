// const { number } = require("prop-types");

let action = "";
let num1 = [];
let num2 = [];
let displayValue = 0;

// BUTTONS
var buttonNumber = document.querySelectorAll(".btn.nbr");
for (let i = 0; i < buttonNumber.length; i++) {
    buttonNumber[i].addEventListener("click", function (e) {
        let contents = buttonNumber[i].innerHTML;
        num1.push(contents)
        displayValue = Number(num1.join().replace(/,/g, ''))
        })
    }
var display = document.querySelector(".display");

function adding(a, b) {
   let result =  a + b;
   return result
}
function susbstracting(a, b) {
    let result = a- b
    return result
}
function multiply (a, b) {
    let result = a * b;
    return result
}
function divide (a, b) {
    let result = a / b;
    return result
}
function operate(num1, num2, action) {
     if (action == "plus") {
      console.log(adding(aa,bb));
      return adding(num1,num2)    
    } else if (action == "minus") {
      console.log(susbstracting(num1, num2));
      return susbstracting(num1, num2)
    }else if (action == "mltp") {
      console.log(multiply(num1, num2));
      return multiply(num1, num2)
    }else if (action == "dvd") {
      console.log(divide(num1, num2));
      return divide(num1, num2)
    }
}
function switcher() {
    if (num1[0] == number) {
        return 2
    } else {
        return 1
    }
}
function refresh() {
    display.innerHTML = displayValue;
}
setInterval(refresh, 10);