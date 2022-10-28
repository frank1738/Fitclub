import React from 'react';
import './Headline.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import NumberCounter from 'number-counter';
import Heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import { motion } from 'framer-motion';

const Headline = () => {
  const transition = { type: 'tween', duration: 3 };
  const width = window.innerWidth <= 768 ? true : false;
  return (
    <section className="headline" id="home">
      <div className="blurr header-blurr"></div>
      <div className="headline-left">
        <Header />
        <div className="ad">
          <motion.div
            initial={{ left: width ? '178px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={transition}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        <div className="headline-text">
          <div>
            <span className="outline-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className="description">
            <span>
              In here we will help you build and shape your ideal body and live
              up your life to fullest
            </span>
          </div>
        </div>
        <div className="numbers">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" prefix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" prefix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="4" prefix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="headline-btns">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="headline-right">
        <button className="btn">Join Now</button>
        <motion.div
          className="heart-rate"
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
        >
          <img src={Heart} alt="heart-beat" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={hero_image} alt="gym_image" className="hero-img" />
        <motion.img
          src={hero_image_back}
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          alt="gym_image"
          className="hero-img-back"
        />
        <motion.div
          className="calories"
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
        >
          <img src={calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Headline;
