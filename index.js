const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key

function getWeather() {
    const cityInput = document.getElementById('city');
    const cityName = cityInput.value;

    if (cityName.trim() === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const resultContainer = document.getElementById('result');
    
    if (data.cod === '404') {
        resultContainer.innerHTML = `<p>${data.message}</p>`;
    } else {
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;

        resultContainer.innerHTML = `
            <p>Weather: ${weatherDescription}</p>
            <p>Temperature: ${temperature} &#8451;</p>
        `;
    }
}
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key

function getWeather() {
    const cityInput = document.getElementById('city');
    const cityName = cityInput.value;

    if (cityName.trim() === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    // Display loading spinner while fetching data
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '<div class="loader"></div>';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            displayError('Failed to fetch weather data. Please try again.');
        });
}

function displayWeather(data) {
    const resultContainer = document.getElementById('result');
    
    if (data.cod === '404') {
        displayError('City not found. Please enter a valid city name.');
    } else {
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;

        resultContainer.innerHTML = `
            <p>Weather: ${weatherDescription}</p>
            <p>Temperature: ${temperature} &#8451;</p>
        `;
    }
}

function displayError(errorMessage) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<p class="error">${errorMessage}</p>`;
}

