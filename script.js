const URL_KEY = '94b296883b987e0fce993349aa637fb8'
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q='

const search = document.querySelector('svg')
const input = document.querySelector('.search input')

async function getWeather(city){
    
    let response = await fetch(API_URL + city + `&appid=${URL_KEY}`)
    if (response.status == 404 && input.value != 'abdullah ka dil'){
        
        document.querySelector('.city').innerText = 'invalid city'
        throw new Error('invalid city name');
        
        
    }else if (response.status == 404 && input.value == 'abdullah ka dil'){{

        
            document.querySelector('.city').innerText = 'haniya saad'
            document.querySelector('.city').style.textAlign = 'center'
            
    }

        
    }else{
        let data = await response.json()
        
        
            console.log(data);
        
            document.querySelector('.temp').innerText = Math.round(data.main.temp - 273.15) + '°C'
            document.querySelector('.info img').src = `${data.weather[0].main}.png`
            document.querySelector('.city').innerText = data.name
        
            document.querySelector('.percent').innerText = data.main.humidity + '%'
            document.querySelector('.speed').innerText = data.wind.speed + ' km/h'
            
    }
}

search.addEventListener('click',()=>{
    getWeather(input.value)

})
