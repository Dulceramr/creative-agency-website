import React from 'react';
import './FilterBar.scss';

const FilterBar = ({ categories, activeFilter, onFilterChange }) => {
  return (
    <div className="filter-bar">
      <div className="filter-bar__container">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-bar__button ${
              activeFilter === category.id ? 'filter-bar__button--active' : ''
            }`}
            onClick={() => onFilterChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;