import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>
        <span className="highlight">Ё</span>ндекс
      </h1>
      <nav>
        <a href="#">Видео</a>
        <a href="#">Картинки</a>
        <a href="#">Новости</a>
        <a href="#">Карты</a>
        <a href="#">Маркет</a>
      </nav>
    </header>
  );
};

export default Header;
