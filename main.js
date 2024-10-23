
const apiKey = "ac4210957157c6e7db8e98a202c2f08e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const rearchBox = document.querySelector(".searchBox input")
const rearchBtn = document.querySelector(".searchBox button")
const weatherIcon = document.querySelector(".weatherIcon")
const weather = document.querySelector(".weatherIcon-cont p")

async function checkWeather(city){
    const respons = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(respons.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
        var data = await respons.json();
    
        console.log(data);
        
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    weather.innerHTML = data.weather[0].main;

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "images/mist.png"
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"

    }
    
}

rearchBtn.addEventListener("click", ()=>{
    checkWeather(rearchBox.value);
})


