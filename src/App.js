import React, { Component } from 'react';
import './App.css';
import Game from './components/Game';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tic Tac Toe using ReactJS</h1>
          <p>
            Self-praise is for losers. Be a winner. Stand for something. Always
            have class, and be humble.
            <br /> - John Madden
          </p>
        </header>
        <p className="App-intro" />
        <Game />
      </div>
    );
  }
}

export default App;
