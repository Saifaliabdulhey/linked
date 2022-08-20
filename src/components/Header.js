import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <Link to='/linked'><img src={logo}/></Link>
        <div className='links'>
          <Link to='/landing'><p>Home</p></Link>  
            <p>New</p>
            <a href='https://www.carshelpingamerica.org/'><p>Know more</p></a>  
        </div>
    </div>
  )
}

export default Header