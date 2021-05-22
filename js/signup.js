
// ADD NEW USER IN LOCAL STORAGE

console.log('Welcome On Signup Page');

// let addUser = document.getElementById('adduser');
let readUser = document.getElementById('readuser');

let addUser=(e)=>{   

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
    
       
    
        var userEmail = JSON.parse(localStorage.getItem('email'));
        if(userEmail===email.value){
            alert('User Already Registered With This Email...');
            var usedEmail = userEmail;
        }
        
        
        if(usedEmail != email.value){
            if (password.value === copassword.value){
                        
                        localStorage.setItem('fname', JSON.stringify(fname.value));
                        localStorage.setItem('lname', JSON.stringify(lname.value));
                        localStorage.setItem('email', JSON.stringify(email.value));
                        localStorage.setItem('mobile', JSON.stringify(mobile.value));
                        localStorage.setItem('gender', JSON.stringify(gender));
                        localStorage.setItem('dob', JSON.stringify(dob.value));
                        localStorage.setItem('password', JSON.stringify(password.value));
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