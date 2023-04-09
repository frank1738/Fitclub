import React from 'react';
import './Services.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-left">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="services-right">
        <span>Some reasons</span>
        <div className="reason-header">
          <span className="outline-text">Why </span>
          <span>Choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="check" />
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt="check" />
            <span>TRAIN FASTER AND SMARTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="check" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="check" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{ color: 'var(--gray)', fontWeight: 'normal' }}>
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="nb" />
          <img src={adidas} alt="adidas" />
          <img src={nike} alt="nike" />
        </div>
      </div>
    </section>
  );
};

export default Services;
