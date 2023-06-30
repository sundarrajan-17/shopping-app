import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {

  return (
    <>
    <div className='Header'>
        <h1>Shopping App</h1>
        <form>
            <input type="text" placeholder='Search Here'/>
        </form>
        <Link to="/cart" className='headerbtn'><i className="fa fa-cart-shopping"></i></Link>
    </div>
    </>
  )
}

export default Header