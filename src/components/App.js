import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import "./App.scss"


const App = () => {

  useEffect(() => {
    fetch('http://api.nbp.pl/api/exchangerates/rates/c/usd/today/')
      .then(response => response.json())
      .then(data => console.log(data));
  }, [])

  return (
    <div className="App" aria-label='App'>
      <h1>Hello, you</h1>
    </div>
  )
}

export default hot(module)(App)