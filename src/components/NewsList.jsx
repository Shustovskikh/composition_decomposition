import React from 'react';
import NewsItem from './NewsItem';

const NewsList = () => {
  const news = [
    { icon: '🌍', text: 'Путин и Зеленский решили жить вместе', link: '#' },
    { icon: '🌟', text: 'Конкурс выиграл самый пушистый кот', link: '#' },
    { icon: '🔧', text: 'Самый лучший язык программирования оказался JS', link: '#' },
    { icon: '⚡', text: 'Марсиане решили жить на Венере, а не на Земле', link: '#' },
  ];

  return (
    <div className="news-list">
      {news.map((item, index) => (
        <NewsItem key={index} icon={item.icon} text={item.text} link={item.link} />
      ))}
    </div>
  );
};

export default NewsList;
