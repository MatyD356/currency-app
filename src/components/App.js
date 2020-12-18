import React, { useState, useEffect, Suspense } from 'react'
import { hot } from 'react-hot-loader'

import '../styles/App.scss'

import Navbar from './Navbar'
import Exchange from './Exchange'
const Rates = React.lazy(() => import('./Rates'))
const Footer = React.lazy(() => import('./Footer'))

import { callNbp } from '../apiCalls'


const App = () => {
  const [nbpData, setNbpData] = useState({})
  //fetching data from nbp
  useEffect(() => {
    callNbp('https://api.nbp.pl/api/exchangerates/tables/a/', setNbpData)
  }, [])
  return (
    <div className='App' aria-label='App'>
      <Navbar />
      <Exchange nbpData={nbpData} />
      <Suspense fallback={<div>...wczytuję</div>}>
        <Rates nbpData={nbpData} />
        <Footer />
      </Suspense>
    </div >
  )
}

export default hot(module)(App)