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
    const pln = { currency: 'złoty', code: 'PLN', mid: 1 }
    fetch('http://api.nbp.pl/api/exchangerates/tables/a/')
      .then(response => response.json())
      .then(data => [Object.assign({}, data[0], { rates: [...data[0].rates, pln] })])
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
  }, [firstCurrencyValue, secondCurrencyValue, firstCurrency, secondCurrency])

  const round = (value, decimals) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
  }

  return (
    <div className='App' aria-label='App'>
      <h1>Currency App</h1>
      <div className='exchange'>
        <div className='exchange-inputs'>
          <Input
            id='first'
            first={firstCurrency}
            second={secondCurrency}
            changeActive={setActive}
            hook={firstCurrencyValue}
            saveToHook={setFirstCurrencyValue}
          />
          <Input
            id='second'
            first={firstCurrency}
            second={secondCurrency}
            changeActive={setActive}
            hook={secondCurrencyValue}
            saveToHook={setSecondCurrencyValue}
          />
        </div>
        <div className='exchange-selects'>
          <Select data={nbpData} saveToHook={setFirstCurrency} />
          <Select data={nbpData} saveToHook={setSecondCurrency} />
        </div>
      </div>
    </div >
  )
}

export default hot(module)(App)