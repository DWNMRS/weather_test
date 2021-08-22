import React from 'react';
import './App.scss';
import './reset.css';
import Header from "./components/header/header";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import MobileMenu from './components/mobileMenu/mobileMenu';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <Content />
        <Footer />
        <MobileMenu />
      </div>
    </BrowserRouter>
  );
}

export default App;
