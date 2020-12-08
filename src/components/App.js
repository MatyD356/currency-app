import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import './App.scss'


const App = () => {
  const [currencyData, setCurrencyData] = useState({})
  const [firstCurrency, setFirstCurrency] = useState({})
  const [secondCurrency, setSecondCurrency] = useState({})
  const [currencyValue, setCurrencyValue] = useState(0)
  const [secondCurrencyValue, setSecondCurrencyValue] = useState(0)


  useEffect(() => {
    fetch('http://api.nbp.pl/api/exchangerates/tables/a/today/')
      .then(response => response.json())
      .then(data => setCurrencyData(data[0]))
  }, [])

  useEffect(() => {
    const exchanged = (currencyValue * firstCurrency?.mid) / secondCurrency?.mid;
    setSecondCurrencyValue(round(exchanged, 2))
  }, [currencyValue, secondCurrencyValue])


  const handleSelectChange = (e, callback) => {
    callback(currencyData.rates[e.target.value])
  }
  const handleInputChange = (e, callback) => {
    callback(e.target.value)
  }
  const round = (value, decimals) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
  }
  return (
    <div className='App' aria-label='App'>
      <h1>Currency App</h1>
      <div>
        <label htmlFor='select-currency'>Wybierz pierwszą Walutę</label>
        <select onChange={(e) => handleSelectChange(e, setFirstCurrency)} id='first-currency'>
          <option value=''></option>
          {currencyData.rates?.map((item, index) =>
            <option key={item.code} value={index}>
              {item.currency} {item.code}
            </option>
          )}
        </select>
      </div>
      <div>
        <label htmlFor='second-currency'>Wybierz drugą Walutę</label>
        <select onChange={(e) => handleSelectChange(e, setSecondCurrency)} id='second-currency'>
          <option value=''></option>
          {currencyData.rates?.map((item, index) =>
            <option key={item.code} value={index}>
              {item.currency} {item.code}
            </option>
          )}
        </select>
      </div>
      <div>
        <label htmlFor='currency-value'>Podaj ilość pierwszej waluty</label>
        <input
          id='currency-value'
          type='number'
          onChange={(e) => handleInputChange(e, setCurrencyValue)}
          value={currencyValue}
        />
      </div>
      <div>
        <label htmlFor='currency-value'>Podaj ilość pierwszej waluty</label>
        <input
          id='second-currency-value'
          type='number'
          onChange={(e) => handleInputChange(e, setSecondCurrencyValue)}
          value={secondCurrencyValue}
        />
      </div>
      <div>
      </div>
    </div>
  )
}
/*
{currencyData.rates.map(item => {
          console.log(item)
          return <div>
            <p>{item.currency} : {item.mid.toFixed(4)} zł</p>
          </div>
        })} */

export default hot(module)(App)