const APIkey = "7743391ae0557cf69b59c68a0e3c7325"

let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

let search = $("#search");
let seacrchBtn = $("#search-btn");
let selectCity = $("#select-city");
let todayTemp = $("#temp")
let todayWind = $("#wind")
let todayHumid = $("#humid")
let todayUV = $("#UV")
let city = "";
let cityIndex = []


function search(cityName){
    for (var i=0; i<cityIndex.length; i++){
        if(cityName.toUpperCase()
    }
}


fetch(queryURL)