import React, { useEffect } from 'react';
import { RecipeCard } from './index';

const Cards = ({data}) => {

    useEffect(() => {
        console.log('in cards', data);
    }, [data])

    return (
        <div>
            {
                data ? <div className="cards">{data.map((el, index) => <RecipeCard key={index} data={el.recipe}/>)}</div> : <div>No data!</div>
            }
            
        </div>
    )
}

export default Cards
