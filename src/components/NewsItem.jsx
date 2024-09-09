import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

const NewsItem = ({ icon, text, link }) => {
  return (
    <div className="news-item">
      <span className="icon">{icon}</span>
      <a href={link}>{text}</a>
    </div>
  );
};

export default NewsItem;
