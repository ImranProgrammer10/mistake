import React from 'react';
import { NavLink } from 'react-router-dom';
const Pricing = () => {
    return (
        <div className='container'>
            <div className="card-group d-flex fw-bolder">
  <div className="card m-2 col-3 border text-white bg-dark">
    
    <div className="card-body">
      <h1 className="card-title text-warning">BILLED MONTHLY</h1>
      <h3 className="card-text">Advanced Plan</h3>
      <h2>$140</h2>
      <ul className='text-start'>
          <li>CUSTOM</li>
          <li>OUTSTANDING</li>
          <li>HAPPY CUSTOMER</li>
      </ul>
      <NavLink to='/contact' type="button" className="btn btn-outline-warning">PURCHASE</NavLink>
    </div>
  </div>
  <div className="card m-2 col-3 border text-white bg-dark">
    
    <div className="card-body">
      <h1 className="card-title text-warning">BILLED MONTHLY</h1>
      <h3 className="card-text">Basic Plan</h3>
      <h2>$120</h2>
      <ul className='text-start'>
          <li>CUSTOM</li>
          <li>OUTSTANDING</li>
          <li>HAPPY CUSTOMER</li>
      </ul>
      <NavLink to='/contact' type="button" className="btn btn-outline-warning">PURCHASE</NavLink>
    </div>
  </div>
  <div className="card m-2 col-3 border text-white bg-dark">
    
    <div className="card-body">
      <h1 className="card-title text-warning">BILLED MONTHLY</h1>
      <h3 className="card-text">Beginner Plan</h3>
      <h2>$90</h2>
      <ul className='text-start'>
          <li>CUSTOM</li>
          <li>OUTSTANDING</li>
          <li>HAPPY CUSTOMER</li>
      </ul>
      <NavLink to='/contact' type="button" className="btn btn-outline-warning">PURCHASE</NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default Pricing;