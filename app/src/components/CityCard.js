import React from 'react'
import Card from './Card'
export default class CityCard extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title
    this.state = {value: '', city: {title:"", zip:0}};
  }
  render() {
    return (
    <div>
        <h1>{this.title}</h1>
        <div>
            <Card city={this.city} />
        </div>
    </div>
    );
  }
}