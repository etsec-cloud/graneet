import SearchBar from './components/SearchBar';
import './App.css';
import CityCard from './components/CityCard';
import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {city: {}};
  }
  
  handleClick = cities => {
    console.log("ucu", cities)
  };
  render(){
    return (
      <div className="App">
        <SearchBar handleClick={this.handleClick}/>
        <div className="flex-row">
          <CityCard title={this.city}/>
        </div>
      </div>
    );
  }
}

export default App;
