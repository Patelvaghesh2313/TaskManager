
console.log('Welcome On Login Page');


let doLogin = (e) => {
   var keys = Object.keys(localStorage);
    // console.log(keys);

    let email = document.getElementById('email');
    let password = document.getElementById('password');
    
    
        for( key of keys){
            var data = JSON.parse(localStorage.getItem(key));
            if(data.email===email.value && data.password===password.value){
                // alert(`User Logged In Successfully`);
                e.preventDefault();
                sessionStorage.setItem(email.value,password.value)  
                window.location = 'dashboard.html';
                
                // newLocation();          
            }
            else{
                console.log('email and password does not matched')
            }
        }
}

