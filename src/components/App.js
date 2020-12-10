import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import '../styles/App.scss'
import Exchange from './Exchange'


const App = () => {
  return (
    <div className='App' aria-label='App'>
      <h1>Currency App</h1>
      <Exchange />
    </div >
  )
}

export default hot(module)(App)