function getWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const city = document.getElementById('cityInput').value;

    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');

    const cityName = data.name;
    const temperature = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius

    const weatherDescription = data.weather[0].description;

    const html = `
        <h2>${cityName}</h2>
        <p>${temperature}°C</p>
        <p>${weatherDescription}</p>
    `;

    weatherInfoDiv.innerHTML = html;
}
