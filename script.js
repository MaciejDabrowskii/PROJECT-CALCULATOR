let enteredNumbers = "";
let results;
let display = "";
let operatorDisplay = "";
let temp;
let iteration = 0;

var buttonNumber = document.querySelectorAll(".btn.nbr");
var num = document.querySelector(".num");
var operator = document.querySelector(".operator");
var buttonSpecial  = document.querySelectorAll(".btn.special.fn");
var del = document.querySelector(".btn.special.del");
var equal = document.querySelector(".btn.special.eq");
var btns = document.querySelectorAll(".btn");
var bspc = document.querySelector(".bspc");


setInterval(refresh, 10);

bspc.addEventListener("click", function (e) {
    if (enteredNumbers == "") {
        return
    }else {
        enteredNumbers = enteredNumbers.slice(0,-1);
        display = enteredNumbers;
    }
});
for (let i = 0; i < buttonNumber.length; i++) {
    buttonNumber[i].addEventListener("click", function (e) {
        enteredNumbers += buttonNumber[i].innerHTML;
        display = enteredNumbers;
        })
    }
for (let j = 0; j < buttonSpecial.length; j++) {
    buttonSpecial[j].addEventListener("click", function (e) {
        if (iteration == 0) {
            enteredNumbers = Number(enteredNumbers);
            temp = enteredNumbers;
            enteredNumbers = "";
            operatorDisplay = buttonSpecial[j].innerHTML;
            display = temp;
            iteration += 1;
        }else if (enteredNumbers == "") {
            operatorDisplay = buttonSpecial[j].innerHTML;
        }else {
            enteredNumbers = Number(enteredNumbers);
            operate(temp, enteredNumbers);
            display = results;
            temp = results;
            enteredNumbers = "";
            operatorDisplay = buttonSpecial[j].innerHTML;
        }
    });
};
btns.forEach(btn => btn.addEventListener("mousedown", (e) => {
    btn.classList.add("pushed")
}));
btns.forEach(btn => btn.addEventListener("mouseup", (e) => {
    btn.classList.remove("pushed")
}));
bspc.addEventListener("mousedown", (e) => {
    bspc.classList.add("pushed")
});
bspc.addEventListener("mouseup", (e) => {
    bspc.classList.remove("pushed")
});

del.addEventListener("click", function (e) {
    deletion();
});
equal.addEventListener("click", function (e) {
    equalisation();
});

// FUNCTIONS

function equalisation() {
    if (iteration == 0){
        return;
    }else {
        enteredNumbers = Number(enteredNumbers);
        operate(temp, enteredNumbers);
        display = results;
        enteredNumbers = "";
        temp = results;
    }
};
function deletion() {
    enteredNumbers = "";
results = 0;
display = "";
operatorDisplay = "";
temp = 0;
iteration = 0;
};
function operate(temp, enteredNumbers) {
    if (operatorDisplay == "+") {
        results = adding(temp,enteredNumbers); 
   } else if (operatorDisplay == "-") {
    results = susbstracting(temp, enteredNumbers);
   }else if (operatorDisplay == "*") {
    results = multiply(temp, enteredNumbers);
   }else if (operatorDisplay == "/") {
    results = divide(temp, enteredNumbers);
   }
};
function adding(a, b) {
    return a + b;
};
function susbstracting(a, b) {
    return a - b;   
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    if (a == 0 || b == 0) {
        return display = "Divided by 0 Matrix.fatalError"
    } else {
    return (a / b);
    }
};
function refresh() {
    num.innerHTML = display;
    operator.innerHTML = operatorDisplay;
};