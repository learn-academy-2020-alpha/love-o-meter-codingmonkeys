import React, { Component } from 'react';
import './App.css';
import GoodMatch from './components/GoodMatch'
import BadMatch from './components/BadMatch'
import Fate from './components/Fate'

export default class App extends Component{
  constructor(props){
    super(props)
    // The state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // The handleChange methods update userName and loveName as the user types
      loveCompatability: 0,
      userName: "",
      loveName: "",
      nameArray: []
    }
  }

  handleChangeUser = (e) => {
    // This method takes the input and saves the value in this.state.userName so we can use the input in our program
    // no need to modify this method
      this.setState({ userName: e.target.value })
  }

  handleChangeLove = (e) => {
    // This method takes the input and saves the value in this.state.loveName so we can use the input in our program
    // No need to modify this method
    this.setState({ loveName: e.target.value })
  }

  // Add a method here that returns information to your user by adding a key:value pair to the state object. This method should utilize the user inputs established in state.
  calculateCompatability = () => {
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","n","m","o","p","q","r","s","t","u","v","w","x","y","z"]

    let getNames = [this.state.userName,this.state.loveName]
    
    this.setState({ nameArray: getNames })
    
    let firstName = this.state.userName.charAt(0)

    firstName = firstName.toLowerCase();

    let secondName = this.state.loveName.charAt(0)

    secondName = secondName.toLowerCase();
    let x = alphabet.indexOf(firstName)

    let y= alphabet.indexOf(secondName)

    let loverPercent =(100 - (Math.abs(Math.floor(((x-y)/alphabet.length)*100))))

    this.setState({loveCompatability : loverPercent })
  }


  render(){

    // Destructuring this.state so that you may just use the following variables throughout your code
    let { loveCompatability,
          userName,
          loveName
        } = this.state

    return(
      <>

        <div id = "all">
          <h1 id = "title"> Love-O-Meter </h1>

          {/* User input field - every DOM event that happens in the input will call the handleChange methods and update state */}
          <input
            id = "userName"
            onChange = { this.handleChangeUser }
            value = { userName }
            placeholder = "Your name"
          />
          <span id = "plus"> + </span>
          <input
            id = "loveName"
            onChange = { this.handleChangeLove }
            value = { loveName }
            placeholder = "Your love's name"
          />
          <br/>

          <button onClick = {this.calculateCompatability}
            id = "submitButton"
            type = "submit"
          >
          Submit!
          </button>

          <p> Your compatibility percentage! </p>

          <textarea
            id = "compatibility"
            placeholder = "???"
            value = { `${this.state.loveCompatability}%` }
          />

          {/* Conditional rendering, based on the return value of calculatePercentage */}
          {/* Feel free to go in and change the values here to fall in line with your desired matching criteria */}
          { loveCompatability <= 50 && loveCompatability > 0 &&
            <div>
              <BadMatch name = {this.state.nameArray}/>
            </div>
          }

          { loveCompatability > 50 && loveCompatability < 90 &&
            <div>
              <GoodMatch name = {this.state.nameArray}/>
            </div>
          }
          { loveCompatability >= 90  &&
            <div>
              <Fate name = {this.state.nameArray}/>
            </div>
          }

          {/* Go ahead and customize this info! */}
          <footer> Developed by: Cruz & Julia | LEARN Academy Alpha 2020 </footer>
        </div>

      </>
    )
  }
}
