import './App.css';
import React, {Component} from 'react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt.Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>
      </div>
    );
  }
}

export default App;
