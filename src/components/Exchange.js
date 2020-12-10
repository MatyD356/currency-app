import React, { useState, useEffect } from 'react'
import '../styles/Exchange.scss'
import Select from './Select'
import Input from './Input'
import callNbp from '../apiCalls'

const Exchange = () => {
  const [nbpData, setNbpData] = useState({})
  const [firstCurrency, setFirstCurrency] = useState({})
  const [secondCurrency, setSecondCurrency] = useState({})
  const [firstCurrencyValue, setFirstCurrencyValue] = useState(0)
  const [secondCurrencyValue, setSecondCurrencyValue] = useState(0)
  const [active, setActive] = useState('')

  //fetching data from nbp
  useEffect(() => {
    callNbp('http://api.nbp.pl/api/exchangerates/tables/a/', setNbpData)
  }, [])
  //exchanging values dependent of active hook which is seted in Input components
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
    <div className='Exchange' aria-label='Exchange'>
      <div className='Exchange-inputs'>
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
      <div className='Exchange-selects'>
        <Select data={nbpData} saveToHook={setFirstCurrency} />
        <Select data={nbpData} saveToHook={setSecondCurrency} />
      </div>
    </div >
  )
}

export default Exchange