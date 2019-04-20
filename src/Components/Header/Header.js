import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
  const [collapsed, setCollapse] = useState(true);
  const [yPosition, setYposition] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', scrollPosition);
    return () => {
      window.removeEventListener('scroll', scrollPosition);
    };
  }, []);

  const scrollPosition = () => {
    console.log(window.pageYOffset);
    setYposition(window.pageYOffset);
  };

  const navToggle = () => {
    let collapse = document.querySelector('.Header__nav');
    collapse.style.display === 'block'
      ? (collapse.style.display = 'none')
      : (collapse.style.display = 'block');
  };

  return (
    <div className='Header'>
      {collapsed ? <p>collapsed</p> : <p>not collapsed</p>}
      <button onClick={() => setCollapse(!collapsed)}>Click This!</button>
      <p>Scroll Position {yPosition}</p>
      <h1>Header</h1>
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
  );
};

export default Header;
