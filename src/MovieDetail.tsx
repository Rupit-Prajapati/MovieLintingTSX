import axios from 'axios'
import React, { ReactNode, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Stack, CardMedia, Card, Typography, CardContent } from '@mui/material';

interface Movie {
  Language: string;
  Released: string;
  Country: string;
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
  Type: string;
}

const MovieDetail = () => {
  const [data, setData] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const apikey = '7fcae804';
  const url = 'https://www.omdbapi.com/';
  const { id } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}?apikey=${apikey}&i=${id}`);
        setData(response.data)
      } catch (error) {
        // Handle error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  return (
    <>
      <Stack direction={'row'} justifyContent={'center'} sx={{
        height: '90vh'
      }}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          data && (
            <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <CardMedia
                width={'50%'}
                component="img"
                alt={data.Title}
                // height="140"
                image={data.Poster}
              />
              <CardContent sx={{
                width: '50%'
              }}>
                <Typography gutterBottom variant="h4">
                  {data.Title}
                </Typography>
                <Typography gutterBottom variant="h5">
                  Country: {data.Country}
                </Typography>
                <Typography gutterBottom variant="h5">
                  Language: {data.Language}
                </Typography>
                <Typography gutterBottom variant="h5">
                  Released: {data.Released}
                </Typography>
                <Typography variant="h5">
                  Year: {data.Year}, Type: {data.Type}
                </Typography>
              </CardContent>
            </Card>
          )
        )}
      </Stack>
    </>
  )
}

export default MovieDetail
