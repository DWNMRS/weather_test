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

  useEffect(() => { getLocalStorageItems()},[])

  return (
    <div className={style.history}>
      {historyCities && historyCities.map((historyItem, index) => (<HistoryItem></HistoryItem>))}
    </div>
  )
}

export default History