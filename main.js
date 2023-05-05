
let search = document.querySelector('.search');
let apiResponse,
dataResponse;
            //  0       1         2         3           4          5        6 
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
months = ['January','February','March','April','May','June','July','August',
           'September','October','November','December',];

let currentSearch = search.value;
search.addEventListener('keyup' , function(){
        currentSearch = search.value;
        if(currentSearch == '')
        {
            currentSearch='cairo'
        }
        getData(currentSearch)
})       
async function getData(currentSearch = 'cairo'){
     apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=572e08fb1d7547f58d8151525211205&q=${currentSearch}&days=3`);
     dataResponse = await apiResponse.json();
     displayToday()
     displayNextDay()
     displayThirdDay()
    console.log(dataResponse)
}
getData()



function displayToday(){
    let day = new Date();
    $('#day-num-mon').html(day.getDate() + ' ' +months[day.getMonth()])
    $('.location').html(dataResponse.location.name)
    $('.temp-c').html(dataResponse.current.temp_c)
    $('.Description').html(dataResponse.current.condition.text)
    $('.humidity').html(dataResponse.current.humidity)
    $('.wind_kph').html(dataResponse.current.wind_kph)
    $('.wind_dir').html(dataResponse.current.wind_dir)
    $('.today-icon').attr( 'src' , `https:${dataResponse.current.condition.icon}`)
}

function displayNextDay(){
    let day = new Date();
    let dayName = day.getDay() + 1
    if(dayName == 7)
    {
        dayName = 0
    } 
    $('#next-day-name').html(days[dayName])
    $('.next-max-temp').html(dataResponse.forecast.forecastday[1].day.maxtemp_c)
    $('.next-min-temp').html(dataResponse.forecast.forecastday[1].day.mintemp_c)
    $('.next-day-icon').attr( 'src' , `https:${dataResponse.forecast.forecastday[1].day.condition.icon}` )
    $('.next-day-des').html(dataResponse.forecast.forecastday[1].day.condition.text)
}

function displayThirdDay(){
    let day = new Date();
    let dayName = day.getDay() + 2
    if(dayName == 8)
    {
        dayName = 1
    }
    if(dayName == 7)
    {
        dayName = 0
    }
    $('#third-day-name').html(days[dayName])
    $('.third-max-temp').html(dataResponse.forecast.forecastday[2].day.maxtemp_c)
    $('.third-min-temp').html(dataResponse.forecast.forecastday[2].day.mintemp_c)
    $('.third-day-icon').attr( 'src' , `https:${dataResponse.forecast.forecastday[2].day.condition.icon}` )
    $('.third-day-des').html(dataResponse.forecast.forecastday[2].day.condition.text)
    
}

// let dayName = day.getDay() +1
//     if(dayName == 7)
//     {
//         dayName = 0
//     }
//     $('#day-name').html(days[dayName])
