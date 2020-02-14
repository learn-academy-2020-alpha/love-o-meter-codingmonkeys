import React, { Component } from 'react';
import '../App.css';

export default class Valentines extends Component{
  render(){
    return (
      <>

        {/* Here is where you can customize the result of a good match */}
        <p className = "results">Hey! {this.props.name[0]} and {this.props.name[1]} are a great match!</p>
      </>
    );
  }
}
