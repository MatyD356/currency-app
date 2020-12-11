import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import '../styles/App.scss'
import Exchange from './Exchange'
import exchange from '../assets/exchange.svg';


const App = () => {
  return (
    <div className='App' aria-label='App'>
      <div className='Navigation'>
        <h1>Wymiana walut</h1>
      </div>
      <img src={exchange} alt="logo" />
      <Exchange />
      <div className='Footer'>
        <p>Dane walutowe pochodzą z NBP</p>
      </div>
    </div >
  )
}

export default hot(module)(App)