import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';

const Header = () => {
  const [menu, openMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
      <img src={Logo} alt="logo" className="logo" />
      {menu === false && width === true ? (
        <div
          style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px',
          }}
          onClick={() => openMenu(true)}
        >
          <img
            src={Bars}
            alt="menu"
            style={{ width: '1.5rem', height: '1.5rem' }}
          />
        </div>
      ) : (
        <ul className="nav-list">
          <li>
            <Link
              to="home"
              span={true}
              smooth={true}
              onClick={() => openMenu(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              span={true}
              smooth={true}
              onClick={() => openMenu(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="services"
              span={true}
              smooth={true}
              onClick={() => openMenu(false)}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              span={true}
              smooth={true}
              onClick={() => openMenu(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              span={true}
              smooth={true}
              onClick={() => openMenu(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
