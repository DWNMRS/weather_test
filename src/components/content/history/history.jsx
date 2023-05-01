import React, { useEffect } from "react";
import { useState } from "react";
import style from "./history.module.scss"
import HistoryItem from "./historyItem/historyItem"

const History = () => {

  const [historyCities, setHistoryCities] = useState([]);

  const getLocalStorageItems = () => {
    let newItem = localStorage.getItem('history')
    newItem = JSON.parse(newItem)
    setHistoryCities(newItem)
  }

  useEffect(() => { getLocalStorageItems() }, [])

  return (
    <div className={style.history}>
      <div className={style.historyItems}>
        {historyCities && historyCities.map((historyItem, index) => (
          <HistoryItem key={`historyCity_${index}`}>
            <div className={style.historyItemBlock}>
              <span className={style.time}>{historyItem.time}</span>
              <span className={style.name}>{historyItem.name}</span>
            </div>
            <div>
              <span className={style.temp}>{historyItem.temp}°</span>
            </div>
          </HistoryItem>))}
      </div>
    </div>
  )
}

export default History