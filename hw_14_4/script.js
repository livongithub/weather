// You need an API key from Open Weather Map to use their API
// You can sign up for a free one here: https://openweathermap.org/api_keys
const apiKey = "850f446d9f4220e8aeb433a672cdef52";

// You need to specify the coordinates of Where you're targeting
// You can use this website to find them: https://www.latlong.net/
const lat = 40.7209;
const lon = -74.0007;

// You need to use the fetch function to make an API call
// You can use this URL to get the current weather data for any location: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// You need to use the .then() method to handle the response from the API
// You need to use the .json() method to parse the response as JSON
fetch(url)
  .then(response => response.json())
  .then(data => {
    // You can access the weather data from the data object
    // You can use this website to see what data is available: https://openweathermap.org/current#current_JSON
    const temp = data.main.temp; // The temperature in Kelvin
    const feelsLike = data.main.feels_like; // The temperature that it feels like in Kelvin

    // You can use console.log() to print the weather data to the console
		console.log("the current temperature in Manhattan is " + temp)
		console.log("the real feel temperature in Manhattan is " + feelsLike)

        let holder = document.getElementById('holder')
        let mainDiv = document.createElement('div')
        let text = document.createElement('h1')

        text.innerHTML = data.name +', '+ data.sys.country
        text.style.fontFamily = 'Arial, sans-serif'
        text.style.textAlign = 'left'

        let temperature = document.createElement('h2')

        holder.append(mainDiv)
        mainDiv.append(text)

        temperature.innerHTML = feelsLike +'ºF'
        temperature.style.fontFamily = 'Arial, sans-serif'
        temperature.style.fontSize = "80px" 
        temperature.style.marginTop = "-35px" 
        mainDiv.append(temperature)


        // position: fixed;
        // top: 50%;
        // left: 50%;

        holder.style.display = 'flex'
        holder.style.alignItems = 'center'
        holder.style.justifyContent = 'center'


        mainDiv.style.padding = '50px'
        mainDiv.style.borderRadius = '10px'
        mainDiv.style.display = 'flex'
        mainDiv.style.alignItems = 'left'
        mainDiv.style.justifyContent = 'left'
        mainDiv.style.flexDirection = 'column'
        mainDiv.style.maxWidth = '500px'
        mainDiv.style.marginRight = 'auto'
        mainDiv.style.marginLeft = 'auto'
        // mainDiv.style.position = 'fixed'
        // mainDiv.style.top = '50%'
        // mainDiv.style.left = '50%'

        let weatherState = document.createElement('h4')
        weatherState.innerHTML = 'feels like '+ feelsLike + 'ºF, '+ data.weather.description
        console.log(data.weather.main)
        weatherState.style.fontFamily = 'Arial, sans-serif'
        weatherState.style.marginTop = "-75px" 

        mainDiv.append(weatherState)

        let facts = document.createElement('div')
        mainDiv.append(facts)
        facts.style.display = 'flex'
        let lineOne = document.createElement('div')
        facts.append(lineOne)
        let lineTwo = document.createElement('div')
        facts.append(lineTwo)

        facts.style.gap = '3em'
        facts.style.fontFamily = 'Arial, sans-serif'
        facts.style.fontSize = '15px'


        let heat = document.createElement('p')
        heat.innerHTML = 'actual temperature: '+ temp+'ºF'
        lineOne.append(heat)

        let humidity = document.createElement('p')
        humidity.innerHTML = 'humidity: '+ data.main.humidity + '%'
        lineOne.append(humidity)

        let pressure = document.createElement('p')
        pressure.innerHTML = 'pressure: '+ data.main.pressure + 'hPa'
        lineOne.append(pressure)

        let max = document.createElement('p')
        max.innerHTML = 'max temperature: '+ data.main.temp_max + 'ºF'
        lineTwo.append(max)

        let min = document.createElement('p')
        min.innerHTML = 'min temperature: '+ data.main.temp_min + 'ºF'
        lineTwo.append(min)






       



        if (data.main.temp >= 70){
            mainDiv.style.border = '10px solid orange'
            temperature.style.color = 'orange'
        }
        else {
            mainDiv.style.border = '10px solid lightblue'
            temperature.style.color = 'lightblue'
        }

  })

  .catch(error => {
    // You need to use the .catch() method to handle any errors from the API call
    console.error(error);
  });
