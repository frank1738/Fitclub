import React from 'react';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import './Payment.css';

const Payment = () => {
  return (
    <section className="payment-plans" id="plans">
      <div className="blurr payments-blurr-1"></div>
      <div className="blurr payments-blurr-2"></div>
      <div className="programs-header">
        <span className="outline-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="outline-text">WITH US</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="tick" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See More Benefits -></span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Payment;
