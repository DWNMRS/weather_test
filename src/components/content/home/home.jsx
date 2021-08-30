import React, { useEffect, useState } from "react";
import style from "./home.module.scss";
import Item from "./item/item";
import icons from "./icons";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";




const Home = () => {
  const history = useHistory();
  const [data, setData] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [suggestCities, setSuggestCities] = useState([])
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

  const renderWeather = (type) => {
    const icon = icons.filter(icon => icon.type === type)[0]
    if (!!icon) {
      return icon.image
    }
    return null
  }

  const handleInput = (e) => {
    setSuggestCities([])
    const currentInputValue = e.target.value
    if (currentInputValue.length >= 3) {
      cities.forEach(cityName => {
        const cityNameLower = cityName.toLowerCase()
        const indexOfCurrentInputValue = cityNameLower.indexOf(currentInputValue.toLowerCase())
        console.log(indexOfCurrentInputValue)
        if (indexOfCurrentInputValue === 0) {
          setSuggestCities(prev => {
            const isCityExist = prev.indexOf(cityName) !== -1
            if (!isCityExist) { prev.push(cityName) }
            return prev
          })
        }
      })
    }
    setInputValue(currentInputValue)
  }

  return (
    <div className={style.home}>
      <div className={style.container}>
        <form className={style.form} onSubmit={()=>history.push(`/city/${suggestCities[0]}`)}>
          <input value={inputValue} onInput={(e) => handleInput(e)} type="search" className={style.searchCity} placeholder="Укажите город"></input>
          {suggestCities.length > 0 &&
            <ul className={style.suggest}>
              {suggestCities.map((cityName, index) => (
                <li className={style.suggestCity} key={`${cityName}_${index}`}>
                  <Link className={style.suggestLink} to={`/city/${cityName}`}>{cityName}</Link>
                </li>
              ))}
            </ul>
          }

        </form>

        <div className={style.cities}>
          {!!data && data.map((city, index) => (
            <Link key={`weather_${index}`} to={`/city/${city.name}`}>
              <Item >
                <span className={style.cityName}>{city.name} </span>
                <span className={style.cityTemp}>{city.temp}°</span>
                <div className={style.cityWeather}>{renderWeather(city.weatherMain)}</div>
              </Item>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;