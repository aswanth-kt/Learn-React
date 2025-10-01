import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className="content">
            <h1 className="title">Movie Name</h1>
            <div className="bannerButtuns">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className='description'>
                dummy or placeholder text commonly used in graphic design, publishing, and web development
            </h1>
        </div>
        <div className="fadeBottom"></div>
    </div>
  )
}

export default Banner