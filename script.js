let action = "";
let num2 = [];
let num1 = 0;
let displayValue = 0;
var buttonNumber = document.querySelectorAll(".btn.nbr");
var display = document.querySelector(".display");
var buttonSpecial  = document.querySelectorAll(".btn.special");
// BUTTONS

setInterval(refresh, 10);

for (let i = 0; i < buttonNumber.length; i++) {
    buttonNumber[i].addEventListener("click", function (e) {
        let contents = buttonNumber[i].innerHTML;
        num2.push(contents)
        displayValue = Number(num2.join().replace(/,/g, ''))
        })
    }
for (let j = 0; j < buttonSpecial.length; j++) {
    buttonSpecial[j].addEventListener("click", function (e) {
        if (buttonSpecial[j].innerHTML == "+") {
            plus();
        }else if (buttonSpecial[j].innerHTML == "-") {
            minus();
        }else if (buttonSpecial[j].innerHTML == "*") {
            mltp();
        }else if (buttonSpecial[j].innerHTML == "/") {
            dvd();
        }else if (buttonSpecial[j].innerHTML == "C") {
            reset()
        }else if (buttonSpecial[j].innerHTML == "=") {
            execute();
        }
        
    })
}

// function 

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
        displayValue = adding(num1,num2);
      return adding(num1,num2)    
    } else if (action == "minus") {
        displayValue =susbstracting;
      return susbstracting(num1, num2)
    }else if (action == "mltp") {
        displayValue = multiply(num1, num2);
      return multiply(num1, num2)
    }else if (action == "dvd") {
        displayValue = divide(num1, num2);
      return divide(num1, num2)
    }
}
function switcher() {
num1 = Number(num2.join().replace(/,/g, ''));
num2 = [];
}
function refresh() {
    display.innerHTML = displayValue;
}
function plus() {
    action = "plus";
    displayValue = "+";
    switcher();
}
function minus() {
    action = "minus";
    displayValue = "-"
    switcher();
}
function mltp() {
    action = "mltp";
    displayValue = "*"
    switcher();
}
function dvd() {
    action = "dvd";
    displayValue = "/"
    switcher();
}
function reset() {
    action = "";
    num2 = [];
    num1 = 0;
    displayValue = 0;
}
function execute() {
    num2 = Number(num2.join().replace(/,/g, ''));
    operate(num1, num2, action);
}