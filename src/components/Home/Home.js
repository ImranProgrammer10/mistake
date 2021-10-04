import React from 'react';
import { NavLink } from 'react-router-dom';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Service />
            <NavLink to='/services' type="button" className="btn btn-outline-secondary px-4 py-2 text-1">See More</NavLink>
        </div>
    );
};

export default Home;