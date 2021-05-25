import React, { Component } from 'react'
import PersonCard from './components/PersonCard'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonCard lastName='Alghamdi' firstName='Samar' age={25} hairColor='black'/>
        <PersonCard lastName='Pancake' firstName='Nora' age={21} hairColor='blond'/>
        <PersonCard lastName='Waffels' firstName='Anfal' age={23} hairColor='black'/>
        <PersonCard lastName='Alqabbani' firstName='Faisal' age={24} hairColor='blond'/>
      </div>
    )
  }
}

