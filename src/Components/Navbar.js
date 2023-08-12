import React from 'react';
import '../Styles/Navbar.style.css';
import { Link } from 'react-router-dom';
import Logo from './LOGO.jpg';
import Search from './Search.svg';

function Navbar() {


  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
            <img src={Logo} alt='logo'></img>
        </Link>
      </div>
      <ul className='nav-links-dropdown'>
        <li className="dropdown">
          <a href="#">Courses &#709;</a>
          <ul className="dropdown-content">
            <li><Link href="#">Course 1</Link></li>
            <li><Link href="#">Course 2</Link></li>
            <li><Link href="#">Course 3</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#">Programs &#709;</a>
          <ul className="dropdown-content">
            <li><Link href="#">Program 1</Link></li>
            <li><Link href="#">Program 2</Link></li>
            <li><Link href="#">Program 3</Link></li>
          </ul>
        </li>
      </ul>
      <ul className='nav-links'>
        <li><Link href="#"><img src={Search} alt='search'></img></Link></li>
        <li><Link href="#">Log in</Link></li>
        <li><button className='join-btn' href="#">Join Now</button></li>       
      </ul>
    </nav>
  );
}

export default Navbar;
