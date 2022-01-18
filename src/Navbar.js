import React from 'react'
import './Navbar.css';
import pics1 from './image/logo.png'
import pics2 from './image/Image 52.png'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <div className='overall'>
                <img src={pics1} alt="" />
                <div className='flex'>
                    <a href="#"><p>Features</p></a>
                    <a href="#"><p>Customers</p></a>
                    <a href="#"> <p>Pricing</p></a>
                    <a href="#"><p>About Us</p></a>
                    <a href="#"><p>Plus</p></a>
                </div>
                <Link to='/Login'><button className='log'>Login</button></Link>
                <Link to='/Getstared'><button className='get'>Get Stared</button></Link>
            </div>
            <div className='new'>
                <div>
                  <h2>Discover new things</h2>
                  <h2>to enrich your skill</h2>
                  <h2>anytime anywhere.</h2>
                  <p>Education makes you discover a mirror</p>
                  <p>purpose and achieve window result.</p>
                  <input class="ni" id="nii" placeholder="you@example.com"></input><button className='start'>Get Started</button>
                </div>
                <img src={pics2} alt="" />
            </div>
        </div>
    )
}

export default Navbar
