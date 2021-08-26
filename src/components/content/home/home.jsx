import React, { useEffect, useState } from "react";
import style from "./home.module.scss"
import Item from "./item/item"
import icons from "./icons"




const Home = () => {

  const [data, setData] = useState([])
  const cities = ['Moscow', 'Paris', 'London', 'New York Mills', 'Beijing', 'Tokyo']
  const weather = () => {

    const weatherData = []
    const promises = []
    cities.forEach(cityName => {

      promises.push(
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=cdbce4d308bc616ba3e4378cb758342a`)
          .then(res => res.json())
          .then(resJson => {
            console.log(resJson)
            const weatherCityInfo = {}
            weatherCityInfo.name = resJson.name
            weatherCityInfo.temp = Math.round(resJson.main.temp)
            weatherCityInfo.weatherMain = resJson.weather[0].icon
            weatherData.push(weatherCityInfo)
          }
          )
      )
    })
    
    Promise.all(promises).then(res => setData(weatherData))
    
  }

  useEffect(() => {
    weather()
  }, [])

  let renderweather =(type) => {
   return icons.filter(icon => icon.type === type)[0].image
  }



  return (
    <div className={style.home}>
      <div className={style.container}>
        <form>
          <input type="search" className={style.searchCity} placeholder="Укажите город"></input>
        </form>

        <div className={style.cities}>
          {data.map((city, index) => (
            <Item key={`weather_${index}`}>
              <span className={style.cityName}>{city.name} </span>
              <span className={style.cityTemp}>{city.temp}°</span>
              <div className={style.cityWeather}>{renderweather(city.weatherMain)}</div>
            </Item>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;