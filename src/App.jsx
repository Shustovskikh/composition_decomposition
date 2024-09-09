import React from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import TVProgram from './components/TVProgram';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <NewsList />
      <Weather />
      <TVProgram />
    </div>
  );
};

export default App;
