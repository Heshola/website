import React from 'react'
import './Login.css'
import image from './image/logo.png'
import apple from './image/apple.png'
import search from './image/search.png'
const Login = () => {
    return (
        <div className='text'>
            <img src={image} alt="" />
            <div className='div1'>
                <h3>Login Into Your Account</h3>
                <p>New Rugwarts account. Have an account?<a href="#">Sign up</a></p>
                <div className='name'>
                   <div>
                       <div className='mail'>
                           <p>Email Address or Username</p>
                           <input class="ni" id="nii" placeholder="you@example.com"></input>
                           <p>Password</p>
                           <input class="ni" id="nii"></input>
                       </div>
                       <div className='box'>
                          <input type="Checkbox" name="" id="" />Remember me
                           <a href="#">Forgot Password?</a>
                       </div>
                       <button className='btn'>Login to your account</button>
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

export default Login