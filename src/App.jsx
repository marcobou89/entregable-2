
import { useEffect, useRef, useState } from 'react';
import './App.css'
import axios, { Axios, AxiosError, AxiosHeaders } from 'axios';
import Weather from './complements/Weather';


function App() {

  const [contry, setContry] = useState()
  const [errLocation, setErrLocation] = useState()
  const [dataApi, setDataApi] = useState()
  const [obweather, setObWeather] = useState()
  const [loading, setLoading] = useState(true)
  const [temp, setTemp] = useState()
  
  const key ='2d998b1621b3adfa3929d70e8efd21df';
  


useEffect(() => {
  navigator.geolocation.getCurrentPosition(success,error);

  
}, [])

const success=(pos)=>{

  setDataApi({
    lat: pos.coords.latitude,
    lon: pos.coords.longitude,
  })


}
function error(err) {
setErrLocation(true);
}



useEffect(() => {
  if (dataApi) {
    
    const {lat, lon} = dataApi;
  
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
    
  

      axios.get(url)
      .then((res)=> {
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


const textInput = useRef()

const handleText = (event) => {
  event.preventDefault();
  setContry(textInput.current.value.trim().toLowerCase());
  setDataApi(null)
  textInput.current.value =""
}
console.log(contry);


  useEffect(() => {
    if (contry) {
    
      
   const url2= `https://api.openweathermap.org/data/2.5/weather?q=${contry}&appid=${key}`
    axios.get(url2)
      .then((res)=> {
console.log(res.data);
        setDataApi(res.data.coord)
   
  })
      .catch(err=> console.log(err))
}
  }, [contry])
  
 




  return (

    <div className="app">
          
          <div className='content_app' >
          {
            errLocation? <h1>The application cannot work, allow geolocation access to access the application</h1> 
            :
            <>
            {
              loading?
              <figure>
                <div className="loader"></div> 
              </figure>
              : 
              <>
            <Weather
            obj={obweather}
            temp={temp}
          />
          <form onSubmit={handleText}>
            <input ref={textInput} type="text" placeholder='Ingresa una ciudad...' />
            <button>Search</button>
          </form>
          </>
          } 
        </>
          }

      </div>
    </div>
  )
}

export default App
