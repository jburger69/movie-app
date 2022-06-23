import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovielistHeader from './components/MovielistHeader';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);


  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=6c8de510`
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const AddFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
  }


  return (
    <div className="App">
      <div className="container-fluid movie-app">
        <div className='row d-flex align-items-center md-4 mt-4'>
          <MovielistHeader heading="Movies"/>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className="row">
          <MovieList 
          movies={movies}
          handleFavoritesClick={AddFavoriteMovie}
          favoriteComponent={AddFavorites}
          />
        </div>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovielistHeader />
        </div>
      </div>
    </div>
  );
}

export default App;
