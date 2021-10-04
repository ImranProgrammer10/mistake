import React, { useEffect, useState } from 'react';
import Card from './Card/Card';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./tools.JSON')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className='mx-3 m-auto'>
        <h1>Our Services</h1>
        <div className='row d-flex justify-content-center px-2'>
         {
          services.map(service => <Card service={service}></Card>)
         }
        </div>
       </div>
    );
};

export default Services;