const apiKey= "ca19ac4b3abc8e0cbaafc6b5709298e5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weather = document.querySelector(".weather");
const searchInp = document.querySelector(".search input");

const searchbtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    
        switch (data.weather[0].main) {
            case 'Haze':
                weatherIcon.style.background = `url("./images/mist.png")` ;
                break;
                
            case 'Clouds':
                weatherIcon.style.background = `url("./images/clouds.png")` ;
                break;
            case 'Snow':
                weatherIcon.style.background = `url("./images/snow.png")`
                break;
            case 'Rain':
                weatherIcon.style.background = `url("./images/rain.png")`;
                break;
                
            case 'Clear':
                weatherIcon.style.background = `url("./images/clear.png")`;
                break;
            case 'Drizzle':
                weatherIcon.style.background = `url("./images/drizzle.png")`;
                break;
              
                    
            default:
                break;
            
            }
        weather.style.display = "block"; 
        document.querySelector(".error").style.display = "none"
            
    }


}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchInp.value);   

})



