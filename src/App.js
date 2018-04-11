import React, { Component } from 'react';
import './statics/main.css';
import { MovieList } from './components/MovieList.js'
import { Header } from './components/Header.js'
import { SubHeader } from './components/SubHeader.js'
const axios = require('axios');


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: {}
    }

  } //End of constructor

  // handleMovieChange(event){
  //   axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=f87bfd63cf10fcb4af7c0600a76ea5a7&language=en-US&page=1&region=us')
  //   .then((res) => {
  //     this.setState({
  //       title: res.data.results
  //     })
  //   })
  // }

  render() {
    return (
      <div id="main">
        <Header />
        <SubHeader />
        <MovieList />

      </div>
    );
  }

  componentDidMount(){
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=f87bfd63cf10fcb4af7c0600a76ea5a7&language=en-US&page=1&region=us')
    .then((res) =>{
      console.log(res.data.results)
    })
    .catch((error) =>{
      console.log('This is a custom error')
    })
  }




}// End of app component

export default App;
