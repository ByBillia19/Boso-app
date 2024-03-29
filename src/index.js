function displayTemperature(response) {
            let temperatureElement = document.querySelector("#current-temperature");
            let temperature = Math.round(response.data.temperature.current);
            let cityElement = document.querySelector("#city");
            cityElement.innerHTML = response.data.city;
            temperatureElement.innerHTML = temperature;
            let descriptionElement= document.querySelector("#description");
            descriptionElement.innerHTML=response.data.condition.description;
let humidityElement=document.querySelector("#humidity");
humidityElement.innerHTML=response.data.temperature.humidity;
let winSpeedElement=document.querySelector("#wind-speed");
winSpeedElement.innerHTML=response.data.wind.speed;

let iconElement = document.querySelector("#icon");
 iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
console.log(response.data);
        }

        function search(event) {
            event.preventDefault();
            let searchInputElement = document.querySelector("#search-form-input");
            let city = searchInputElement.value;

            let apiKey = "bof6afef739a369a2ca570a747e3a1ct";
            let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

            axios.get(apiUrl).then(displayTemperature);
        }

        function formatDate(date) {
            let minutes = date.getMinutes();
            let hours = date.getHours();
            let day = date.getDay();

            if (minutes < 10) {
                minutes = `0${minutes}`;
            }

            if (hours < 10) {
                hours = `0${hours}`;
            }

            let days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ];

            let formattedDay = days[day];
            return `${formattedDay} ${hours}:${minutes}`;
        }

        let searchForm = document.querySelector("#search-form");
        searchForm.addEventListener("submit", search);

        let currentDateELement = document.querySelector("#current-date");
        let currentDate = new Date();

        currentDateELement.innerHTML = formatDate(currentDate);
    
