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
var del = document.querySelector(".btn.del");
var equal = document.querySelector(".btn.special.eq");
var btns = document.querySelectorAll(".btn");
var bspc = document.querySelector(".bspc");

// Functions handling mouse clicks on divs
bspc.addEventListener("click", (e) => {
        backspace();
    });
del.addEventListener("click", (e) => {
        deletion();
    });
equal.addEventListener("click", (e) => {
        equalisation();
    });
buttonNumber.forEach(btn => btn.addEventListener("click", (e) => {
        enteredNumbers += e.target.innerHTML;
        display = enteredNumbers;
    })
);
buttonSpecial.forEach(btn => btn.addEventListener("click", (e) => {
        if (iteration == 0) {
            enteredNumbers = Number(enteredNumbers);
            temp = enteredNumbers;
            enteredNumbers = "";
            operatorDisplay = e.target.innerHTML;
            display = temp;
            iteration += 1;
        } else if (enteredNumbers == "") {
            operatorDisplay = e.target.innerHTML;
        } else {
            enteredNumbers = Number(enteredNumbers);
            operate(temp, enteredNumbers);
            display = results;
            temp = results;
            enteredNumbers = "";
            operatorDisplay = e.target.innerHTML;
        };
    })
)
// Function handling keyboard support
window.addEventListener('keydown', (event) => {
    const keySpecial = document.querySelector(`.special[data-key="${event.code}"]`);
    const keyNbr = document.querySelector(`.nbr[data-key="${event.code}"]`);
    const keyBspc = document.querySelector(`.bspc[data-key="${event.code}"]`);
    const keyDel = document.querySelector(`.del[data-key="${event.code}"]`);
    console.log(keySpecial)
    if (keySpecial !== null) {
        if (iteration == 0) {
            enteredNumbers = Number(enteredNumbers);
            temp = enteredNumbers;
            enteredNumbers = "";
            operatorDisplay = keySpecial.innerHTML;
            display = temp;
            iteration += 1;
        } else if (enteredNumbers == "") {
            operatorDisplay = keySpecial.innerHTML;
        } else {
            enteredNumbers = Number(enteredNumbers);
            operate(temp, enteredNumbers);
            display = results;
            temp = results;
            enteredNumbers = "";
            operatorDisplay = keySpecial.innerHTML;
        };
    }else if (keyNbr !== null) {
        enteredNumbers += keyNbr.innerHTML;
        display = enteredNumbers;
    }else if (keyBspc !== null) {
        backspace();
    }else if (keyDel !== null) {
        deletion();
    }
});
// Functions adding style on click
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
// Button functions
function backspace() {
    if (enteredNumbers == "") {
        return
    }else {
        enteredNumbers = enteredNumbers.slice(0,-1);
        display = enteredNumbers;
    }
};
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
// Arithmetic functions
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
//Screen refreshing function
setInterval(refresh, 10);
function refresh() {
    num.innerHTML = display;
    operator.innerHTML = operatorDisplay;
};