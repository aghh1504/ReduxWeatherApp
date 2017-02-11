import axios from 'axios'

const API_KEY = '437373aed2dace2032291928257abf5e'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

 export function fetchWeather(city) {
   const url = `${ROOT_URL}&q=${city}`
   const request = axios.get(url)

   return {
     type: FETCH_WEATHER,
     payload: request
   }
 }
