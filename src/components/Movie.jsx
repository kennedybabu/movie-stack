import React from 'react'

const Movie = ({movie}) => {
  return (
    <div className='w-[200px]'>
      <h3 className='text-[.8rem] ml-1 font-bold mb-1'>{movie.name}</h3>
      <img className="img h-[40vh] rounded-[1rem] w-full mb-[1rem]" src={"https://image.tmdb.org/t/p/w300"+movie.backdrop_path} alt="/" />
    </div>
  )
}

export default Movie