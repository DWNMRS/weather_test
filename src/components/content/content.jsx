import React from "react";
import Home from "./home/home";
import Info from "./info/info";
import History from "./history/history";
import City from "./home/city/city"
import style from "./content.module.scss";
import { Route } from "react-router";


const Container = () => {
  return (
    <div className={style.container}>
      <Route path="/home" component={Home} />
      <Route path="/history" component={History} />
      <Route path="/info" component={Info} />
      <Route path="/city/:city" component={City} />
    </div>
  )
}

export default Container