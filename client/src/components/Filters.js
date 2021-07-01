import React from 'react';
import { FilterButton } from './index';

import {
  dietLabels,
  healthLabels,
  allergyLabels,
  mealTypes,
  cuisineTypes,
} from '../utils/labels.js';

const Filters = () => {
  return (
    <div>
      <p>Diet</p>
      {dietLabels.map(el => (
        <FilterButton key={el.label} data={el} />
      ))}
      <p>Health</p>
      {healthLabels.map(el => (
        <FilterButton key={el.label} data={el} />
      ))}
      <p>Allergy</p>
      {allergyLabels.map(el => (
        <FilterButton key={el.label} data={el} />
      ))}
      <p>Cuisine</p>
      {cuisineTypes.map(el => (
        <FilterButton key={el.label} data={el} />
      ))}
      <p>Meal</p>
      {mealTypes.map(el => (
        <FilterButton key={el.label} data={el} />
      ))}
    </div>
  );
};

export default Filters;
