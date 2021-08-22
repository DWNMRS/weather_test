import React from "react";
import style from "../item/item.module.scss"

const Item =(props) => {
  return(
    <div className={style.item}>
      <p className={style.city}></p>
      <p className={style.weather}></p>
    </div>
  )
}

export default Item