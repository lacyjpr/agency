import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
  const [collapsed, setCollapse] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollSpy);
  });

  const scrollSpy = () => {
    console.log('working');
    console.log(window.pageYOffset);
  };

  return (
    <div className='Header'>
      {collapsed ? <p>collapsed</p> : <p>not collapsed</p>}
      <button onClick={() => setCollapse(!collapsed)}>Click This!</button>
      <h1>Header</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Header;
