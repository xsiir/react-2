import axios from 'axios';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'appid=7f90f3e7d39cac4f85fc329bb73ac5c5';
const UNITS = 'units=metric'

export const OpenWeatherMapAPI = {
    getByCityName: ({ cityName, lang }) => {
        const url = `${API_URL}?q=${cityName}&lang=${lang}&${UNITS}&${API_KEY}`;
        return axios.get(url);
    }
}

//You can add more langs https://openweathermap.org/api
export const Languages = [
    {
        id: 'en', name: 'English'
    },
    {
        id: 'pl', name: 'Polish'
    },
    {
        id: 'de', name: 'German'
    }
];
