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


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: ''
    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results]})
    })
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App-content">
        <NavBar/>
        <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <Route path='/' component={Home} exact />
        <Route path='/series' component={Series} />
        <Route path='/films' component={Films} />
        <Route path='/newandpopular' component={NewAndPopular} />
        <Route path='/mylist' component={MyList} />
        <MovieList movies={this.state.movies} /> 
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
