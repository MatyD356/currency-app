import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import '../styles/App.scss'
import Exchange from './Exchange'
import exchange from '../assets/exchange.svg';


const App = () => {
  return (
    <div className='App' aria-label='App'>
      <h1>Currency App</h1>
      <img src={exchange} alt="logo" />
      <Exchange />
    </div >
  )
}

export default hot(module)(App)