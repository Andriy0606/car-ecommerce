import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav>
    <ul className='nav-list'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/catalog">Catalog</Link></li>
      <li><Link to="/cart">Cart</Link></li>
    </ul>
  </nav>
);

export default Navbar;
