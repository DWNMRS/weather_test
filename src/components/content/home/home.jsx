import React from "react";
import style from "./home.module.scss"
import Item from "./item/item"

const cities = ['Moscow', 'Paris', 'London', 'New York Mills', 'Beijing', 'Tokyo']

async function weather(name) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=cdbce4d308bc616ba3e4378cb758342a`);

    return await response.json()
  } catch (e) {
    return {
      name: 'error'
    }
  }
}
async function testName() {
  let data = [];
  for (let index = 0; index < cities.length; index++) {
    data.push(await weather(cities[index]))
  }
}

testName()


const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.container}>
        <form>
          <input type="search" className={style.searchCity}></input>
        </form>

        <div className={style.cities}>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </div>
      </div>
    </div>
  )
}
export default Home;