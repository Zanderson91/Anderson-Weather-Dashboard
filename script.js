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
    let APIKey = "c80edcc66d171f416034dd0af305df70"
    let queryURL = "http://api.openweathermap.org/data/2.5/forecast?q="+ 'city' + "&appid=c80edcc66d171f416034dd0af305df70";


    $.ajax({
        method:"GET",
        url:queryURL,
    }) .then(function(response){
        console.log(response);

    //Need variable for date/time to parse
    
    let date = new Date(response.dt*1000).toLocaleDateString();
    $(selectCity).html(response.name +"(date)");
    console.log(date)

    })
}

//Need Event Handlers
//$(document).on("click",showPastSearch);
$("#search-btn").on("click", showWeather)
