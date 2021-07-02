import React from 'react';
import { FilterButton } from './index';

import {
  dietLabels,
  healthLabels,
  allergyLabels,
  mealTypes,
  cuisineTypes,
} from '../utils/labels.js';

const Filters = ({ setOpen }) => {
  return (
    <div className='filters'>
      <div className='filters__content'>
        <button
          className='close__button'
          onClick={() => {
            setOpen(false);
          }}>
          <i className="fas fa-times"></i>
        </button>
        <div className="filters__group">
          <p>Health</p>
          {dietLabels.map(el => (
            <FilterButton key={el.label} data={el} />
          ))}
        </div>
        <div className="filters__group">
          <p>Diet</p>
          {healthLabels.map(el => (
            <FilterButton key={el.label} data={el} />
          ))}
        </div>

        <div className="filters__group">
          <p>Allergy</p>
          {allergyLabels.map(el => (
            <FilterButton key={el.label} data={el} />
          ))}
        </div>
        <div className="filters__group">
          <p>Cuisine</p>
          {cuisineTypes.map(el => (
            <FilterButton key={el.label} data={el} />
          ))}
        </div>
        <div className="filters__group">
          <p>Meal</p>
          {mealTypes.map(el => (
            <FilterButton key={el.label} data={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
