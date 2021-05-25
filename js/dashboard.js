var keys = Object.keys(localStorage);
var authUser = sessionStorage.getItem('Email');

const coordinates= ()=>{
    
    let cityName = document.getElementById("city");
    let temprature = document.getElementById("temprature");
    let liveWeather = document.getElementById("weather");
    let currentTime = document.getElementById("time");
    let todayDate = document.getElementById("date");

    var dtime = new Date(new Date().getTime()).toLocaleTimeString();
    var ddate = new Date().toLocaleDateString();

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((myLoc)=>{
            const lat = myLoc.coords.latitude;
            const lng = myLoc.coords.longitude;
            console.log(lat, lng);

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d2c1859fc72f6df2662dd532105ac751`)
                .then(response=>response.json())
                .then(data =>{
                     city = data['name'];
                     temp = data['main']['temp'];
                     weather = data['weather'][0]['description'];
                    //  time = dtime;

                     cityName.innerHTML = city;
                     temprature.innerHTML = temp - 273.15;
                     liveWeather.innerHTML = weather;
                     currentTime.innerHTML = dtime;
                     todayDate.innerHTML = ddate

                });
        });
       
    }

    // Session User Authentication
    var userEmail = sessionStorage.getItem("Email");

    if(userEmail === null){
        alert("Authentication Problem");
        window.location = 'login.html'
    }
    else{
        document.getElementById("userEmail").innerHTML = userEmail;
    }

}


const addTask =()=>{
    
    // Add task code
        var inputTask = document.getElementById("myInputTask").value;
        for(key of keys){
            var userData = JSON.parse(localStorage.getItem(key));
            
            if(authUser === userData.email){
                if(inputTask === ""){
                    alert("Please Enter Anything !!!");
                }
                else{
                    // document.getElementById("taskListInput").disabled = true;
                    userData.task.push(inputTask)
                    localStorage.setItem(`${key}`, JSON.stringify(userData));
                    showTasks();
                }
               
                    
             }
         }

}
const showTasks = () =>{
    for(key of keys){
        var userData = JSON.parse(localStorage.getItem(key));
        
        if(authUser === userData.email){
            document.getElementById("myInputTask").value =""
                            var taskList = document.getElementById("myTable");
                            var myListItems = "";
                            userData.task.forEach((data,index) => {
                                
                            myListItems += 
                            `<tr>
                                <td><input id="taskListInput" disabled="true" value="${data}"></td>
                            <td><button class="editBtn" onclick="editTask(${index})">Edit</button></td>
                            <td><button class="completeBtn">Complete</button></td>
                            <td><button class="removeBtn">Remove</button></td>
                            
                            </tr>`;
                            //    alert(data)
                        
                            });
                            
                            taskList.innerHTML = myListItems
                            // alert(userData.task.length);
                        }
                    }    
}

const editTask = (e) =>{
    for(key of keys){
        var userData = JSON.parse(localStorage.getItem(key));
        
        let editInputField = document.getElementById("editInput");

        if(authUser === userData.email){
            editInputField.value = userData.task[e];
        }
    }
    changeBtn.addEventListener("click",()=>{
        
        for(key of keys){
            var userData = JSON.parse(localStorage.getItem(key));    
            var editInputField = document.getElementById("editInput");
            if(authUser === userData.email){
                userData.task[e]=editInputField.value;
                localStorage.setItem(`${key}`, JSON.stringify(userData))
            }
        }
        editInputField.value = "";
        showTasks();
    });
}


const logout = (e)=>{
    e.preventDefault();
    sessionStorage.clear();
    window.location = 'login.html';
}

 
const disableProfile = () =>{

      document.getElementById("tfname").disabled = true;
      document.getElementById("tlname").disabled = true;
      document.getElementById("temail").disabled = true;
      document.getElementById("tmobile").disabled = true;
      document.getElementById("tbtnsave").disabled = true;

      var loggedUser = sessionStorage.getItem("Email");

    for (key of keys){

        var userData = JSON.parse(localStorage.getItem(key));

        if(loggedUser===userData.email){
            document.getElementById("tfname").value = userData.firstName;
            document.getElementById("tlname").value = userData.lastName;
            document.getElementById("temail").value = userData.email;
            document.getElementById("tmobile").value = userData.mobile;
        }
    }

    
    //  var authEmail = JSON.parse(localStorage.getItem('email'));
    //  var authFname = JSON.parse(localStorage.getItem('fname'));
    //  var authLname = JSON.parse(localStorage.getItem('lname'));
    //  var authMobile = JSON.parse(localStorage.getItem('mobile'));
    //  if(authEmail===loggedUser){
            
        
    //      alert(`User Already Registered With This Email...${usedEmail} and ${userFname}`);
    //   }  
}


const enableProfile = () =>{
    document.getElementById("tfname").disabled = false;
    document.getElementById("tlname").disabled = false;
    document.getElementById("temail").disabled = false;
    document.getElementById("tmobile").disabled = false;
    document.getElementById("tbtnsave").disabled = false;
}

const updateProfile = () =>{

    let pfname = document.getElementById('tfname');
    let plname =  document.getElementById('tlname');
    let pemail = document.getElementById('temail');
    let pmobile = document.getElementById('tmobile');

    var loggedUser = sessionStorage.getItem("Email");


    for (key of keys){

        var userData = JSON.parse(localStorage.getItem(key));

        if(loggedUser===userData.email){   
            if(pfname!="" && plname!=""){
                let user = {
                    firstName : pfname.value,
                    lastName : plname.value,
                    email : pemail.value,
                    mobile : pmobile.value,
                    gender : userData.gender,
                    dob : userData.dob,
                    password : userData.password,
                    task : userData.task,
                    completetask : userData.completeTask
                }
                sessionStorage.setItem('Email',pemail.value);
                localStorage.setItem(`${key}`, JSON.stringify(user));
            }
            else{
                alert("Blank input is not accepted!!!");
            }                 
        }
        // Session User Authentication
        var userEmail = sessionStorage.getItem("Email");
        
        if(userEmail === null){
            alert("Authentication Problem");
            window.location = 'login.html'
        }
        else{
            document.getElementById("userEmail").innerHTML = userEmail;
        }
    }
    // var authEmail = JSON.parse(localStorage.getItem('email'));
    
    

}


const changePassword = () =>{

    let current_password = document.getElementById('currentpassword');
    let new_password =  document.getElementById('newpassord');
    let confirm_new_password = document.getElementById('cnewpassword');
    

    for (key of keys){

        var userData = JSON.parse(localStorage.getItem(key));
        var authPassword  = sessionStorage.getItem("Password");
        var authUser = sessionStorage.getItem("Email");

        if(authUser===userData.email){   
            if(authPassword===current_password.value && new_password.value===confirm_new_password.value){
                let user = {
                    firstName : userData.firstName,
                    lastName : userData.lastName,
                    email : userData.email,
                    mobile : userData.mobile,
                    gender : userData.gender,
                    dob : userData.dob,
                    password : new_password.value,
                    task : userData.task,
                    completetask : userData.completeTask
                }
                sessionStorage.setItem('Password',new_password.value);
                localStorage.setItem(`${key}`, JSON.stringify(user));
            }
            else{
                alert("Current Password is wrong OR Password Does not matched !!!");
            } 
                            
        }
        
        
    }
}
