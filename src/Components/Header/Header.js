import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
  const [collapsed, setCollapse] = useState(false);
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

  useEffect(() => {
    windowWidth();
    window.addEventListener('resize', windowWidth);
    return () => {
      window.removeEventListener('resize', windowWidth);
    };
  }, []);

  const windowWidth = () => {
    console.log(window.innerWidth);
  };

  return (
    <div className='Header'>
      {collapsed ? <p>collapsed</p> : <p>not collapsed</p>}
      <button onClick={() => setCollapse(!collapsed)}>Click This!</button>
      <p>Scroll Position {yPosition}</p>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
