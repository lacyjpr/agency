import React, { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import './Header.scss';

const Header = () => {
  let [yPosition, setYposition] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', scrollPosition);
    return () => {
      window.removeEventListener('scroll', scrollPosition);
    };
  });

  const scrollPosition = () => {
    console.log(window.pageYOffset);
    setYposition((yPosition = window.pageYOffset));
    console.log(yPosition);
  };

  const navToggle = () => {
    let collapse = document.querySelector('.Header__nav');
    collapse.style.display === 'block'
      ? (collapse.style.display = 'none')
      : (collapse.style.display = 'block');
  };

  return (
    <div>
      <div className='Header'>
        <div>Header</div>
        <div className='Header__menu' onClick={navToggle}>
          ☰
        </div>
        <div className='Header__nav'>
          <Scrollspy
            items={[
              'services',
              'portfolio',
              'about',
              'team',
              'users',
              'contact',
              'footer',
            ]}
            currentClassName='nav__item--active'
            className='nav__inner'
            style={{
              fontWeight: 300,
            }}
            offset={-440}
            onUpdate={el => {
              console.log(el);
            }}
          >
            <li className='Header__nav--link'>
              <a href='#hero'> </a>
            </li>
            <li className='Header__nav--link'>
              <a href='#services'>Services</a>
            </li>
            <li className='Header__nav--link'>
              <a href='#portfolio'>Portfolio</a>
            </li>
            <li className='Header__nav--link'>
              <a href='#about'>About</a>
            </li>
            <li className='Header__nav--link'>
              <a href='#team'>Team</a>
            </li>
            <li className='Header__nav--link'>
              <a href='#users'>Users</a>
            </li>
            <li className='Header__nav--link'>
              <a href='#contact'>Contact</a>
            </li>
          </Scrollspy>
        </div>
      </div>
    </div>
  );
};

export default Header;
