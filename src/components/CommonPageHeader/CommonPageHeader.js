import React from 'react';
import { Link } from 'react-router-dom';

const CommonPageHeader = ({ title, subtitle}) => {
   return (
      <>
         <section className="page__title p-relative d-flex align-items-center fix" style={{ background: `url(assets/img/41.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="slider__shape">
               <img className= "shape triangle"  src="assets/img/icon/slider/triangle.png" alt="triangle" />
               <img className="shape dotted-square" src="assets/img/icon/slider/dotted-square.png" alt="dotted-square" />
               <img className="shape solid-square" src="assets/img/icon/slider/solid-square.png" alt="solid-square" />
               <img className="shape circle-2" src="assets/img/icon/slider/circle.png" alt="circle" />
            </div>
            <div className="container p-relative">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="page__title-content mt-100">
                        <h2>{title}</h2>
                      
                              {/* <li className="breadcrumb-item"><Link to="/">Home</Link></li> */}
                              <p style={{color:"white",fontSize:"20px"}}><big></big>{subtitle}</p>
                        
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CommonPageHeader;
