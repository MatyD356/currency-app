import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import './App.scss'
import Select from './Select'
import Input from './Input'


const App = () => {
  const [nbpData, setNbpData] = useState({})
  const [firstCurrency, setFirstCurrency] = useState({})
  const [secondCurrency, setSecondCurrency] = useState({})
  const [firstCurrencyValue, setFirstCurrencyValue] = useState(0)
  const [secondCurrencyValue, setSecondCurrencyValue] = useState(0)
  const [active, setActive] = useState('')

  useEffect(() => {
    fetch('http://api.nbp.pl/api/exchangerates/tables/a/')
      .then(response => response.json())
      .then(data => setNbpData(data[0]))
  }, [])

  useEffect(() => {
    if (active === 'first') {
      const exchanged = (firstCurrencyValue * firstCurrency?.mid) / secondCurrency?.mid;
      setSecondCurrencyValue(round(exchanged, 2))
    } else if (active === 'second') {
      const exchanged = (secondCurrencyValue * secondCurrency?.mid) / firstCurrency?.mid;
      setFirstCurrencyValue(round(exchanged, 2))
    }
  }, [firstCurrencyValue, secondCurrencyValue])

  const round = (value, decimals) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
  }

  return (
    <div className='App' aria-label='App'>
      <h1>Currency App</h1>
      <Select data={nbpData} saveToHook={setFirstCurrency} />
      <Select data={nbpData} saveToHook={setSecondCurrency} />
      <Input id='first' hook={firstCurrencyValue} saveToHook={setFirstCurrencyValue} changeActive={setActive} />
      <Input id='second' hook={secondCurrencyValue} saveToHook={setSecondCurrencyValue} changeActive={setActive} />
    </div >
  )
}

export default hot(module)(App)