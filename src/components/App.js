import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader'

import '../styles/App.scss'

import Navbar from './Navbar'
import Exchange from './Exchange'
import Rates from './Rates'
import Footer from './Footer'
import Charts from './Charts'

import callNbp from '../apiCalls'


const App = () => {
  const [nbpData, setNbpData] = useState({})
  //.then(data => [Object.assign({}, data[0], { rates: [...data[0].rates, pln] })])
  //fetching data from nbp
  useEffect(() => {
    callNbp('http://api.nbp.pl/api/exchangerates/tables/a/', setNbpData)
  }, [])
  return (
    <div className='App' aria-label='App'>
      <Navbar />
      <Exchange nbpData={nbpData} />
      <Charts />
      <Rates nbpData={nbpData} />
      <Footer />
    </div >
  )
}

export default hot(module)(App)