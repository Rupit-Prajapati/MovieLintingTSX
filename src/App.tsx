import React from "react";
import { Route, Routes } from 'react-router-dom'
import MovieListing from "./MovieListing";
import MovieDetail from "./MovieDetail";
import { Box } from '@mui/material'
const App = () => {

  return (
    <Box marginTop={3}>
      <Routes>
        <Route path="/" element={<MovieListing />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Box>
  );
};

export default App;