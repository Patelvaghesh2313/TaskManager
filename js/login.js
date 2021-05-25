
console.log('Welcome On Login Page');


let doLogin = (e) => {
  
    var keys = Object.keys(localStorage);

   
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    
    for(key of keys){
        var userData = JSON.parse(localStorage.getItem(key));
        // var authEmail = JSON.parse(localStorage.getItem('email'));
        // var authPassword = JSON.parse(localStorage.getItem('password'));
        if(userData.email===email.value && userData.password===password.value){
            // alert(`User Logged In Successfully`);
            e.preventDefault();
            sessionStorage.setItem('Email',email.value)
            sessionStorage.setItem('Password',password.value)  
            
            window.location = 'dashboard.html';
            
            // newLocation();          
        }
    }
    
    
    // else{
        
    //     alert(userData.email);
    //     // alert('Email and Password does not matched!!!');
    // }
}

