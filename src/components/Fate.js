import React, { Component } from 'react';
import '../App.css';

export default class Fate extends Component{
  render(){
    return (
      <>

        {/* Here is where you can customize the result of a bad match */}
        <p className = "results">{this.props.name[0]} and {this.props.name[1]} are destined to be together.</p>

      </>
    );
  }
}
