
// ADD NEW USER IN LOCAL STORAGE

console.log('Signup Page');

// let addUser = document.getElementById('adduser');
 let addUser;
let readUser = document.getElementById('readuser');

addUser=()=>{   

    var keys = Object.keys(localStorage);
    // console.log(keys);

    let fname = document.getElementById('fname');
    let lname =  document.getElementById('lname');
    let email = document.getElementById('email');
    let mobile = document.getElementById('mobile');
    let dob = document.getElementById('dob');
    let gender;
    let password = document.getElementById('password');
    let copassword = document.getElementById('confirm_password');
    
    var radios = document.getElementsByName('gender');
    console.log(radios);
    for (var radio of radios)
    {
        if (radio.checked) {
            gender = radio.value;
        }
    }
    
        for( key of keys){
            var data = JSON.parse(localStorage.getItem(key));
            if(data.email===email.value){
                alert('User Already Registered With This Email...');
                var usedEmail = data.email;
            }
        }
        
        if(usedEmail != email.value){
            if (password.value === copassword.value){
                            let user = {
                            fname: fname.value,
                            lname: lname.value,
                            email: email.value,
                            mobile: mobile.value,
                            dob: dob.value,
                            gender: gender,
                            password: password.value
                        }
                        localStorage.setItem(localStorage.length, JSON.stringify(user));
            }
            else{
                        alert('Password and Confirm-Password Does not matched.')
            }
        }
        window.location.reload();
}

// Read User's Data

readUser.onclick= ()=>{
    var keys = Object.keys(localStorage);
    console.log(keys);

    for( key of keys){

        var data = JSON.parse(localStorage.getItem(key));
        console.log(data.fname);
    }
}