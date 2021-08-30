import React, { useEffect, useState } from "react";
import icons from '../icons';
import style from "../city/city.module.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const City = () => {
    const [data, setData] = useState(null)
    let { city } = useParams()
    const weather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cdbce4d308bc616ba3e4378cb758342a`)
            .then(res => res.json())
            .then(resJson => {
                getHistoryStore(resJson)
                setData(resJson)
            }
            )
    }
    useEffect(() => {
        weather()
    }, [])

    let renderweather = (type) => {
        console.log(icons)
        console.log(icons.filter(icon => icon.type === type))
        console.log(type)
        console.log(data)
        return icons.filter(icon => icon.type === type)[0].image
    }
    const getHistoryStore = (weatherData) => {

        const history = {
            name: weatherData.name,
            temp: Math.round(weatherData.main.temp),
            time: '11:40'
        }
        let currentHistory = localStorage.getItem('history')
        
        if (!currentHistory) {
            let newHistory = []
            newHistory.push(history)
            localStorage.setItem('history', JSON.stringify(newHistory))
        } else {
            currentHistory = JSON.parse(currentHistory)
            currentHistory.unshift(history)
            if (currentHistory.length > 9 ) {
                currentHistory.pop()
            }
            localStorage.setItem('history', JSON.stringify(currentHistory))
            
        }
    }

    return (
        <>
            {!!data &&
                < div className={style.container} >
                    <Link to={'/home/'}>
                        <div className={style.buttonBack}></div>
                    </Link>
                    <span className={style.name}>{data.name}</span>
                    <span className={style.description}>{data.weather[0].description}</span>
                    <div className={style.weather}>
                        <span className={style.temp}>{Math.round(data.main.temp)}°</span>
                        <div className={style.weatherIcon}>{renderweather(data.weather[0].icon)}</div>
                    </div>

                    <div className={style.pressureWrap}>
                        <div className={style.iconPressure}></div>
                        <span className={style.pressure}>{data.main.pressure}мм рт.ст.</span>
                    </div>


                </div >
            }
        </>
    )
}

export default City