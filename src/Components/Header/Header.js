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
    //fadeToggle();
  };

  // const fadeToggle = () => {
  //   let className = 'Header';
  //   //let fade = document.querySelector('.Header');
  //   yPosition > 100 ? (className = 'Scrolled') : (className = 'Header');

  //   //? (fade.style.backgroundColor = 'white')
  //   //: (fade.style.backgroundColor = 'gray');
  // };

  const navToggle = () => {
    let collapse = document.querySelector('.nav');
    collapse.style.display === 'block'
      ? (collapse.style.display = 'none')
      : (collapse.style.display = 'block');
  };

  let className = 'Header';
  yPosition > 100 ? (className = 'Header Scrolled') : (className = 'Header');
  return (
    <div>
      <div className={className}>
        <div className='title'>Header</div>
        <div className='menu' onClick={navToggle}>
          ☰
        </div>
        <div className='nav'>
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
            offset={-380}
            onUpdate={el => {
              console.log(el);
            }}
          >
            <li className='fakeLink'>
              <a href='#hero'> </a>
            </li>
            <li className='link'>
              <a href='#services'>Services</a>
            </li>
            <li className='link'>
              <a href='#portfolio'>Portfolio</a>
            </li>
            <li className='link'>
              <a href='#about'>About</a>
            </li>
            <li className='link'>
              <a href='#team'>Team</a>
            </li>
            <li className='link'>
              <a href='#users'>Users</a>
            </li>
            <li className='link'>
              <a href='#contact'>Contact</a>
            </li>
          </Scrollspy>
        </div>
      </div>
    </div>
  );
};

export default Header;
