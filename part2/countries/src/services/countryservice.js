import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api"

const getAll = () => {
    return axios.get(`${baseUrl}/all`);
}

const getInfo = (country) => {
    return axios.get(`${baseUrl}/name/${country}`);
}

const getWeather = (lat, lon) => {
    const api_key = import.meta.env.VITE_WEATHER_KEY;
    return axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=daily,hourly,daily,minutely&units=metric&appid=${api_key}`);
}

export default {
    getAll: getAll,
    getInfo: getInfo,
    getWeather: getWeather
}