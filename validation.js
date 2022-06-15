let validateEmail = (email) => {
    if (email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return true;
    }
    return false;
}
let validatePassword = (password, samePassword) => {
    console.log(password);
    if (password === samePassword) {
        return true;
    }
    return false;
}
let showError = (message, element) => {
    element.value = message;
    element.style.background = "Red";
}
let checkEmptyValue = (element) => {
    if (element.value !== "") {
        return true;
    }
    element.value = "required field";
    element.style.background = "Red";

}
let clearValue = (element) => {
    element.value = "";
    element.style.background = "#f1f1f1";
}

let checkEmptyValueWrapper = () => {
    let flag = true;
    if (!checkEmptyValue(email)) {
        flag = false;
    }
    if (!checkEmptyValue(password)) {
        flag = false;
    }
    if (!checkEmptyValue(passwordAgain)) {
        flag = false;
    }
    return flag;
}
let form = document.getElementById("signUp");
let submitBtn = document.getElementById("submit");
let email = document.getElementById("email");
let checkBox = document.getElementById("checkbox");
let password = document.getElementById("password");
let passwordAgain = document.getElementById("passwordAgain");

email.addEventListener('click', () => { clearValue(email) });
password.addEventListener('click', () => { clearValue(password) });
passwordAgain.addEventListener('click', () => { clearValue(passwordAgain) });

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let flag = true;
    if (checkEmptyValueWrapper()) {
        if (!validateEmail(email.value.trim())) {
            showError("please enter valid email!", email);
            flag = false;
        }
        if (!validatePassword(password.value, passwordAgain.value)) {

            showError("password do no match!", password);
            flag = false;
            console.log("pass");
        }

    }

    console.log(flag);

    // if (!flag) {
    //     e.preventDefault();
    // } else {
    //     console.log("else");
    //     form.setAttribute("action", "./Welcom.html");
    // }
    if (flag) {
        window.location = './Welcom.html';
        form.setAttribute("action", "./Welcom.html");
    }

    // form.setAttribute("action", "./Welcom.html");
})