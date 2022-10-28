import React from 'react';
import './Programs.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

const Programs = () => {
  return (
    <section className="programs" id="programs">
      <div className="programs-header">
        <span className="outline-text">Explore our</span>
        <span>programs</span>
        <span className="outline-text">to shape you</span>
      </div>
      <div className="programs-categories">
        {programsData.map((program, i) => (
          <div className="category" key={i}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="arrow-right" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
