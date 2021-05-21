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
    var i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none';
    }
    }

    var complete = document.getElementsByClassName("correct");
    for(var j=0; j < complete.length; j++){
     complete[j].onclick = function(){
        var completedTask = this.parentElement;
        // completedTask.tagName("SPAN")
        completedTask.removeChild(closeBox);
        // alert(completedTask.textContent)
        var myList = document.createElement("li");
        var mycompletedTask = document.createTextNode(completedTask.textContent);
        myList.appendChild(mycompletedTask)
        document.getElementById('myCompletedTask').appendChild(myList);
        completedTask.style.display = 'none';
    }
    }
}




 
