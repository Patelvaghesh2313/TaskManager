
// ADD NEW USER IN LOCAL STORAGE

console.log('Welcome On Signup Page');

// let addUser = document.getElementById('adduser');
let readUser = document.getElementById('readuser');

let addUser=(e)=>{   

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
                        e.preventDefault();
                        window.location = 'login.html'
            }
            else{
                        alert('Password and Confirm-Password Does not matched.')
            }
        }
        
}

// Read User's Data

// readUser.onclick= ()=>{
//     var keys = Object.keys(localStorage);
//     console.log(keys);

//     for( key of keys){

//         var data = JSON.parse(localStorage.getItem(key));
//         console.log(data.fname);
//     }
// }