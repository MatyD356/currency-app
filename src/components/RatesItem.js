import React, { useState } from 'react'
import Chart from './Chart'

const RatesItem = ({ item }) => {
  const [activeChart, setActiveChart] = useState(0)

  return (
    <>
      <div className={`currency-flag currency-flag-xl currency-flag-${item.code.toLowerCase()} shadow`}></div>
      <div className='Rates-item-desc'>
        <p className='Rates-full-name'>{item.currency}</p>
        <p className='Rates-rate'>1 {item.code} = {item.mid.toFixed(4)} PLN</p>
        <button onClick={() => setActiveChart(30)}>30days</button>
        <button onClick={() => setActiveChart(60)}>60days</button>
        <button onClick={() => setActiveChart(90)}>90days</button>
        {activeChart ? <Chart days={activeChart} currency={item.code} /> : null}
      </div>
    </>
  )
}

export default RatesItem