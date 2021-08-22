import React from 'react';
import style from '../menu/menu.module.scss';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className={style.menu}>
      <div >
        <NavLink to="/home" className={(style.item) + ' ' + (style.item_home)} activeClassName={(style.item) + ' ' + (style.item_home__active)}>Главная</NavLink>
      </div>
      <div >
        <NavLink to="/history" className={(style.item) + ' ' + (style.item_history)} activeClassName={(style.item) + ' ' + (style.item_history__active)}>История</NavLink>
      </div>
      <div >
        <NavLink to="/info" className={(style.item) + ' ' + (style.item_info)} activeClassName={(style.item) + ' ' + (style.item_info__active)}>О приложении</NavLink>
      </div>
    </div>
  )
}


export default Menu