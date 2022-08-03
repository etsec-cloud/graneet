import React from 'react'
export default class CityCard extends React.Component {
  constructor(props) {
    super(props);
    this.city = props.city
    this.color = props.color
  }
  render() {
    return (
    <div>
        <p>{this.city ? this.city.title : "no match found"}</p> 
        <p>{this.city ? this.city.number : "0"}</p> 
    </div>
    );
  }
}