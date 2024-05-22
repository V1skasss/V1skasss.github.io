import React from 'react';
import './404.css'; 
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
  return (
    <div className="NotFoundContainer">
      <h1>УПС...</h1>
      <h2>Кажется, такой страницы нет</h2>
      <Link to="/" className="HomeButton">ВЕРНУТЬСЯ НА ГЛАВНУЮ</Link>
    </div>
  );
};

export default NotFoundPage;