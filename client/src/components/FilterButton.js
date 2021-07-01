import React, { useContext, useState } from 'react';
import globalContext from '../globalContext';

const FilterButton = ({data}) => {
    const {filters, setFilters} = useContext(globalContext);
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        const status = !isActive;
        setIsActive(status);
        if (status) {
            setFilters([...filters, data]);
        } else {
            const newFilters = filters.filter(el => el.label !== data.label);
            setFilters(newFilters);
        }

    }

    return (
        <button className={`filter-button ${isActive ? 'active' : ''}`} onClick={handleClick}>{data.webLabel}</button>
    )
}

export default FilterButton
