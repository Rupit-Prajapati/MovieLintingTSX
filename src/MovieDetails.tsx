// MovieDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id }: any = useParams();

  // Fetch movie details based on the id (you might want to use an API call)

  return (
    <div>
      <h2>Movie Details for ID: {id}</h2>
      {/* Render movie details here */}
    </div>
  );
};

export default MovieDetails;
