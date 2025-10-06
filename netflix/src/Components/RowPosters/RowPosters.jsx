import React, { useEffect, useState } from 'react'
import './RowPosters.css'
import { baseUrl, imageUrl } from '../../constants/constants'
import axios from '../../axios'
import YouTube from 'react-youtube'

function RowPosters(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(`${ baseUrl + props.url }`).then((response) => {
      // console.log(response.data)
      setMovie(response.data.results);
    }).catch((err) => console.log("Error at get img", err))
  })

  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {
            movie.map((item, i) =>
              <img className={ props.isSmall ? 'samllPoster' : 'poster' } src={movie ? imageUrl + item.backdrop_path : ""} alt="Posters" key={i} />
            )
          }
        </div>
        <YouTube videoId="2g811Eo7K8U" opts={opts} />
    </div>
  )
}

export default RowPosters