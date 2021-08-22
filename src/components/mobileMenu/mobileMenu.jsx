import React from 'react';
import style from './mobileMenu.module.scss';
import { NavLink } from 'react-router-dom';

const mobileMenu = () => {
  return (
    <div className={style.menu}>
      <div className={style.wrapItem} >
        <NavLink to="/home" className={(style.item) + ' ' + (style.item_home)} activeClassName={(style.item) + ' ' + (style.item_home__active)}></NavLink>
      </div>
      <div className={style.wrapItem} >
        <NavLink to="/history" className={(style.item) + ' ' + (style.item_history)} activeClassName={(style.item) + ' ' + (style.item_history__active)}></NavLink>
      </div>
      <div className={style.wrapItem} >
        <NavLink to="/info" className={(style.item) + ' ' + (style.item_info)} activeClassName={(style.item) + ' ' + (style.item_info__active)}></NavLink>
      </div>
    </div>
  )
}


export default mobileMenu