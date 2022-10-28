import React, { useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const transition = { type: 'tween', duration: 2 };
  const [selected, setSelected] = useState(0);
  const dataLength = testimonialsData.length;
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-left">
        <span>Testimonials</span>
        <span className="outline-text">What they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: 'var(--orange)' }}>
            {testimonialsData[selected].name}
          </span>{' '}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="testimonials-right">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt="testimonial"
        />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(dataLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt="arrow"
          />
          <img
            onClick={() => {
              selected === dataLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt="arrow"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
