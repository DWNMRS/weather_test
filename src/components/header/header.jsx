import React from 'react';
import Menu from '../header/menu/menu';
import style from '../header/header.module.scss';
import logo from './img/logo.svg';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={logo} className={style.img} alt="logo" />WeatherCheck
      </div>
      <Menu />
    </header>
  )
}

export default Header
