import React from 'react';
import logo from '../../logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';
import { HiOutlineSearch } from "react-icons/hi";


const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to ='/'>
          <img src={logo} />
        </Link>
        <p>RedditMinimal</p>
      </div>
      <div className='search'>
        <div className='searchInputs'>
          <input type="text" placeholder='Search..' name='search'/>
          <div className='searchIcon'>
            <HiOutlineSearch />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;