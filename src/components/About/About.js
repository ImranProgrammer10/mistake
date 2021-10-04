import React from 'react';
import {NavLink} from 'react-router-dom';
import aboutImg from '../../images/about.jpg';
const About = () => {


 return (
  <div>
   <div className='container'>
    <h1>About <strong className='pulse'>who we are...</strong></h1>
     <div className='row justify-content-center align-items-center'>
      <div className='col-lg-5 col-md-6 order-1 order-md-2 mt-2'>
       <img src={aboutImg} className='img-fluid' alt=''/>
      </div>
      <div className='col-lg-5 col-md-6 order-2 order-md-1 mt-2'>
       <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet numquam cum voluptates cumque molestiae sunt maxime inventore facere ex dolores repellat, in natus labore soluta. Deserunt nam quidem quasi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo hic fugit asperiores delectus omnis. Facere nemo quisquam iusto explicabo est dolores id. Nostrum incidunt quis cum beatae, ad itaque doloremque?</h4>
      </div>
      <div className='col-lg-10 order-3'>
       <NavLink className='btn btn-secondary fs-3 px-4 py-2 my-3' to='/contact'>Contact Us</NavLink>
      </div>
     </div>
    </div>
  </div>
 )

}
export default About;