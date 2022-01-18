import React from 'react'
import './Online.css';
import pics5 from './image/Image 56.png'
const Online = () => {
    return (
        <div className='Online'>
            <h1>Online Courses</h1>
            <div className='our'>
                <div className='using'>
                    <p>30,000+</p>
                    <p>Course Creators</p>
                    <p>80 million+</p>
                    <p>Courses taken</p>
                    <p>130+</p>
                    <p>Countries using Rugwarts</p>
                    <p>$600 million+</p>
                    <p>Earned by our course creators</p>
                </div>
                <img src={pics5} alt="" />
            </div>
        </div>
    )
}

export default Online
