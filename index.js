let isSolved = false

// Digits
const btn0 = document.getElementById("btn-0")
const btn1 = document.getElementById("btn-1")
const btn2 = document.getElementById("btn-2")
const btn3 = document.getElementById("btn-3")
const btn4 = document.getElementById("btn-4")
const btn5 = document.getElementById("btn-5")
const btn6 = document.getElementById("btn-6")
const btn7 = document.getElementById("btn-7")
const btn8 = document.getElementById("btn-8")
const btn9 = document.getElementById("btn-9")
const btnDec = document.getElementById("dec-btn")
// Operators
const modBtn = document.getElementById("mod-btn")
const divBtn = document.getElementById("div-btn")
const mulBtn = document.getElementById("mul-btn")
const subBtn = document.getElementById("sub-btn")
const addBtn = document.getElementById("add-btn")
const eqBtn = document.getElementById("eq-btn")
// Cancel
const acBtn = document.getElementById("ac-btn")
const delBtn = document.getElementById("del-btn")
// Screens
const inputScreen = document.getElementById("input-scr")
const outputScreen = document.getElementById("output-scr")

function inputToScreen(input) {
    if (isSolved) {
        inputScreen.textContent = ""
        outputScreen.textContent = ""
        isSolved = false
    }
    inputScreen.textContent += input
}

btn0.addEventListener("click", function () { inputToScreen("0"); })
btn1.addEventListener("click", function () { inputToScreen("1"); })
btn2.addEventListener("click", function () { inputToScreen("2"); })
btn3.addEventListener("click", function () { inputToScreen("3"); })
btn4.addEventListener("click", function () { inputToScreen("4"); })
btn5.addEventListener("click", function () { inputToScreen("5"); })
btn6.addEventListener("click", function () { inputToScreen("6"); })
btn7.addEventListener("click", function () { inputToScreen("7"); })
btn8.addEventListener("click", function () { inputToScreen("8"); })
btn9.addEventListener("click", function () { inputToScreen("9"); })
btnDec.addEventListener("click", function () { inputToScreen("."); })

modBtn.addEventListener("click", function () { inputToScreen("%"); })
divBtn.addEventListener("click", function () { inputToScreen("/"); })
mulBtn.addEventListener("click", function () { inputToScreen("*"); })
subBtn.addEventListener("click", function () { inputToScreen("-"); })
addBtn.addEventListener("click", function () { inputToScreen("+"); })

acBtn.addEventListener("click", function () {
    inputScreen.textContent = ""
    outputScreen.textContent = ""
})

delBtn.addEventListener("click", function () {
    inputScreen.textContent = inputScreen.textContent.slice(0, -1)
    outputScreen.textContent = ""
    isSolved = false
})

eqBtn.addEventListener("click", function () {
    isSolved = true
    equation = inputScreen.textContent
    // if (true) {
    //     outputScreen.textContent = "Error"
    // } else {
    //     outputScreen.textContent = equation
    // }
    try {
        eval(equation);
    } catch (err) {
        if (err instanceof SyntaxError) {
            outputScreen.textContent = "Error"
            return
        }
    }
    outputScreen.textContent = eval(equation)
})