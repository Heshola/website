import React from 'react'
import './Getstarted.css'
import image from './image/logo.png'
import apple from './image/apple.png'
import search from './image/search.png'
const Getstarted = () => {
    return (
        <div className='text'>
            <img src={image} alt="" />
            <div className='div1'>
                <h3>Let’s get Started</h3>
                <p>Create your Rugwarts account. Have an account?<a href="#">Login</a></p>
                <div className='name'>
                   <div>
                       <div className='mail'>
                           <p>First Name</p>
                           <input class="ni" id="nii" placeholder="Enter your first name"></input>
                           <p>Last Name</p>
                           <input class="ni" id="nii" placeholder="Enter your last name"></input>
                           <p className='num'>Phone Num or Email address</p>
                           <input class="ni" id="nii" placeholder="Enter mobile number or email address"></input>
                           <p>Username</p>
                           <input class="ni" id="nii"></input>
                           <p>Password</p>
                           <input class="ni" id="nii"></input>
                       </div>
                       <div className='agree'>
                          <button className='btn'>Create my account</button>
                          <p>By clicking the “Create My Account” button, you agree to</p>
                          <p>Rugwarts <a href="#">Terms of acceptable use</a> and <a href="#">Privacy Policy</a>.</p>
                       </div>
                   </div>
                   <div className='pop'>
                       <p></p>
                   </div>
                   <p className='line'>OR</p>
                   <div className='ok'>
                       <p></p>
                   </div>
                   <div className='pup'>
                        <div className='sop'>
                           <img src={search} alt="" />Continue with google
                        </div>
                        <div className='pap'>
                            <img src={apple} alt="" />Continue with apple
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Getstarted
