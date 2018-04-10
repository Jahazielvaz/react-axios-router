import React, { Component } from 'react';
import './statics/main.css';
import { MovieList } from './components/MovieList.js'
import { Header } from './components/Header.js'
import { SubHeader } from './components/SubHeader.js'

class App extends Component {
  render() {
    return (
      <div id="main">
        <Header />
        <SubHeader />
        <MovieList />
      </div>
    );
  }
}

export default App;
