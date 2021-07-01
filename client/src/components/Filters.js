import React, { useContext, useState } from 'react';
import globalContext from '../globalContext.js';
import { FilterButton } from './index';

import { dietLabels, healthLabels, allergyLabels, mealTypes, cuisineTypes, dishTypes } from '../utils/labels.js'

const Filters = () => {

    return (
        <div>
            {dietLabels.map(el => 
            <FilterButton data={el}/>)}
            
        </div>
    )
}

export default Filters;
