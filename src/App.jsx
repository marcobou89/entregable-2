
import { useEffect, useState } from 'react';
import './App.css'
import axios, { Axios } from 'axios';
import Weather from './complements/Weather';
const key ='2d998b1621b3adfa3929d70e8efd21df';

function App() {

  const [dataApi, setDataApi] = useState()
  const [obweather, setObWeather] = useState()
  const [loading, setLoading] = useState(true)
  const [temp, setTemp] = useState()
  
const success=(pos)=>{

          setDataApi({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          })

}



useEffect(() => {
  navigator.geolocation.getCurrentPosition(success);

  
}, [])




useEffect(() => {
  if (dataApi) {
    const {lat, lon} = dataApi;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

      axios.get(url)
      .then(res=> {
        setObWeather(res.data);
        const kel=res.data.main.temp;
        const cel=(kel-273.15).toFixed(2);
        const fah=(cel*9/5+32).toFixed(2);
        setTemp({kel:kel,fah:fah});

        
      
  })
      .catch(err=> console.log(err))
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      });
        
        }
}, [dataApi])



  return (
    <div className="app">
      <>
        {
          loading?
          <figure>
            <div class="loader"></div> 
          </figure>
        :
        <Weather
        obj={obweather}
        temp={temp}
        />
        
      }
      </>
    </div>
  )
}

export default App
