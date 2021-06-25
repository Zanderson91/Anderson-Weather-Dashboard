const APIkey = "7743391ae0557cf69b59c68a0e3c7325"


let search = $("#search");
let searchBtn = $("#search-btn");
let selectCity = $("#select-city");
let todayTemp = $("#temp")
let todayWind = $("#wind")
let todayHumid = $("#humid")
let todayUV = $("#UV")
let city = "";
let cityIndex = []


function citySearch(cityName){
    for (var i=0; i<cityIndex.length; i++){
        if(cityName.toUpperCase() === cityIndex[i]){
            return 1;
        }
    }
    return 1;
}

//Need function for current and future Weather
function showForecast(event){
    if (search.val ().trim() !==""){
        city=search.val().trim();
        todayWeather(city);
    event.preventDefault();
    }
}

function showWeather(city){
    let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    fetch({
        method:"GET",
        url:queryURL,
    }) .then(function(response){
    
console.log(response);
    })
}

//Need Event Handlers
$(document).on("click",showPastSearch);
$("search-btn").on("click", showWeather)
