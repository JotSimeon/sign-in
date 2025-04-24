function processResult() {
    let email = emailAddress.value;
    const password = enterPassword.value;
    email = email.toLowerCase(); // ✅ Correct casing for the function

    // Clear previous error messages
    result.innerHTML = "";
    result1.innerHTML = "";

    // Email validation
    if (email == "") {
        result.innerHTML = `<p style="color:red; font-size:13px;">❌ required</p>`;
        return;
    } else if (!/^([\w.%+-]+)@gmail\.com$/.test(email)) {
        result.innerHTML = `<p style="color:red; font-size:13px;">❌ invalid Gmail address</p>`;
        return;
    }

    // Password validation
    if (password == "") {
        result1.innerHTML = `<p style="color:red; font-size:13px;">❌ required</p>`;
        return;
    } else if (password.length < 8) {
        result1.innerHTML = `<p style="color:red; font-size:13px;">❌ Password must be at least 8 characters long.</p>`;
        return;
    } else if (!/[A-Z]/.test(password)) {
        result1.innerHTML = `<p style="color:red; font-size:13px;">❌ Password must contain at least one uppercase letter.</p>`;
        return;
    } else if (!/[a-z]/.test(password)) {
        result1.innerHTML = `<p style="color:red; font-size:13px;">❌ Password must contain at least one lowercase letter.</p>`;
        return;
    } else if (!/[0-9]/.test(password)) {
        result1.innerHTML = `<p style="color:red; font-size:13px;">❌ Password must contain at least one number.</p>`;
        return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        result1.innerHTML = `<p style="color:red; font-size:13px;">❌ Password must contain at least one special character.</p>`;
        return;
    }

    // If all validations pass
    alert("☑️ Sign in successful!");
}
function showPassword(){
    const passwordInput = document.getElementById("enterPassword");
    if (passwordInput.type == "password"){
        passwordInput.type = "type"
    } else {
        passwordInput.type = "password"
    }
}
