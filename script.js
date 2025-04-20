function processResult() {
    let Email = emailAddress.value
    let Password = enterPassword.value

    if (Email == "") {
        result.innerHTML = ``;
        return;
    } else if (!/^([\w.%+-]+)@gmail\.com$/.test(Email)) {
        result.innerHTML = `<p style="color:red; font-size:12px;">Invalid Gmail address.</p>`;
        return;
    }
    if (Password == "") {
        result1.innerHTML = ``;
        return;
    }else if (Password.length < 8) {
        result1.innerHTML = `<p style="color: red; font-size:12px;">Password must be at least 8 characters long.</p>`;
        return;
    } else if (!/[A-Z]/.test(Password)) {
        result1.innerHTML = `<p style="color: red; font-size:12px;">Password must contain at least one uppercase letter.</p>`;
        return;
    } else if (!/[a-z]/.test(Password)) {
        result1.innerHTML = `<p style="color: red; font-size:12px;">Password must contain at least one lowercase letter.</p>`;
        return;
    } else if (!/[0-9]/.test(Password)) {
        result1.innerHTML = `<p style="color: red; font-size:12px;">Password must contain at least one number.</p>`;
        return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(Password)) {
        result1.innerHTML = `<p style="color: red; font-size:12px;">Password must contain at least one special character.</p>`;
        return;
    } 
        alert("☑️ Sign in successful!")
}