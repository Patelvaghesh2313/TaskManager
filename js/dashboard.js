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

        closeBox.className="close";
        closeBox.appendChild(symbol);

        correctBox.className="correct";
        correctBox.appendChild(correctSymbol);

        mywholeList[i].appendChild(correctBox);
        mywholeList[i].appendChild(closeBox);
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
}


const logout = (e)=>{
    e.preventDefault();
    sessionStorage.clear();
    window.location = 'login.html';
}

 
const disableProfile = () =>{
    var keys = Object.keys(localStorage);

    document.getElementById("tfname").disabled = true;
    document.getElementById("tlname").disabled = true;
    document.getElementById("temail").disabled = true;
    document.getElementById("tmobile").disabled = true;
    document.getElementById("tbtnsave").disabled = true;

    var loggedUser = sessionStorage.getItem("Email");

    for( key of keys){
        var data = JSON.parse(localStorage.getItem(key));
        if(data.email===loggedUser){
            var usedEmail = data.email;
            var userFname = data.fname
            document.getElementById("tfname").value = data.fname;
            document.getElementById("tlname").value = data.lname;
            document.getElementById("temail").value = data.email;
            document.getElementById("tmobile").value = data.mobile;
            
            alert(`User Already Registered With This Email...${usedEmail} and ${userFname}`);
        }
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

    var keys = Object.keys(localStorage);

    let pfname = document.getElementById('tfname');
    let plname =  document.getElementById('tlname');
    let pemail = document.getElementById('temail');
    let pmobile = document.getElementById('tmobile');

    var authUser = sessionStorage.getItem("Email");

    for( key of keys){
        var data = JSON.parse(localStorage.getItem(key));
        if(data.email===authUser){
            var usedEmail = data.email;
            let user = {
                fname: pfname.value,
                lname: plname.value,
                email: pemail.value,
                mobile: pmobile.value,
                dob: data.dob,
                gender: data.gender,
                password: data.password
                }
            localStorage.setItem(key, JSON.stringify(user));
        }
    }

}
