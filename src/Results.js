import React, { useState, useEffect } from 'react'
import "./Results.css"
import axios from './axios';
import VideoCard from './VideoCard'
import FlipMove from 'react-flip-move';


function Results({ selectedOption }) {
    const [movies, SetMovies] = useState([]);

    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(selectedOption);
            SetMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [selectedOption]);

    return (
        <div className="results">
            <FlipMove >
            {movies.map((movie) => (
                <VideoCard key={movie.id} movie={movie} />
            ))}
            </FlipMove>
        </div>
    );
}

export default Results
