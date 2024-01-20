function getWeather() {
    const apiKey = 'YOUR_API_KEY';
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');

    if (cityInput.trim() === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const { name, main, weather } = data;
            const temperature = main.temp;
            const description = weather[0].description;

            weatherInfo.innerHTML = `<p>Weather in ${name}: ${description}</p><p>Temperature: ${temperature}°C</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
        });
}
