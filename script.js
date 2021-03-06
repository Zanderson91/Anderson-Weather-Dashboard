let search = $("#search");
let searchBtn = $("#search-btn");
let selectCity = $("#select-city");
let todayTemp = $("#temp");
let todayWind = $("#wind");
let todayHumid = $("#humid");
let todayUV = $("#uv");
let city = "";
let cityIndex = [];
let icon = $("icon-image");


//Event Handlers
$("#search-btn").on("click", function () {
showWeather(search.val());
});

$("#clear-history").on("click", clearHistory);

function citySearch(cityName) {
for (var i = 0; i < cityIndex.length; i++) {
    if (cityName.toUpperCase() === cityIndex[i]) {
    return 1;
    }
}
    return 1;
}

//Need function for current and future Weather
function showForecast(event) {
if (search.val().trim() !== "") {
    city = search.val().trim();
    todayWeather(city);
    event.preventDefault();
}
}

function showWeather(city) {
let queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=c80edcc66d171f416034dd0af305df70";

$.ajax({
    method: "GET",
    url: queryURL,
}).then(function (response) {
    console.log(response);

    let date = new Date(response.list[0].dt * 1000).toLocaleDateString();
    $(selectCity).html(response.city.name + " " + date);
    console.log(date);

    //Need to return Wind, Humid, Temp, UV
    let windSpeed = response.list[0].wind.speed;
    let windMPH = (windSpeed * 2.237).toFixed(1);
    $(todayWind).html(windMPH + " MPH");
    console.log(windSpeed);
    // Temperature response for today (converted to F)
    let temperature = (response.list[0].main.temp - 273.15) * 1.8 + 32;
    $(todayTemp).html(temperature.toFixed(2) + "F");
    console.log(todayTemp);
    //Humidity response for today
    $(todayHumid).html(response.list[0].main.humidity + " %");
    console.log(todayHumid);
    //UV response for today
    $(todayUV).html(response.list[0].weather[0].description)
    console.log(todayUV);
    weeklyForecast(response);
});
}

// Function for 5 day forecast display
function weeklyForecast(response) {
for (i = 8; i <= 40; i += 8) {
    let date = new Date(response.list[i - 1].dt * 1000).toLocaleDateString();
    let iconcode = response.list[i - 1].weather[0].icon;
    let iconurl = "http://api.openweathermap.org/img/wn/" + iconcode + ".png";
    let tempK = response.list[i - 1].main.temp;
    let tempF = ((tempK - 273.5) * 1.8 + 32).toFixed(2);
    let humidity = response.list[i - 1].main.humidity;
    let wind = response.list[i - 1].wind.speed;
    console.log(humidity);
    $("#day" + i).html(date);
    $("#icon").html("<img src=" + iconurl + ">");
    $(".temp" + i).html(tempF + "&#8457");
    $(".humid" + i).html(humidity + "%");
    $(".wind" + i).html(wind);
}
}

//Clear the search history from the page
function clearHistory(event) {
    event.preventDefault();
    sCity = [];
    localStorage.removeItem("cityname");
    document.location.reload();
}
