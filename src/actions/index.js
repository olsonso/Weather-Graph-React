import axios from 'axios';

const API_KEY="def904485fce3d3832e72c6ca2f07091";
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER ='FETCH_WEATHER';

export function fetchWeather(city){
  //static 'us' cities,change (us) if want different country
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  
  console.log("req", request);

  return{
    type:FETCH_WEATHER,
    payload:request
  }
}
