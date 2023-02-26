import React from 'react'
import "./Navbar.css"
import {AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser, AiOutlineHome} from "react-icons/ai"
import { Link, useLocation } from "react-router-dom"

function Navbar() {
  let location = useLocation()

  if( location.pathname === "/login" ){
    return <></>
  }

  return (
    <div className='navbar'>
        <Link to={'/'}>
          <h2>Media</h2>
        </Link>
        <input type="search" placeholder='Search...' />
        <ul className='nav__collection'>
          <Link to={'/'} className="nav__item none">
            <AiOutlineHome/>
            <p>Bosh sahifa</p>
          </Link>
          <Link to={'/like'} className="nav__item">
            <AiOutlineHeart/>
            <p>Sevimlilar</p>
          </Link>
          <Link to={'/savatcha'} className="nav__item">
            <AiOutlineShoppingCart/>
            <p>Savatcha</p>
          </Link>
          <Link to={'/login'} className="nav__item">
            <AiOutlineUser/>
            <p>Kirish</p>
          </Link>
        </ul>
    </div>
  )
}

export default Navbar