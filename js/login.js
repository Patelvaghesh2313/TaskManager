
console.log('Welcome On Login Page');


let doLogin = (e) => {
  
    var keys = Object.keys(localStorage);

   
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    for(key of keys){
        var userData = JSON.parse(localStorage.getItem(key));
        
        if(userData.email===email.value && userData.password===encryptPassword(password.value)){
            // alert(`User Logged In Successfully`);
            e.preventDefault();
            sessionStorage.setItem('Email',email.value)
            sessionStorage.setItem('Password',password.value)  
            
            window.location = 'dashboard.html';
            
            // newLocation();          
        }

    }   
    
}
