import React from 'react'

const MovieList = (props) => {
    const { movies } = props


    return (
        <>
            {movies.map((movie, index, Title) => (
                <div className='img-container' key={index}>
                    <img src={movie.Poster} alt={Title} />
                </div>
            ))}
        </>
    )
}

export default MovieList