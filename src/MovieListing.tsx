import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardMedia, CardContent, Typography, CardActions, Stack, Button, CircularProgress, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

interface Movie {
  imdbID: number;
  Title: string;
  Poster: string;
  Year: string;
  Type: string;
}

const MovieListing = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('Harry Potter');
  let delayTimer: NodeJS.Timeout | null = null; // Declare delayTimer using 'let' instead of 'const'

  const apikey = '7fcae804';
  const url = 'http://www.omdbapi.com/';

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}?apikey=${apikey}&s=${search}`);
      setData(response.data.Search || []); // Ensure the Search property exists; otherwise, default to an empty array
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  const delay = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    const inputValue = e.target.value;

    if (inputValue.length === 0) {
      setSearch('Harry Potter');
    } else {
      setLoading(true )
      if (delayTimer) {
        clearTimeout(delayTimer);
      }
      delayTimer = setTimeout(() => {
        setSearch(inputValue)
      }, 2000);
    }
  };
  console.log(data)

  return (
    <>
      <Stack direction={'row'} justifyContent={'center'} marginBottom={3}>
        <TextField label="Outlined" onChange={delay} variant="outlined" />
      </Stack>
      <Stack direction={'row'} justifyContent={'center'}>
        {loading ? (
          <CircularProgress /> // Show a loading indicator while fetching data
        ) : (
          <Stack direction={'row'} gap={3} justifyContent={'center'} flexWrap={'wrap'}>
            {data.map((movie) => (
              <Card key={movie.Title} sx={{ maxWidth: 345 }}>
                <CardMedia component="img" alt={movie.Title} height="140" image={movie.Poster} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {movie.Title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Year: {movie.Year}, Type: {movie.Type}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/movie/${movie.imdbID}`}>
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
              </Card>
            ))}
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default MovieListing;