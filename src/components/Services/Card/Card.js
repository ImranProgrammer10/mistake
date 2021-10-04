import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    const {name,image,details} = props.service;
    return (
        <div className="card col-3 mb-3 mx-1 py-2">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{details}</p>
                <NavLink to='/pricing' className="btn btn-primary">Start Now</NavLink>
            </div>
        </div>
    );
};

export default Card;