import React from 'react';
import { SearchBar } from '../components';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Eat <span className="brand">Healthier</span> than yesterday.</h1>
            <SearchBar/>
        </div>
    )
}

export default HomePage;
