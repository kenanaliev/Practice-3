import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='nav'>
        <div className="title">
            <h2><a href="">Nitro.</a></h2>
        </div>  

        <div className="list">
           <ul className='common'>
           <li><Link to="/">Home</Link></li>
            <li><a href="">About Us</a>
                   <ul className='about'>
                    <li><a href="">Team</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">More links</a>
                      <ul className='more'>
                           <li><a href="">Menu one</a></li>
                           <li><a href="">Menu two</a></li>
                           <li><a href="">Menu three</a></li>
                      </ul>
                    </li>
                   </ul>
            </li>
            <li><Link to="/add">Add</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Blog</a></li>

            <li><a href="">Contact</a></li>
           </ul>
        </div>
    </nav>
  )
}

export default Navbar