
const loginAuth = () => {
    // Session User Authentication
    var userEmail = sessionStorage.getItem("Email");
    // alert(userEmail);
    if(userEmail != null){
        alert("Without Logout you can not go for login !!");
        window.location = 'dashboard.html'
    }
}

//
const signupAuth = () => {
    // Session Signup Authentication
    var ddate = new Date().toISOString().slice(0, 10);
    document.getElementById("dob").max = ddate;
    var userEmail = sessionStorage.getItem("Email");
    // alert(userEmail);
    if(userEmail != null){
        alert("Without Logout you can not go for signup !!");
        window.location = 'dashboard.html'
    }
}

const indexAuth = () => {
    // Session Index Authentication
    var userEmail = sessionStorage.getItem("Email");
    // alert(userEmail);
    if(userEmail != null){
        alert("Without Logout you can not go for index page !!");
        window.location = 'dashboard.html'
    }
}