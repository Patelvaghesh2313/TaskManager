
// ADD NEW USER IN LOCAL STORAGE
var keys = Object.keys(localStorage);

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
    
       
        let task =[]
        let completeTask=[]
        for( key of keys){
            var userData = JSON.parse(localStorage.getItem(key));
            if(email.value === userData.email || mobile.value === userData.mobile){
                alert('User Already Registered With This Email or Mobile...');
                var usedEmail = userData.email;
                var usedMobile = userData.mobile;
            }
        }
        
        let d1 = new Date();
        
        if(usedEmail != email.value && usedMobile != mobile.value){
             if (password.value === copassword.value){
                        // encryptPassword(password.value);
                        let user = {
                            firstName : fname.value,
                            lastName : lname.value,
                            email : email.value,
                            mobile : mobile.value,
                            gender : gender,
                            dob : dob.value,
                            password : encryptPassword(password.value),
                            task : task,
                            completetask : completeTask
                        }
                        alert(user.password);
                        localStorage.setItem(`user${localStorage.length}`, JSON.stringify(user));
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
