import { ReactComponent as Sun } from './img/sun.svg'
import { ReactComponent as Moon } from './img/moon.svg'
import { ReactComponent as SunRain } from './img/sunrain.svg'
import { ReactComponent as MoonRain } from './img/moonrain.svg'
import { ReactComponent as SunCloud } from './img/cloudysun.svg'
import { ReactComponent as MoonCloud } from './img/cloudymoon.svg'
import { ReactComponent as Cloud } from './img/clouds(1).svg'
import { ReactComponent as Tornado } from './img/tornado.svg'
import { ReactComponent as Thunderstorm } from './img/thunderstorm.svg'
import { ReactComponent as Drizzle } from './img/Sun cloud angled rain.svg'
import { ReactComponent as Snow } from './img/Big snow.svg'
import { ReactComponent as DarkCloud } from './img/darkcloud.svg'


let icons = [
    { type: '01d', image: <Sun /> },
    { type: '01n', image: <Moon /> },
    { type: '02d', image: <SunCloud /> },
    { type: '02n', image: <MoonCloud /> },
    { type: '03d', image: <Cloud /> },
    { type: '03n', image: <Cloud /> },
    { type: '04d', image: <DarkCloud /> },
    { type: '04n', image: <DarkCloud /> },
    { type: '09d', image: <Drizzle /> },
    { type: '09n', image: <Drizzle /> },
    { type: '10d', image: <SunRain /> },
    { type: '10n', image: <MoonRain /> },
    { type: '11d', image: <Thunderstorm /> },
    { type: '11n', image: <Thunderstorm /> },
    { type: '13d', image: <Snow /> },
    { type: '13n', image: <Snow /> },
    { type: '50d', image: <Tornado /> },
    { type: '50n', image: <Tornado /> },
]

export default icons