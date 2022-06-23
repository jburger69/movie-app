import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovielistHeader from './components/MovielistHeader';
import SearchBox from './components/SearchBox';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');




  return (
    <div className="App">
      <div className="container-fluid movie-app">
        <div className='row d-flex align-items-center md-4 mt-4'>
          <MovielistHeader heading="Movies"/>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className="row">
          <MovieList movies={movies}/>
        </div>
      </div>
    </div>
  );
}

export default App;
