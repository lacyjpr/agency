import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
  const [collapsed, setCollapse] = useState(false);

  // useEffect(() => {
  //   console.log(document.body.scrollTop);
  // });

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
