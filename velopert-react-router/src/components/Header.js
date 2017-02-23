import React from 'react';
import './Header.css';

const MenuItem = ({active, children, to}) => (
  <div className="menu-item">
    {children}
  </div>
);

const Header = () => {
  return (
    <div>
      <div className="logo">
        velopert
      </div>
      <div className="menu">
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Posts</MenuItem>
      </div>
    </div>
  );
};

export default Header;
