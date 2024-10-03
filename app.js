const apiKey="c808685436766e2135b3a77e64bd9a61";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="images/3222800.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src="images/3222800.png";
    
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src="images/3d-rendering-rainy-weather-icon-3d-render-cloud-with-rain-rainy-weather-png.png";
    
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src="images/4837678.png";
    
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src="images/1779807.png";
    
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";

    }

       
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})



