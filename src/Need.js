import React from 'react'
import './Need.css';
import pics4 from './image/Image 57.png'
const Need = () => {
    return (
        <div className='run'>
            <div>
              <h1>Everything you need to</h1>
              <h1>run your education business</h1>
              <h1>under one roof</h1>
              <h4>Build your course</h4>
              <p>Easily upload videos, build quizzes, and organize all</p>
              <p>your learning content with our drag and drop builder.</p>
              <p>Set pricing, schedule lessons, and automate your</p>
              <p>content to curate a learning experience your students</p>
              <p>will love.</p>
              <ul>
                  <li>Design your course site. </li>
                  <li> Market and sell.</li>  
                  <li>Support your students.</li>
                  <li>Explore our features.</li>     
              </ul>
            </div>
            <img src={pics4} alt="" />
        </div>
    )
}

export default Need
