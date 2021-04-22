import React from 'react';
import './css/App.css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar.jsx';
import Home from './components/navigation/Home.jsx';
import Series from './components/navigation/Series.jsx';
import Films from './components/navigation/Films.jsx';
import NewAndPopular from './components/navigation/NewAndPopular.jsx';
import MyList from './components/navigation/MyList.jsx';
import SearchArea from './components/navigation/SearchArea.jsx';
import MovieList from './components/navigation/MovieList.jsx';
import Pagination from './components/navigation/Pagination.jsx';
import MovieInfo from './components/navigation/MovieInfo.jsx';
import Movie from './components/navigation/Movie.jsx';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results], totalResults: data.total_results})
    })
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}(pageNumber)`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results], currentPage: pageNumber})
    })
  }

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id == id)

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null 

    this.setState({ currentMovie: newCurrentMovie })
  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
  }

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);

    return (
      <BrowserRouter>
      <div className="App-content">
        <NavBar/>
        {this.state.currentMovie == null ? <div><SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} /></div> : <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />}

        <Route path='/' component={Home} exact />
        <Route path='/series' component={Series} />
        <Route path='/films' component={Films} />
        <Route path='/newandpopular' component={NewAndPopular} />
        <Route path='/mylist' component={MyList} />

        { this.state.totalResults > 90 && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
      

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
