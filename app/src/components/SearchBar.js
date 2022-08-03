import React from 'react'
import '../css/SearchBar.css';
import axios from 'axios';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', cities: {}};
    this.handleChange = this.handleChange.bind(this);
  }
  
  async handleChange(event) {
    this.setState({value: event.target.value});
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
    console.log(this.state.value)
    if(this.state.value.length > 2) {
      await axios.get("http://localhost:3000/city/find/"+event.target.value, axiosConfig).then((res) => {
        this.cities = res.data;
        this.props.handleClick(this.cities[0])
        console.log(this.cities)
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  render() {
    return (
      <form className='searchContainer'>
        <label>
         <p className='searchLabel'> Je recherche... : </p>
          <input className='searchBar' placeholder='...Une ville, un code postal' type="text"  value={this.state.value} onChange={this.handleChange} onBlur={this.callAPi} />
          
        </label>
      </form>
    );
  }
}