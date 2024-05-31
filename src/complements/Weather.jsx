import React, { useState } from 'react'

const Weather = ({obj,temp}) => {

        const [conver, setComver] = useState(true);
        const [icon, setIcon] = useState("°C")
      
      const handleConver = () => {
                if (conver) {
                  setIcon("°C")
                }else{
                  setIcon("°F")
                }
                setComver(!conver)
          }
          
    return (
    <div className='content_1'>
        <h1>Weather App</h1>
        <h3>{obj?.name}, {obj?.sys.country}</h3>
        <h3>{obj?.weather[0].description}</h3>
        

        <div className='content_2'>
                
        
        
        <div >
                <img src={`https://openweathermap.org/img/wn/${obj?.weather[0].icon}@2x.png`} alt="" />
        </div>

        <div>
                <h4>Wind Speed</h4>
                <h4>Clouds</h4>
                <h4>Pressure</h4>
        </div>

        <div>
                <h5>{obj?.wind.speed}m/s</h5>
                <h5>{obj?.clouds.all}%</h5>
                <h5>{obj?.main.pressure}hPa</h5>
        </div>
        </div>

        {
        conver? <div>{temp?.kel}°</div>
        :
        <div>{temp?.fah}°</div>
        }
        <div>
        <button onClick={handleConver}>Change to{icon} </button>
        </div>
    </div>
  )
}

export default Weather