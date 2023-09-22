const apiKey = "57600e9f46f7baf8eacf940f8bb28fff";
const searchButton = document.getElementById("searchButton");
const locationInput = document.getElementById("locationInput");
const weatherInfo = document.getElementById("weatherInfo");
const weatherIcon = document.getElementById("weatherIcon");

searchButton.addEventListener("click", () => {
    const location = locationInput.value.trim().toLowerCase();
    if (location === "") {
        alert("Please do enter a Valid location");
        return;
    }

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

            weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
            // Display the weather icon
            weatherIcon.src = iconUrl;
        })
        .catch(error => {
            console.error("Error fetching data:");
            weatherInfo.innerHTML = "Given Location is Not Found";
            weatherIcon.src = ""; // Clear the icon in case of an error
        });
});