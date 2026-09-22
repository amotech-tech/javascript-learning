const form = document.getElementById("weatherForm");

const cityInput = document.getElementById("cityInput");

const cityDisplay = document.getElementById("city");

const temperatureDisplay =
    document.getElementById("temperature");

const conditionDisplay =
    document.getElementById("condition");

const message =
    document.getElementById("message");


form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const city = cityInput.value.trim();

    if (city === "") {

        message.textContent =
            "Please enter a city.";

        return;
    }


    message.textContent = "Loading...";


    try {

          const locationResponse =
            await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
            );


        if (!locationResponse.ok) {

            throw new Error(
                "Could not find city"
            );

        }


        const locationData =
            await locationResponse.json();


        if (
            !locationData.results ||
            locationData.results.length === 0
        ) {

            throw new Error(
                "City not found"
            );

        }


        const location =
            locationData.results[0];


        const latitude =
            location.latitude;

        const longitude =
            location.longitude;


    

        const weatherResponse =
            await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=auto`
            );


        if (!weatherResponse.ok) {

            throw new Error(
                "Could not get weather"
            );

        }


        const weatherData =
            await weatherResponse.json();


    

        const temperature =
            weatherData.current.temperature_2m;

        const weatherCode =
            weatherData.current.weather_code;


    

        cityDisplay.textContent =
            `${location.name}, ${location.country}`;

        temperatureDisplay.textContent =
            `${temperature}°C`;

        conditionDisplay.textContent =
            getWeatherDescription(weatherCode);

        message.textContent = "";


    } catch (error) {

        message.textContent =
            error.message;

    }

});




function getWeatherDescription(code) {

    if (code === 0) {
        return "☀️ Clear sky";
    }

    if (code >= 1 && code <= 3) {
        return "🌤️ Partly cloudy";
    }

    if (code >= 51 && code <= 67) {
        return "🌧️ Rain";
    }

    if (code >= 71 && code <= 77) {
        return "❄️ Snow";
    }

    if (code >= 80 && code <= 82) {
        return "🌦️ Rain showers";
    }

    if (code >= 95) {
        return "⛈️ Thunderstorm";
    }

    return "Weather information";
}