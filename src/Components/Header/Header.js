import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [collapsed, setCollapse] = useState(false);

  return (
    <div className='Header'>
      {collapsed ? <p>collapsed</p> : <p>not collapsed</p>}
      <button onClick={() => setCollapse(!collapsed)}>Click This!</button>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
