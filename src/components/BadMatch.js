import React, { Component } from 'react';
import '../App.css';

export default class BadMatch extends Component{
  render(){
    return (
      <>

        {/* Here is where you can customize the result of a bad match */}
        <p className = "results">Yikes! {this.props.name[0]} and {this.props.name[1]} are not very compatible. Consider getting your name changed?</p>

      </>
    );
  }
}
