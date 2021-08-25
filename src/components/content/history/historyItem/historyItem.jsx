import React from "react";
import style from "../historyItem/historyItem.module.scss"

export const HistoryItem = () => {
  return (
    <div className={style.item}>
        <span className={style.time}></span>
        <span className={style.city}></span>
        <span className={style.temp}></span>
    </div>
  )
}

export default HistoryItem