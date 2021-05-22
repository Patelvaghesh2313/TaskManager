
console.log('Welcome On Login Page');


let doLogin = (e) => {
  
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    
    var authEmail = JSON.parse(localStorage.getItem('email'));
    var authPassword = JSON.parse(localStorage.getItem('password'));
    if(authEmail===email.value && authPassword===password.value){
        // alert(`User Logged In Successfully`);
        e.preventDefault();
        sessionStorage.setItem('Email',email.value)
        sessionStorage.setItem('Password',password.value)  
        window.location = 'dashboard.html';
        
        // newLocation();          
    }
    else{
        alert('Email and Password does not matched!!!');
    }

}

