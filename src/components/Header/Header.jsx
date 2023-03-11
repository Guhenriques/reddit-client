import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to ='/'>
          <img src={logo} />
        </Link>
        <h2>Reddit Redduced</h2>
      </div>
      <div className='search-bar'>
        <input id='search' type="text" placeholder='Search Reddit' name='search'/>
      </div>
    </div>
  )
}



export default Header;