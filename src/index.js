function refreshWeather(response){
    console.log(response.data);
}

function searchCity (city){
let apiKey="bof6afef739a369a2ca570a747e3a1ct";
let apiUrl='https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apyiKey}&units=metric';
axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");
    let cityElement=document.querySelector("#city");
    cityElement.innerHTML=searchInput.value ;
    searchCity(searchInput.value);
}
let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);