import React from "react";
import style from "../historyItem/historyItem.module.scss"

export const HistoryItem = ({children}) => {
  return (
    <div className={style.item}>
        {children}
    </div>
  )
}

export default HistoryItem