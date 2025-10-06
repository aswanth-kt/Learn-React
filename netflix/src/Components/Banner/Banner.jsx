import React from 'react'
import './Banner.css'
import { useEffect, useState } from 'react';
import axios from '../../axios';
import { API_KEY, baseUrl, imageUrl } from '../../constants/constants';

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      // console.log(response.data)
      setMovie(response.data.results[1])
    })
  }, [])
  // console.log("Movie:", movie)
  
  return (
    <div 
    style={{backgroundImage:`url(${ movie? imageUrl+movie.backdrop_path : "" })`}}    //BG Img
    className='banner' >
        <div className="content">
            <h1 className="title"> {movie ? movie.title : ""} </h1>
            <div className="bannerButtuns">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className='description'>
                {movie ? movie.overview : ""}
            </h1>
        </div>
        <div className="fadeBottom"></div>
    </div>
  )
}

export default Banner