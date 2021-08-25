import React from "react";
import style from "./history.module.scss"
import HistoryItem from "./historyItem/historyItem"

const History=() => {
  return (
    <div className={style.history}>
      <HistoryItem></HistoryItem>
    </div>
  )
}

 export default History