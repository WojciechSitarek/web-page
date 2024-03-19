
const apiKey = '0b7284239987792d0b0fb1da5fef1e07';

const weatherTranslations = {
    'clear sky': 'Bezchmurnie',
    'broken clouds': 'Duże zachmurzenie',
    'scattered clouds':'Umiarkowane zachmurzenie',
    'few clouds':'Małe zachmurzenie',
    'overcast clouds':'Duże zachmurzenie',
    'clouds': 'Zachmurzenie',
    'drizzle': 'Mżawka',
    'rain': 'Deszcz',
    'thunderstorm': 'Burza',
    'snow': 'Opady śniegu',
    'light snow':'Lekkie opady śniegu',
    'mist': 'Mgła',
};

function translateWeather(description) {
    return weatherTranslations[description] || description;
}

function fetchWeatherData(location, panelId) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const locationElement = document.getElementById(`${panelId}-weather`);
            if (data && data.name && data.main && data.weather && data.weather[0]) {
                const city = data.name;
                const temperature = Math.round(data.main.temp);
                const weatherDescription = translateWeather(data.weather[0].description);

                locationElement.innerHTML = `
                    <h3>Pogoda Live</h3>
                    <p>Miasto: ${city}</p>
                    <p>Temperatura: ${temperature}°C</p>
                    <p>Pogoda: ${weatherDescription}</p>
                `;
            } else {
                console.error(`Invalid data received for ${location}:`, data);
                locationElement.innerHTML = 'Weather data not available';
            }
        })
        .catch(error => {
            console.error(`Error fetching weather data for ${location}:`, error.message);
        });
}

fetchWeatherData('Split', 'Chorwacja');
fetchWeatherData('Oslo', 'Norwegia');
fetchWeatherData('Cannes', 'Francja');
fetchWeatherData('Capri', 'Włochy');

