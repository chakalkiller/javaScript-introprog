let b1 = document.querySelector("#plus");
let b2 = document.querySelector("#minus");
let b3 = document.querySelector("#multiplier");
let b4 = document.querySelector("#divider");


function plus() {
    let inputOne = document.querySelector("#inputOne").value;
    let inputTwo = document.querySelector("#inputTwo").value;
    if (inputOne && inputTwo) {
        document.querySelector("#result").value = parseFloat(inputOne) + parseFloat(inputTwo);
    }
}

function minus() {
    let inputOne = document.querySelector("#inputOne").value;
    let inputTwo = document.querySelector("#inputTwo").value;

    if (inputOne && inputTwo) {
        document.querySelector("#result").value = parseFloat(inputOne) - parseFloat(inputTwo)
    }
}

function multiplier() {
    let inputOne = document.querySelector("#inputOne").value;
    let inputTwo = document.querySelector("#inputTwo").value;

    if (inputOne && inputTwo) {
        document.querySelector("#result").value = parseFloat(inputOne) * parseFloat(inputTwo);
    }
}

function divider() {
    let inputOne = document.querySelector("#inputOne").value;
    let inputTwo = document.querySelector("#inputTwo").value;

    if (inputOne && inputTwo) {
        document.querySelector("#result").value = parseFloat(inputOne) / parseFloat(inputTwo);
    }
}

b1.addEventListener("click", plus);
b2.addEventListener("click", minus);
b3.addEventListener("click", multiplier);
b4.addEventListener("click", divider);