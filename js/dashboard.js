const coordinates= ()=>{
    
    let cityName = document.getElementById("city");
    let temprature = document.getElementById("temprature");
    let liveWeather = document.getElementById("weather");
    let currentTime = document.getElementById("time");

    var d = new Date(new Date().getTime()).toLocaleTimeString();

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((myLoc)=>{
            const lat = myLoc.coords.latitude;
            const lng = myLoc.coords.longitude;
            console.log(lat, lng);

            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d2c1859fc72f6df2662dd532105ac751`)
                .then(response=>response.json())
                .then(data =>{
                     city = data['name'];
                     temp = data['main']['temp'];
                     weather = data['weather'][0]['description'];
                     time = d;

                     cityName.innerHTML = city;
                     temprature.innerHTML = temp;
                     liveWeather.innerHTML = weather;
                     currentTime.innerHTML = time;


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
     var li = document.createElement("li");
     var inputTask = document.getElementById("myInputTask").value;
     var myNewTask = document.createTextNode(inputTask);

    li.appendChild(myNewTask);
    if (inputTask === ''){
        alert("Please Enter Anything !!!")
    } else{
        document.getElementById('myULTask').appendChild(li);
    }
    document.getElementById("myInputTask").value = "";
    li.className = "task-list";
    

    var mywholeList = document.getElementsByClassName("task-list");
    for (var i=0; i< mywholeList.length; i++)
    {
        var closeBox = document.createElement("BUTTON");
        var symbol = document.createTextNode("\u00D7");

        var correctBox = document.createElement("BUTTON");
        var correctSymbol = document.createTextNode("\u2713");

        var editBox = document.createElement("BUTTON");
        var editText = document.createTextNode("Edit");

        closeBox.className="close";
        closeBox.appendChild(symbol);

        correctBox.className="correct";
        correctBox.appendChild(correctSymbol);

        editBox.className="editBtn";
        editBox.appendChild(editText);

        mywholeList[i].appendChild(correctBox);
        mywholeList[i].appendChild(closeBox);
        mywholeList[i].appendChild(editBox);
    }
    

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none';
    }
    }

    var complete = document.getElementsByClassName("correct");
    for(var j=0; j < complete.length; j++){
     complete[j].onclick = function(){
        var completedTask = this.parentElement; // to get parentelent object
        // alert(completedTask.childNodes[0].textContent);
        var myList = document.createElement("li");
        var mycompletedTask = document.createTextNode(completedTask.childNodes[0].textContent); // to get only parent element's content
        myList.appendChild(mycompletedTask)
        document.getElementById('myCompletedTask').appendChild(myList);
        completedTask.style.display = 'none';
    }
    }

    var editTextContent = document.getElementsByClassName("editBtn");
    for(var k=0; k<editTextContent.length; k++)
    {
        editTextContent[k].onclick = function(){
            var editTask = this.parentElement;
            // alert(this.parentElement.childNodes[0].textContent);

            document.getElementById("myInputTask").value = editTask.childNodes[0].textContent;  // selected task put inside input field
            editTask.style.display = 'none';
        }
    }
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

    
     var authEmail = JSON.parse(localStorage.getItem('email'));
     var authFname = JSON.parse(localStorage.getItem('fname'));
     var authLname = JSON.parse(localStorage.getItem('lname'));
     var authMobile = JSON.parse(localStorage.getItem('mobile'));
     if(authEmail===loggedUser){
             document.getElementById("tfname").value = authFname;
          document.getElementById("tlname").value = authLname;
          document.getElementById("temail").value = authEmail;
          document.getElementById("tmobile").value = authMobile;
        
         alert(`User Already Registered With This Email...${usedEmail} and ${userFname}`);
      }  
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

    var authUser = sessionStorage.getItem("Email");


    var authEmail = JSON.parse(localStorage.getItem('email'));
    
    if(authEmail===authUser){
    
        localStorage.setItem('fname', JSON.stringify(pfname.value));
        localStorage.setItem('lname', JSON.stringify(plname.value));
        localStorage.setItem('email', JSON.stringify(pemail.value));
        localStorage.setItem('mobile', JSON.stringify(pmobile.value));
       
        sessionStorage.setItem('Email',pemail.value);

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
    

}


const changePassword = () =>{

    let current_password = document.getElementById('currentpassword');
    let new_password =  document.getElementById('newpassord');
    let confirm_new_password = document.getElementById('cnewpassword');
    

    var authUser = sessionStorage.getItem("Email");
    var authPassword  = sessionStorage.getItem("Password");

    var authEmail = JSON.parse(localStorage.getItem('email'));
    
    if(authUser===authEmail){
        if(authPassword===current_password.value && new_password.value===confirm_new_password.value){
            
            localStorage.setItem('password', JSON.stringify(new_password.value));
            sessionStorage.setItem('Password',new_password.value);
            alert(`${authUser}'s password has updated...`)
            document.getElementById('currentpassword').value = "";
            document.getElementById('newpassord').value = "";
            document.getElementById('cnewpassword').value = "";

        }
        else{
            alert(`Something went wrong !!!`);
        }   
        
        
    }
    else{
        alert(`User's password is not Authorize...`)
    }


}
