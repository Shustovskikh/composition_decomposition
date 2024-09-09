import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Найдётся всё. Например, что лучше PY или JS" />
      <button>Найти</button>
    </div>
  );
};

export default SearchBar;
