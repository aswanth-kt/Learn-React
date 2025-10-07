import React, { useEffect, useState } from 'react'
import './RowPosters.css'
import { baseUrl, imageUrl, API_KEY } from '../../constants/constants'
import axios from '../../axios'
import YouTube from 'react-youtube'

function RowPosters(props) {
  const [movie, setMovie] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState();

  useEffect(() => {
    axios.get(`${ baseUrl + props.url }`).then((response) => {
      console.log(response.data)
      setMovie(response.data.results);
    }).catch((err) => console.log("Error at get img", err))
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  // Get movie key for running trailer
  const handleTrailerVideo = (id) => {
    // console.log(id)
    axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
      console.log(response.data)
      if (response.data.results.length !== 0) {
        setMovieTrailer(response.data.results[0])
      } else {
        console.log("No results")
      }
    }).catch((err) => console.log("Error", err))
  }
  console.log("movieTrailer:", movieTrailer)

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {
            movie.map((item, i) =>
              <img onClick={ () => handleTrailerVideo(item.id) } className={ props.isSmall ? 'samllPoster' : 'poster' } src={movie ? imageUrl + item.backdrop_path : ""} alt="Posters" key={i} />
            )
          }
        </div>
        {movieTrailer && <YouTube videoId={movieTrailer.key} opts={opts} /> }
    </div>
  )
}

export default RowPosters