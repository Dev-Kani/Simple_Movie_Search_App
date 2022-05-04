import React from 'react'

const MovieList = (props) => {
    const { movies } = props

    return (
        <>
            {movies.map((movie, index, Title) => (
                <div className='img-container' key={index}>
                    <div className='movie-card-container'>
                        <img src={movie.Poster} alt="" />
                        <p>{movie.Title} ({movie.Year})</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MovieList