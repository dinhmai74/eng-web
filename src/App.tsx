import HomeScreen from 'containers/home-screen';
import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> <code />
          </p>
          <Trans>welcome</Trans>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <HomeScreen/>
        </header>
      </div>
    );
  }
}

export default App;
