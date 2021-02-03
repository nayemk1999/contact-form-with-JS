const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

//show success message
function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};

//email valid check
function isEmailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function emailValid(input) {
    if (isEmailValid(input)) {
        showSuccess(input);
    }
    else {
        if (input.value === "") {
            showError(input, `${input.id} is required`);
        }
        else {
            showError(input, `${input.id} please provide your valid email`)
        }
    }
}

// check password
function checkPassword(password, password2) {
    if (password.value !== password2.value) {
        showError(password2, ` password is not match`)
    }
    else {
        if (password.value == "") {
            showError(password, `${password.id} is required`);
        }
        else {
            showSuccess(password2);
        }

    }
}
//check required
function checkRequired(inputArray) {
    inputArray.forEach(input => {
        if (input.value.trim() === "") {
            showError(input, `${input.id} is required`)
        }
        else {
            showSuccess(input);
        }
    });
}

//check username & password length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${input.id} at least ${min} charter`)
    }
    else if (input.value.length >= max) {
        showError(input, `${input.id} at less ${min} charter`)
    }
    else {
        if (input.value === "") {
            showError(input, `${input.id} is required`)
        }
        else {
            showSuccess(input);
        }
    }
}
//even Lister

form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([username, password, password2]);
    emailValid(email);
    checkLength(username, 6, 15);
    checkLength(password, 6, 15);
    checkPassword(password, password2);




    // formInputName(username, 'username is required');
    // formInputName(email,'email is required');
    // formInputName(password, 'password is required');
    // formInputName(password2, 'confirm password not match');

})
// function formInputName(inputName, message) {
//     if (inputName.value === "") {
//         showError(inputName, message);
//     }

//     else {
//         showSuccess(inputName);
//     }
// }