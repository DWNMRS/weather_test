import React from "react";
import style from "../item/item.module.scss"

export const Item = ({ children }) => {
  return (
    <div className={style.item}>
      {children}
    </div>
  )
}

export default Item