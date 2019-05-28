import React, { useState, useEffect } from 'react';
//import ScrollspyNav from './ScrollspyNav';
import Scrollspy from 'react-scrollspy';
import './Header.scss';

const Header = () => {
  let [yPosition, setYposition] = useState(null);
  //const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollPosition);
    // if (window.pageYOffset > 50) {
    //   setScrolled(true);
    // } else {
    //   setScrolled(false);
    // }
    //console.log(scrolled);
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
        <h1>Header</h1>
        <div>
          <section id='section-1'>section 1</section>
          <section id='section-2'>section 2</section>
          <section id='section-3'>section 3</section>
        </div>

        <Scrollspy
          items={['section-1', 'section-2', 'section-3']}
          currentClassName='is-current'
        >
          <li>
            <a href='#section-1'>section 1</a>
          </li>
          <li>
            <a href='#section-2'>section 2</a>
          </li>
          <li>
            <a href='#section-3'>section 3</a>
          </li>
        </Scrollspy>

        <div className='Header__menu' onClick={navToggle}>
          ☰
        </div>
        <ul className='Header__nav'>
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
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
