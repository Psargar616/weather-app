const apiKey = "d5bac5cece81bcc5eed05df3adab45ac";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// apiID d5bac5cece81bcc5eed05df3adab45ac
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.opacity = 0;
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windSpeed").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./images/clouds.png";
      document.querySelector(".card").style.transition = "all 2s ease 0.1s";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./images/clear.png";
      document.querySelector(".card").style.transition = "all 2s ease 0.1s";
      document.querySelector(".card").style.background =
        "linear-gradient(135deg, #FBDA61 0%, #FF5ACD 100%)";
    } else if (data.weather[0].main == "Drizzle") {
      document.querySelector(".card").style.transition = "all 2s ease 0.1s";
      weatherIcon.src = "./images/drizzle.png";
      document.querySelector(".card").style.background =
        "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%";
    } else if (data.weather[0].main == "Rain") {
      document.querySelector(".card").style.transition = "all 2s ease 0.1s";
      weatherIcon.src = "./images/rain.png";

      document.querySelector(".card").style.background =
        "-webkit-linear-gradient(to top, #360033, #0b8793)";
    } else if (data.weather[0].main == "mist") {
      weatherIcon.src = "./images/mist.png";
      document.querySelector(".card").style.transition = "all 2s ease 0.1s";
      document.querySelector(".card").style.background =
        "linear-gradient(to right, #ff6a00, #ee0979)";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./images/snow.png";
      document.querySelector(".card").style.transition = "all 2s ease 0.1s";
      document.querySelector(".card").style.background =
        "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.opacity = 1;
    document.querySelector(".search input").value = "";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
