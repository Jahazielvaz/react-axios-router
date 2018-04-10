const React = require('react');

export class MovieList extends React.Component{

  render(){
    return(
      <div id="movie-list">
        <h3 id="movie-title"></h3>
        <div className= "cover"></div>
        <h3 id="movie-description"></h3>
        <h3 id="movie-rating"></h3>
      </div>
    )
  }
}
