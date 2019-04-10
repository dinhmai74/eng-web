import { Hero, Navbar } from '@front10/landing-page-book/dist/components'
import HomeScreen from 'containers/home-screen'
import React, { Component } from 'react'
import { Trans } from 'react-i18next'
import './App.css'
import logo from './logo.svg'
import './semantic/dist/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          brandLink="https://front10.com"
          brandLogo="https://front10.com/img/logos/logo.png"
        />
        <Hero
          backgroundColor="#212529"
          particlesParams={{ particles: { line_linked: { enable: false } } }}
          header="Landing Page Book"
          subHeader="Some cool text"
        />
      </div>
    )
  }
}

export default App
