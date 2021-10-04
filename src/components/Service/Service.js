 import React, { useEffect, useState } from 'react';
 import './service.css'
 
 const Service = () => {
    const [service, setService] = useState([]);
  

    useEffect(() => {
      fetch('./tools.JSON')
        .then((res) => res.json())
        .then((data) => setService(data));
    }, []);
 
     return (
         <div className="service-container">
             <h1> Our Service  </h1>
             <div className="service">
                 <div className="row">
                     {
                         service.slice(0,3).map(service=>(
                            <div className="col-md-4">
                            <div className="cart">
                                <div className="logo-image">
                                    <img className="size" src={service.image} alt="" />
                                </div>
                                <div>
                                    <h1 className="card-title">{service.name}</h1>
                                    <p>{service.details}</p>
                                </div>
                               

                            </div>
                        </div>

                         )
                          
                         )
                     }
                 </div>
             </div>
         </div>
     );
 };
 
 export default Service;